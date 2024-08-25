import { useSpring, animated } from 'react-spring';
import { useEffect, useState } from 'react';

const SmoothMouseFollower = () => {
    const [xy, setXY] = useState([0, 0]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setXY([e.clientX, e.clientY]);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const springProps = useSpring({
        x: xy[0],
        y: xy[1],
        config: { mass: 1, tension: 120, friction: 20 },
    });

    return (
        <animated.div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                transform: springProps.x.to((x, y = springProps.y.get()) => `translate(${x}px, ${y}px)`),
                width: 20,
                height: 20,
                backgroundColor: 'white',
                borderRadius: '50%',
                pointerEvents: 'none',
            }}
        />
    );
};

export default SmoothMouseFollower;
