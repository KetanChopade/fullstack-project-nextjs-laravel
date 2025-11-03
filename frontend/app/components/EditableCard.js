"use client";
import { useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

export default function EditableCard({ data, onChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(data.title);
  const [desc, setDesc] = useState(data.description);

  const handleSave = () => {
    setIsEditing(false);
    onChange({ ...data, title, description: desc });
  };

  return (
    <div className="border rounded-xl p-4 shadow-sm bg-white relative hover:shadow-md transition-all">
      {!isEditing ? (
        <>
          <div className="absolute top-3 right-3 cursor-pointer text-gray-600">
            <EditOutlinedIcon onClick={() => setIsEditing(true)} />
          </div>
          <h4 className="font-semibold text-lg mb-2">{title}</h4>
          <p className="text-gray-600">{desc}</p>
        </>
      ) : (
        <>
          <div className="absolute top-3 right-3 cursor-pointer text-green-600">
            <SaveOutlinedIcon onClick={handleSave} />
          </div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded p-2 w-full mb-2"
          />
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="border rounded p-2 w-full"
            rows="3"
          />
        </>
      )}
    </div>
  );
}
