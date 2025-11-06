"use client";
import { useState, useEffect } from "react";
import EditableCard from "../components/EditableCard";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

export default function AdminDashboard() {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [sectionTitle, setSectionTitle] = useState("");
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sectionKey = "drive-payments"; // Must match DB field

  // Fetch section data from Laravel
  useEffect(() => {
    const fetchSection = async () => {
      try {
        const response = await fetch(`https://ketaan-chopade-assignment.42web.io/api/sections/${sectionKey}`);
        if (!response.ok) throw new Error("Failed to fetch section");
        const data = await response.json();

        // Ensure each card has a unique ID (important fix)
        const parsedCards = JSON.parse(data.cards || "[]").map((card, index) => ({
          id: card.id || index + 1, // assign ID if missing
          ...card,
        }));

        setSectionTitle(data.title || "");
        setCards(parsedCards);
      } catch (err) {
        console.error("Error fetching section:", err);
        setError("Could not load section data");
      } finally {
        setLoading(false);
      }
    };

    fetchSection();
  }, []);

  // Handle Card Change — updates only the specific card
  const handleCardChange = (updatedCard) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === updatedCard.id ? { ...updatedCard } : card
      )
    );
  };

  // Save title inline (local)
  const handleSaveTitle = () => {
    setIsEditingTitle(false);
    alert("Title updated locally. Click Publish to save changes.");
  };

  // Publish to Laravel API — CTCMHCAITCSCCS Style
  const handlePublish = async () => {
    try {
      const response = await fetch(`https://ketaan-chopade-assignment.42web.io/api/sections/${sectionKey}`, {
        method: "POST", // Laravel route uses POST for update
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          section_key: sectionKey,
          title: sectionTitle,
          cards: cards,
        }),
      });

      if (!response.ok) throw new Error("Failed to update section");

      const result = await response.json();
      alert(`Section updated successfully!\n${JSON.stringify(result.data, null, 2)}`);
    } catch (error) {
      console.error("Error updating section:", error);
      setError(error.message);
    }
  };

  // Loading & Error States
  if (loading) return <div className="text-center py-5">Loading section...</div>;
  if (error) return <div className="text-center text-danger py-5">{error}</div>;

  // Main Render
  return (
    <div className="container py-5">
      {/* ===== Top Section: Title + Publish ===== */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          {!isEditingTitle ? (
            <h3 className="fw-bold d-flex align-items-center gap-2">
              {sectionTitle}
              <EditOutlinedIcon
                role="button"
                className="text-secondary"
                onClick={() => setIsEditingTitle(true)}
              />
            </h3>
          ) : (
            <div className="d-flex align-items-center gap-2">
              <input
                value={sectionTitle}
                onChange={(e) => setSectionTitle(e.target.value)}
                className="form-control fw-bold"
              />
              <SaveOutlinedIcon
                role="button"
                className="text-success"
                onClick={handleSaveTitle}
              />
            </div>
          )}
        </div>

        <button
          onClick={handlePublish}
          className="btn btn-primary px-4 fw-semibold"
        >
          Publish
        </button>
      </div>

      {/* ===== Editable Cards Grid ===== */}
      <div className="row">
        {cards.map((card) => (
          <div className="col-md-4 mb-3" key={card.id}>
            <EditableCard data={card} onChange={handleCardChange} />
          </div>
        ))}
      </div>
    </div>
  );
}
