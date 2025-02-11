import { useEffect, useState } from 'react';
import { Hero } from '../../model/heroes';
export function useAppVM() {
    const [heros, setHeroes] = useState<Hero[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/heros/get-hero')
            .then((res) => res.json())
            .then((data) => {
                const { heros, message, error } = data;
                if (message) {
                    console.error(message);
                }
                if (error) {
                    console.error(error);
                    return;
                }

                setHeroes(heros);
            });
    }, []);

    return { heros };
}