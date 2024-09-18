import React from 'react';
import {collection, doc,addDoc,query,getDoc,where,getDocs,updateDoc} from 'firebase/firestore';
import {firestore} from './firebase';
import './App.css';



function App(){
  const writeData= async()=>{
    const result=await addDoc(collection(firestore,"cities"),{
      name:'gangawati',
      pin :123,
    })


  }
 const makeSubCollection =async()=>{
  addDoc(collection(firestore,'cities/7qGJAD5qgScn9syCYLzg/people'),{
    type:'humble',
    look:'average'
  })
 }

 const getDocumentByQuery = async()=>{
  const collectionRef=collection(firestore,"users");
  const q= query(collectionRef,where("isMale","==",true));
  const snapshot=await getDocs(q);
  snapshot.forEach((data)=>console.log(data.data()));
 }
 const updateData=async()=>{
  const docRef=doc(firestore,'cities','FnnkVbC9t8eAWmI0WlIn');
  await updateDoc(docRef,{
    name:'homesick'
  });
  console.log("done");
 }
  return (
    <div className='App'>
    <h1>Firebase App</h1>
    <button onClick={writeData}> Put Data</button>
    <button onClick={makeSubCollection}>Put Sub Data</button>
    <button onClick={getDocumentByQuery}>Get Document By Query</button>
    <button onClick={updateData}>Update Data</button>
     </div>
  )
 

}
export default App;



