import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ProfileView = () => {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newDateOfBirth, setNewDateOfBirth] = useState("");

  const handleUpdateUserInfo = async () => {
    try {
      const response = await fetch(
        `https://donkey-archive-af41e8314602.herokuapp.com/users/${user}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            username: newUsername,
            password: newPassword,
            email: newEmail,
            dateOfBirth: newDateOfBirth,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update user information");
      }

      alert("User information updated successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form>
      <Form.Group controlId="formNewUsername">
        <Form.Label>New Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter new username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formNewPassword">
        <Form.Label>New Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formNewEmail">
        <Form.Label>New Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter new email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formNewDateOfBirth">
        <Form.Label>New Date of Birth</Form.Label>
        <Form.Control
          type="date"
          value={newDateOfBirth}
          onChange={(e) => setNewDateOfBirth(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formFavoriteMovies">
        <Form.Label>Favorite Movies</Form.Label>
        <ul>
          {movies
            .filter((m) => user.FavoriteMovies.includes(m._id))
            .map((movie) => (
              <li key={movie._id}>
                {movie.title}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleRemoveFavoriteMovie(movie._id)}
                >
                  Remove
                </Button>
              </li>
            ))}
        </ul>
      </Form.Group>

      <Button variant="primary" onClick={handleUpdateUserInfo}>
        Update
      </Button>
    </Form>
  );
};

export default ProfileView;
