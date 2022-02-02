import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

export const useDocument = (collection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  // real time data for document

  useEffect(() => {
    let ref = projectFirestore.collection(collection).doc(id);

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        if (snapshot.data()) {
          setDocument({ ...snapshot.data(), id: snapshot.id });
          setError(null);
        } else {
          setError("No Such Document Exists");
        }
      },
      (error) => {
        console.log(error);
        setError("Failed To Get Document");
      }
    );

    // unsubscribe on unmount
    return () => unsubscribe();
  }, [collection, id]);

  return { document, error };
};
