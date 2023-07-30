import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, FormLabel } from "@mui/material";

export default function BugForm() {
	return (
		<div className="">
			<FormControl>
				<FormLabel>Enter Name</FormLabel>
				<TextField variant="outlined" placeholder="Name"></TextField>
				<Button variant="outlined" color="success">
					Submit
				</Button>
			</FormControl>
			<FormControl className="">
				<FormLabel>Enter Name</FormLabel>
				<TextField variant="outlined" placeholder="Name"></TextField>
				<Button variant="outlined" color="success">
					Submit
				</Button>
			</FormControl>
		</div>
	);
}
