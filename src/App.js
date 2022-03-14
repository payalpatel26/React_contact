import React from "react";
import { useEffect, useState } from "react";
import jsonplaceholder from "./api/jsonplaceholder";
import randomuser from "./api/randomuser";
import ContactCards from "./components/contact/ContactCard";

const App = () => {
  const [imageList, setImageList] = useState([]);
  const [contactList, setContactList] = useState([]);

  useEffect(async () => {
    //fetching imagelist
    await randomuser
      .get("?results=10")
      .then((response) => {
        setImageList(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });

    //fetching userlist
    await jsonplaceholder
      .get("users")
      .then((response) => {
        setContactList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-white-100 pt-3">
      <section className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 p-20">
        {(contactList.length === 0) & (imageList.length === 0) ? (
          <div class=" flex justify-center items-center">
            <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          contactList.map((contact, index) => (
            <ContactCards
              contact={contact}
              imageUrl={imageList[index].picture.large}
              id={index}
              key={index}
            />
          ))
        )}
      </section>
    </div>
  );
};

export default App;
