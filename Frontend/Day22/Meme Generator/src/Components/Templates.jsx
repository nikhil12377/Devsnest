import React from "react";

export default function Templates({ templates, setMeme }) {
  return (
    <div className="templates">
      {templates.map((template) => {
        return (
          <div
            key={template.id}
            className="template"
            onClick={() => setMeme(template)}
          >
            <div
              className="image"
              style={{ backgroundImage: `url(${template.url})` }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}
