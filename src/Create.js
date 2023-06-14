import db from "./FbConfig";
import {useState} from "react";
import {ref,set,get,child} from "firebase/database";

export default function Create() {

	const[rno, setRno] = useState("");
	const[name, setName] = useState("");
	const[marks, setMarks] = useState("");

	const hRno = (event)=> {setRno(event.target.value); }
	const hName = (event)=> {setName(event.target.value); }
	const hMarks = (event)=> {setMarks(event.target.value); }

	const save = (event)=> {
		event.preventDefault();
		const r1 = ref(db);
		get(child(r1,"student/" + rno))
		.then((snapshot)=>{
			if(snapshot.exists())
			{
				alert(rno + "already exists");
				setRno("");
				setName("");
				setMarks("");
			}
			else
			{
				let data = {rno,name,marks};
				const r2 = ref(db, "student/" + rno);
				set(r2,data);
				alert("record created");
				setRno("");
				setName("");
				setMarks("");
			}
		})
		.catch(err=>console.log(err));
	}

	return(
	<>
	<center>
	<h1>Enter Student info</h1>
	<form onSubmit={save}>
	<input type="number" placeholder="enter rno"
	onChange={hRno} value={rno}/>
	<br/><br/>
	<input type="text" placeholder="enter name"	
	onChange={hName} value={name}/>
	<br/><br/>
	<input type="number" placeholder="enter marks"	
	onChange={hMarks} value={marks}/>
	<br/><br/>
	<input type="submit" value="Save"/>
	<br/><br/>
	</form>
	</center>
	</>
	);
}



