function Contact() {
    return (
            <form action="">

                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."/>

                <input type="submit" value="Submit"/>

            </form>
    )
}

export default Contact
