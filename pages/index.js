import MeetUpList from '../components/meetups/MeetupList'


function Home(){
    const dummyList=[
        {
            id:'m1',
            image:'https://variety.com/wp-content/uploads/2015/08/google-placeholder-logo.jpg?w=681&h=383&crop=1',
            title:'Paris Meet up ',
            address:'Paris tower 2247'

        },
        {
            id:'m2',
            image:'https://variety.com/wp-content/uploads/2015/08/google-placeholder-logo.jpg?w=681&h=383&crop=1',
            title:'Paris Second meetup Meet up ',
            address:'Paris tower No place for this'
        }
    ]
    return(
        <MeetUpList meetups={dummyList} />
    )
}
export default Home