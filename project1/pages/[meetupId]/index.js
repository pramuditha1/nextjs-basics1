import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      id="m1"
      title="First meetup"
      image="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=1024x1024&w=is&k=20&c=ATqBHzO_cgsU8v6plHxVHTgE8zgK0BfEGzixY6JYg-c="
      address="first meetup address"
      description="First meetup description"
    />
  );
};

export default MeetupDetails;
