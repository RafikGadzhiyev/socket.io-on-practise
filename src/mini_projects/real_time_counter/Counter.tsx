import * as React from 'react';
import styled from '@emotion/styled';
import { io, Socket } from 'socket.io-client'

const State = styled.h1`
    font-size: 5rem;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .75rem;
`
const Button = styled.button`
    padding: .5rem .25rem;
    border: 1px solid #fff;
    border-radius: 5px;
    transition: 300ms;

    &:hover {
        background-color: #fff;
        color: #000;
    }

    &:active {
        background-color: #ccc;
    }
`


export const Counter = () => {
    const [count, setCount] = React.useState<number>(0);
    const BASE_URL = import.meta.env.VITE_BASE_SERVER_URL;
    const socket = React.useRef<Socket | null>(null);

    React.useEffect(() => {
        if (socket.current) {
            socket.current.on('update', (data: number) => {
                console.log(data);
                setCount(() => data);
            })

        } else {
            socket.current = io(BASE_URL);
        }
        return () => {
            socket.current?.off('update');
        }
    }, [])

    const increment = () => {
        setCount(prev => prev + 1);
        if (socket.current) {
            socket.current.emit('increment', count + 1)
        }
    }
    const decrement = () => {
        setCount(prev => prev - 1);
        if (socket.current) {
            socket.current.emit("decrement", count - 1);
        }
    }

    return <div>
        <State>
            {count}
        </State>
        <ButtonContainer>
            <Button
                onClick={() => increment()}
            >Increment</Button>
            <Button
                onClick={() => decrement()}
            >Dicrement</Button>
        </ButtonContainer>
    </div>
}