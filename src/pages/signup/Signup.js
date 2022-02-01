import "./Signup.css";
import React, { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import axios from "axios";
import Checked from "../../assets/checked.svg";
import Uncheck from "../../assets/unchecked.svg";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (thumbnail) {
      console.log(email, password, displayName, thumbnail);
      signup(email, password, displayName, thumbnail);
    }
  };

  const uploadImage = (img) => {
    let body = new FormData();
    body.set("key", "4b57aded16dbc834cb85cd2b521f4243");
    body.append("image", img);

    return axios({
      method: "POST",
      url: "https://api.imgbb.com/1/upload",
      data: body,
    });
  };

  const handleFileChange = async (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];

    if (!selected) {
      setThumbnailError("Please Select A File");
      return;
    }
    if (!selected.type.includes("image")) {
      setThumbnailError("Selected File Must Be an Image");
      return;
    }
    if (selected.size > 100000) {
      setThumbnailError("Img File Size must be less than 100kb");
      return;
    }
    try {
      const uploadedImg = await uploadImage(selected);
      setThumbnailError(null);
      console.log(uploadedImg.data.data.display_url);
      setThumbnail(uploadedImg.data.data.display_url);
    } catch (err) {
      console.log(err.message);
    }

    // console.log(selected);

    console.log("thumbnail updated");
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label>
        <span>Email:</span>
        <input
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="email@example.com"
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="******"
        />
      </label>
      <label>
        <span>Display Name:</span>
        <input
          required
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
          placeholder="John Doe"
        />
      </label>
      <label className="thumbnail">
        <div>
          <span>Profile Thumbnail: </span>
          <input required type="file" onChange={handleFileChange} />
        </div>
        {thumbnail ? (
          <p>
            <img src={Checked} alt="" />
          </p>
        ) : (
          <p>{<img src={Uncheck} alt="" />}</p>
        )}
        {thumbnailError && <div className="error">{thumbnailError}</div>}
      </label>
      {!isPending && <button className="btn">Sign Up</button>}
      {isPending && (
        <button className="btn" disabled>
          Loading..
        </button>
      )}

      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
