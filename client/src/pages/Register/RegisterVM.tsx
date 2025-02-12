import { useState } from 'react';
import { User } from '../../model/users';

export function useAppVM() {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);

    // ✅ Function to send user data to the backend
    const registerUser = async (userData: { email: string; fullName: string; password: string }) => {
        try {
            const response = await fetch('http://localhost:3000/api/users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });

            const result = await response.json();
            console.log();

            if (!response.ok) {
                throw new Error(result.error || 'Registration failed');
            }

            return { success: true, message: result.message };
        } catch (err: any) {
            console.error('Error:', err.message);
            setError(err.message);
            return { success: false, error: err.message };
        }
    };

    return { users, error, registerUser };
}
