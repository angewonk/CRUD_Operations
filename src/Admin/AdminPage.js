import React, { useState } from 'react';
import './AdminPage.css'; // New CSS file for Admin Page

const AdminPage = () => {
  const initialUsers = [
    {
      id: 1,
      username: 'dububu',
      password: 'ilovemineers',
      firstName: 'Ronan',
      lastName: 'Soriano',
      profilePicture: 'https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-1/444497099_3858849734438503_7701021724821710478_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHQuM_y-PH06ETq_aN8BHLxwaB2Zn3ASEzBoHZmfcBITO39J_r9tsz4G5VXjV39PMsZAY_aWPYUno6yneyBxCjl&_nc_ohc=NcecWfZrCXQQ7kNvgFh2OiL&_nc_ht=scontent.fmnl4-2.fna&_nc_gid=AAY2Sz2dds_a8rIKLQcarGx&oh=00_AYBmq5pCTNzZMdZ108EKXw2sc-KRhLCwmcJHf80p68DaEA&oe=6720E28D',
      email: 'ronansoriano@gmail.com'
    },
    {
      id: 2,
      username: 'angewonk',
      password: 'arriana23',
      firstName: 'Takano',
      lastName: 'Tetsuo',
      profilePicture: 'https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/429642377_7932853223410711_4867270519541062648_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeE_uledRMU1ji6EDNx81gn6TATwu9ZKtQZMBPC71kq1Bj4axYqdUOXQd0-VIsUOLT8I3H7a2fkOidlIhtsbpUdX&_nc_ohc=_ZkN3OEbq_AQ7kNvgFmrLdp&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=AtRx15WJBMcN-jHzae8PpQu&oh=00_AYAu29bpyLEv9wVhYB6m226BBcsaV4ywmWyMJ27uZEDH4w&oe=6720BFB3',
      email: 'angewonk@gmail.com'
    },
    {
      id: 3,
      username: 'chuwu',
      password: 'sinabawangasin',
      firstName: 'Cesarr',
      lastName: 'Ballecer',
      profilePicture: 'https://m.media-amazon.com/images/M/MV5BYmY4OWMzYjAtMzc2OC00OTY0LTkwMDItYjk2MWYzNDg3NjZlXkEyXkFqcGc@._V1_.jpg',
      email: 'cjj@gmail.com'
    },
    
  ];

  const [users, setUsers] = useState(initialUsers);
  const [editingUserId, setEditingUserId] = useState(null);
  const [newProfilePicture, setNewProfilePicture] = useState({});

  const handleEdit = (id) => {
    setEditingUserId(id);
  };

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleInputChange = (e, id, field) => {
    const updatedUsers = users.map(user => {
      if (user.id === id) {
        return { ...user, [field]: e.target.value };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  const handleProfilePictureChange = (e, id) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProfilePicture(prev => ({ ...prev, [id]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (id) => {
    setUsers(users.map(user => {
      if (user.id === id) {
        return {
          ...user,
          profilePicture: newProfilePicture[id] || user.profilePicture
        };
      }
      return user;
    }));
    setEditingUserId(null);
    setNewProfilePicture({});
  };

  const handleCancel = () => {
    setEditingUserId(null);
    setNewProfilePicture({});
  };

  return (
    <div className="admin-body">
      <table className="admin-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Username</th>
            <th>Password</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Profile Picture</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    value={user.username}
                    onChange={(e) => handleInputChange(e, user.id, 'username')}
                  />
                ) : (
                  user.username
                )}
              </td>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="password"
                    value={user.password}
                    onChange={(e) => handleInputChange(e, user.id, 'password')}
                  />
                ) : (
                  user.password
                )}
              </td>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    value={user.firstName}
                    onChange={(e) => handleInputChange(e, user.id, 'firstName')}
                  />
                ) : (
                  user.firstName
                )}
              </td>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    value={user.lastName}
                    onChange={(e) => handleInputChange(e, user.id, 'lastName')}
                  />
                ) : (
                  user.lastName
                )}
              </td>
              <td>
                {editingUserId === user.id ? (
                  <div className="profile-edit-container">
                    <img
                      src={newProfilePicture[user.id] || user.profilePicture}
                      alt="Profile"
                      className="profile-pic-edit"
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleProfilePictureChange(e, user.id)}
                    />
                  </div>
                ) : (
                  <img src={user.profilePicture} alt="Profile" className="profile-pic" />
                )}
              </td>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="email"
                    value={user.email}
                    onChange={(e) => handleInputChange(e, user.id, 'email')}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editingUserId === user.id ? (
                  <div>
                    <button className="btn-save" onClick={() => handleSave(user.id)}>Save</button>
                    <button className="btn-cancel" onClick={handleCancel}>Cancel</button>
                  </div>
                ) : (
                  <div>
                    <button className="btn-edit" onClick={() => handleEdit(user.id)}>Update</button>
                    <button className="btn-delete" onClick={() => handleDelete(user.id)}>Delete</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
