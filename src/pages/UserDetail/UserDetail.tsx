import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const [user, setUser] = useState<{
        id: number,
        first_name: string,
        last_name: string,
        email: string,
        avatar: string
    }>();

    const params = useParams();

    useEffect(() => {
        fetch(process.env.REACT_APP_BACKEND_URI + '/users/' + params.id)
          .then(res => res.json())
          .then(data => setUser(data))
    }, []);
    
    return (
        <div>
            <h1>This is the UserDetail page</h1>
            <ul>
                <li>Id: {user?.id}</li>
                <li>First Name: {user?.first_name}</li>
                <li>Last Name: {user?.last_name}</li>
                <li>Email: {user?.email}</li>
                <li>Avatar: {user?.avatar}</li>
            </ul>
        </div>
    );
}

export default UserDetail;
