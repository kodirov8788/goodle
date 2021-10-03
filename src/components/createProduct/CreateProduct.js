import React, { useState, useEffect } from "react";
import "./createProduct.css";
import firebaseApp from "../../firebase/firebase";

function CreateProduct() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [updateName, setUpdateName] = useState("");
  const [updateSurname, setUpdateSurname] = useState("");
  const [userData, setUserData] = useState([]);
  const [userId, setUserId] = useState("");
  //   const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    const database = firebaseApp.database().ref("/userInfo");
    database.on("value", (response) => {
      var data = response.val();
      //   setUserInfo([]);
      let userInfo = [];
      for (let id in data) {
        userInfo.push({
          id: id,
          name: data[id].name,
          surname: data[id].surname,
        });
      }
      setUserData(userInfo);
      console.log(userInfo);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const database = firebaseApp.database().ref("/userInfo");
    let data = {
      name: name,
      surname: surname,
    };
    database.push(data);
    setName("");
    setSurname("");
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();

    const database = firebaseApp.database().ref("/userInfo").child(userId);
    database.update({
      name: updateName,
      surname: updateSurname,
    });
    setUpdateName("");
    setUpdateSurname("");
  };
  const handleUpdateBtn = (data) => {
    setUpdateName(data.name);
    setUpdateSurname(data.surname);
    setUserId(data.id);
  };

  return (
    <div className="create_product">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="name"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <input
          type="text"
          name="firstName"
          placeholder="surname"
          onChange={(event) => setSurname(event.target.value)}
          value={surname}
        />
        <button>submit</button>
      </form>

      <form onSubmit={handleUpdateUser}>
        <input
          type="text"
          name="firstName"
          placeholder="updateName"
          onChange={(event) => setUpdateName(event.target.value)}
          value={updateName}
        />
        <input
          type="text"
          name="firstName"
          placeholder="updateSurname"
          onChange={(event) => setUpdateSurname(event.target.value)}
          value={updateSurname}
        />
        <button>update</button>
      </form>
      <br />
      {userData.length === 0 ? (
        <h1> no data</h1>
      ) : (
        <>
          {userData.map((data, index) => {
            return (
              <>
                <h1>{data.name}</h1>
                <h1>{data.surname}</h1>
              </>
            );
          })}
        </>
      )}

      <button onClick={handleUpdateBtn}>update</button>
      <button>delete</button>
    </div>
  );
}

export default CreateProduct;
