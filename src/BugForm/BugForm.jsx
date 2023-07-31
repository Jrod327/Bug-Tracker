// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import { FormControl, FormLabel } from "@mui/material";
import { useState } from "react";
import {
	Grid,
	Paper,
	TextField,
	Button,
	FormControl,
	InputLabel,
	Select,
	MenuItem
} from "@mui/material";

export default function BugForm() {
	const [title, setTitle] = useState("");
	const [priority, setPriority] = useState("");
	const [description, setDescription] = useState("");
	const [environment, setEnvironment] = useState("");
	const [stepsToReproduce, setStepsToReproduce] = useState("");
	const [expectedResult, setExpectedResult] = useState("");
	const [actualResult, setActualResult] = useState("");

	return (
		<div className="flex justify-center min-h-screen p-5 bg-sky-200">
			<Grid item xs={12} sm={10} md={8} lg={6}>
				<Paper
					className="p-5 mx-auto max-w-[800px]  md:max-w-[1000px] xl:mx-[300px] lg:mx-	[200px] sm:mx-[50px]  md:mx-[100px]"
					elevation={12}>
					<h1 className="text-2xl text-center my-4 font-sans">Bug Report</h1>
					<form className="space-y-4">
						<TextField
							label="Bug Title"
							fullWidth
							margin="normal"
							value={title}
							onChange={e => setTitle(e.target.value)}
						/>
						<FormControl fullWidth margin="normal">
							<InputLabel id="priority-select-label" style={{ fontSize: 14 }}>
								Priority
							</InputLabel>
							<Select
								labelId="priority-select-label"
								id="priority-select"
								value={priority}
								label="Priority"
								onChange={e => setPriority(e.target.value)}
								style={{ fontSize: 14 }}>
								<MenuItem value="Critical">Critical</MenuItem>
								<MenuItem value="High">High</MenuItem>
								<MenuItem value="Medium">Medium</MenuItem>
								<MenuItem value="Low">Low</MenuItem>
							</Select>
						</FormControl>
						<TextField
							label="Bug Description"
							multiline
							fullWidth
							margin="normal"
							value={description}
							onChange={e => setDescription(e.target.value)}
						/>
						<TextField
							label="Environment"
							multiline
							fullWidth
							margin="normal"
							value={environment}
							onChange={e => setEnvironment(e.target.value)}
						/>
						<TextField
							label="Steps to Reproduce"
							multiline
							fullWidth
							margin="normal"
							value={stepsToReproduce}
							onChange={e => setStepsToReproduce(e.target.value)}
						/>
						<TextField
							label="Expected Result"
							multiline
							fullWidth
							margin="normal"
							value={expectedResult}
							onChange={e => setExpectedResult(e.target.value)}
						/>
						<TextField
							label="Actual Result"
							multiline
							fullWidth
							margin="normal"
							value={actualResult}
							onChange={e => setActualResult(e.target.value)}
						/>
						<div className="flex justify-center">
							<Button variant="contained" color="primary" className="w-[200px]">
								Submit
							</Button>
						</div>
					</form>
				</Paper>
			</Grid>
		</div>
	);
}
