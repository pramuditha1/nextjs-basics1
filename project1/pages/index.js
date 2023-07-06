import MeetupList from "../components/meetups/MeetupList"

const DUMMY_MEETUS = [
    {
        id: "m1",
        title: "First meetup",
        image: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=1024x1024&w=is&k=20&c=ATqBHzO_cgsU8v6plHxVHTgE8zgK0BfEGzixY6JYg-c=",
        address: "first meetup address",
        description: "First meetup description",
    },
    {
        id: "m1",
        title: "First meetup",
        image: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=1024x1024&w=is&k=20&c=ATqBHzO_cgsU8v6plHxVHTgE8zgK0BfEGzixY6JYg-c=",
        address: "first meetup address",
        description: "First meetup description",
    }
]
const HomePage = () => {
  return (
    <MeetupList meetups={DUMMY_MEETUS}/>
  )
}

export default HomePage