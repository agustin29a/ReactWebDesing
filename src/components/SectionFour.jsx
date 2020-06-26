import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import { css } from "emotion";

const SectionFour = () => {
  const c_back = css`
    position: absolute;
    width: 90%;
    height: 90%;
    cursor: pointer;
    will-change: transform, opacity;
    background-size: cover;
    background-image: url("https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9");
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  `;

  const c_front = css`
    position: absolute;
    width: 90%;
    height: 90%;
    cursor: pointer;
    will-change: transform, opacity;
    background-size: cover;
    background-image: url("https://images.unsplash.com/photo-1514580426463-fd77dc4d0672?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9");
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  `;

  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div onClick={() => set((state) => !state)}>
      <a.div
        class={c_back}
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
      />
      <a.div
        class={c_front}
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
      />
    </div>
  );
};
export default SectionFour;
