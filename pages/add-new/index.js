import NewMeetupForm from "../../components/meetups/NewMeetupForm"
function addNew(){
    function onAddMeetUp(){
        console.log('This function does nothing right now')
    }
    return(
       <NewMeetupForm onAddMeetUp={onAddMeetUp} />
    )
}
export default addNew