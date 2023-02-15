import { React, useState } from 'react'

function Contact() {
    const flexcentre = {
        position: "absolute",
        right: 0,
        left: 0,
        top: "10%",
        marginLeft: "auto",
        marginRight: "auto",
        width: "40vw",
    }
    const container = {
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        padding: "20px",
    }
    const inputCss = {
        width: "100%",
        padding: "12px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
        marginTop: "6px",
        marginBottom: "16px",
        resize: "vertical",
        backgroundColor: "white",
        color: "black",
    }
    const submitCss = {
        backgroundColor: "#04AA6D",
        color: "white",
        padding: "12px 25px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        width: "100px",
    }

    const [formdata, setFormdata] = useState({ name: "", email: "", designation: "", company: "", message: "" });
    const onChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //write your code for feching data to database
        console.log(formdata);
    }
    return (
        <div style={flexcentre}>
            <center style={{ marginBottom: "30px" }}><h1>Contact Us</h1></center>
            <div style={container}>
                <form>
                    <label htmlFor="name">Name</label>
                    <input style={inputCss} type="text" id="name" name="name" placeholder="Your name.." onChange={onChange} required/>

                    <label htmlFor="email">Email</label>
                    <input style={inputCss} type="email" id="email" name="email" placeholder="Your Email.." onChange={onChange} required/>

                    <label htmlFor="designation">Designation</label>
                    <input style={inputCss} type="designation" id="designation" name="designation" placeholder="Your designation.." onChange={onChange} required/>

                    <label htmlFor="company">Company</label>
                    <input style={inputCss} type="company" id="company" name="company" placeholder="Your company.." onChange={onChange} required/>

                    <label htmlFor="message">Message</label>
                    <textarea style={inputCss} id="message" name="message" placeholder="Write your message" onChange={onChange} required></textarea>

                    <button type="button" style={submitCss} disabled={false} onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact

