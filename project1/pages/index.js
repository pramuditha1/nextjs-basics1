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
        id: "m2",
        title: "First meetup",
        image: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=1024x1024&w=is&k=20&c=ATqBHzO_cgsU8v6plHxVHTgE8zgK0BfEGzixY6JYg-c=",
        address: "first meetup address",
        description: "First meetup description",
    }
]
const HomePage = (props) => {
  return <MeetupList meetups={props.meetups}/>
  
}

export async function getServerSideProps(context){
    const req = context.req;
    const res = context.res;

    //fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUS,
        }
    }
}

//SSG - Static Site Geeration
//validate will refresh each 10 second for new changes in meetups list
// export async function getStaticProps() {
//     //fetch data from an API
//     return {
//         props: {
//             meetups: DUMMY_MEETUS,
//         },
//         validate: 1 
//     }
// }

export default HomePage