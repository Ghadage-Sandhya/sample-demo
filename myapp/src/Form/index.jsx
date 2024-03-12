import React from "react";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
function Index() {
    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>

                <TextField
                        required
                        id="outlined-required"
                        label="First Name"
                        type="text"
                />
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Last Name"
                        type="text"
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Email address"
                        type="email"
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Phone Number"
                        type="tel"
                    />
                </div>
            </Box >
        </>
    )
}

export default Index



// import React from "react";

// function Index(){
//     return (
//         <>
//                 <form action="">

//                     <div>
//                         <label htmlFor="">First Name</label>
//                         <input type="text" name="" id="" />
//                     </div>
//                 </form>
//         </>
//     )
// }

// export default Index