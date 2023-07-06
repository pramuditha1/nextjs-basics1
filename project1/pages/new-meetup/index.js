import NewMeetupForm from "../../components/meetups/NewMeetupForm"

const NewMeetupPage = () => {
    const onAddMeetup = (enteredMeetupData) => {
        console.log("entered meetup data: " , enteredMeetupData);
    }

    return <NewMeetupForm onAddMeetup={onAddMeetup}/> 
}

export default NewMeetupPage;