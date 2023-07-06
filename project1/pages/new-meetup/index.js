import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const onAddMeetup = async (enteredMeetupData) => {
    //send request to server to create new meetup record
    const response = await fetch('/api/new-meetup', {
        method: 'POST',
        body: JSON.stringify(enteredMeetupData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log("data: " + JSON.stringify(data));
  };

  return <NewMeetupForm onAddMeetup={onAddMeetup} />;
};

export default NewMeetupPage;
