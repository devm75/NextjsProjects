import User from '../components/user';

function userList(props) {
    const { users } = props;
    console.log(users);
     return <><h1>List of users</h1>
    {
        users.map((user) => {
            return <User user={ user}/> 
        })}
         </>
}
export default userList;

export async function getStaticProps() {
     
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    //console.log(data);
    return {
        props: {
            users:data,
        }
    }

 }