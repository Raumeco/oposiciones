import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where, doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAPTTf0XBGT8vgbzrGN3qxR6NHiiMIMZJk",
    authDomain: "pictionary-clone.firebaseapp.com",
    projectId: "pictionary-clone",
    storageBucket: "pictionary-clone.appspot.com",
    messagingSenderId: "891886423451",
    appId: "1:891886423451:web:cebc2fe9e1bcc0d773253e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

window.createDocument = async function(doc, col) {
    if(!doc || !col) {        
        return;
    }
    try {        
        const docRef = await addDoc(collection(db, col), doc);
        
        doc.id = docRef.id;
        return doc;
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

window.updateDocumentById = async function(id, collection, attributes) {
    const reference = doc(db, collection, id);
    await updateDoc(reference, attributes);
}

window.getDocumentsByNumero = async function(num, col) {
    let q = query(collection(db, col), where("numero", "==", num));
    let querySnapshot = await getDocs(q);
    let results = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        let result = doc.data();
        result.id = doc.id;
        results.push(result)
    });
    return results;
}

window.getDocumentsByCollection = async function(col) {
    let q = query(collection(db, col));
    let querySnapshot = await getDocs(q);
    let results = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        let result = doc.data();
        result.id = doc.id;
        results.push(result)
    });
    return results;
}
/* updateDocumentById("2IoiIRGBJ02uqeZjtcKY", "ejercicios", {
    enunciado: "Enunciado de prueba 3",
    solucion: "Solución de prueba 3",
    numero: 3,
    nuevo: true
}) */


/* let tema = {
    titulo: "Tema 2",
    ejercicios: [],
    numero: 2,
};
let createdTema = await createDocument(tema, "temas")
console.log(createdTema); */

/* let ejercicio = {
    enunciado: "Enunciado de prueba 2",
    solucion: "Solución de prueba 2",
    numero: 2,
    tema: "FJXSxQzqQhg1Q6ilb53M",
}
let createdEjercicio = await createDocument(ejercicio, "ejercicios")
console.log(createdEjercicio); */

/* async function getEjerciciosByTemaId(id) {
    let q = query(collection(db, "ejercicios"), where("tema", "==", id));
    let querySnapshot = await getDocs(q);
    let results = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        let result = doc.data();
        result.id = doc.id;
        results.push(result)
    });
    return results;
}
console.log(await getEjerciciosByTemaId("FJXSxQzqQhg1Q6ilb53M")); */


/* document.getElementById("newPalabra").addEventListener("click", async function(e) {
    let name = document.getElementById("inputPalabra").value;
    name = name.toUpperCase();
    if(name == "") {
        alert("No dejes vacío el input mongolito")
        return
    }
    let categoria = document.getElementById("selectCategorias").value;
    let existe = await checkWordExists(categoria, name)
    if(existe) {
        alert("Ya existe esta palabra en la categoria seleccionada")
        return;
    }

    try {        
        const docRef = await addDoc(collection(db, "palabras"), {
            value: name,
            categoria: categoria
        });

    } catch (e) {
        console.error("Error adding document: ", e);
    }
    document.getElementById("inputPalabra").value = ""
}); */


/* async function checkWordExists(categoria, palabra) {
    const palabrasRef = collection(db, "palabras");
    const q = query(palabrasRef, where("value", "==", palabra), where("categoria", "==", categoria));
    const querySnapshot = await getDocs(q);
    return querySnapshot.empty == false
} */