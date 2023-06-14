import db from "./FbConfig";
import {get,ref,child,remove} from "firebase/database";
import {useState, useEffect} from "react";

export default function Home() {
	const [info, setInfo] = useState([]);

	useEffect(()=>{
	const dbref = ref(db);

	get(child(dbref, "student/"))
	.then((snapshot)=>{
			if(snapshot.exists() ){
				setInfo([]);
				console.log(snapshot.val());
				const data=snapshot.val()
				if (data !==null) {
			Object.values(data).map((da)=>{
					setInfo((oldArray)=>[...oldArray,da]);
			});
			}
		}
		else
		{
			console.log("no data");
		}
	})
},[])

	return(
	<>
	<center>
	<h1>Home Page</h1>
	<table border="5" style={{width:'50%'}}>
		<tr>
			<th> Rno </th>
			<th> Name </th>
			<th> Marks </th>
		</tr>
		{
			info.map((e=>
			<tr style={{"text-align":"center"}}>
				<td> {e.rno} </td>
				<td> {e.name} </td>
				<td> {e.marks} </td>
			</tr>
			))
		}
	</table>
	</center>
	</>
	);
}