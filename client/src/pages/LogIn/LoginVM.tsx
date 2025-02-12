import { useEffect, useState } from 'react';
import { User } from '../../model/users';
export function useAppVM() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/users/login')
            .then((res) => res.json())
            .then((data) => {
                const { users, message, error } = data;
                if (message) {
                    console.error(message);
                }
                if (error) {
                    console.error(error);
                    return;
                }

                setUsers(users);
            });
    }, []);

    return { users };
}