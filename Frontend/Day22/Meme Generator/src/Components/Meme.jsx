import React, { useState } from "react";

export default function Meme({ meme, setMeme }) {
  const [form, setForm] = useState({
    template_id: meme.id,
    username: "dnikhil372",
    password: "Pass@1234",
    boxes: [],
  });

  const generateMeme = () => {
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
    form.boxes.map((box, index) => {
      return (url += `&boxes[${index}][text]=${box.text}`);
    });
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMeme({ ...meme, url: data.data.url });
      });
  };
  return (
    <div className="meme">
      <img src={meme.url} alt={meme.name} />
      <br />
      {[...Array(meme.box_count)].map((_, index) => {
        return (
          <input
            key={index}
            type="text"
            placeholder={`meme caption ${index + 1}`}
            onChange={(e) => {
              const newBox = form.boxes;
              newBox[index] = { text: e.target.value };
              setForm({ ...form, boxes: newBox });
            }}
          />
        );
      })}
      <br />
      <div>
        <button onClick={generateMeme}>Generate Meme</button>
        <button onClick={() => setMeme(null)}>Choose Template</button>
      </div>
    </div>
  );
}
