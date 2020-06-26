import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";
import { css } from "emotion";

const slides = [
  {
    id: 0,
    url: "photo-1493397212122-2b85dda8106b?",
  },
  {
    id: 1,
    url: "photo-1496564203457-11bb12075d90?",
  },
  {
    id: 2,
    url: "photo-1481026469463-66327c86e544?",
  },
  {
    id: 3,
    url: "photo-1431576901776-e539bd916ba2?",
  },
];

const Navbar = () => {
  const bg = css`
    top: 0;
    left: 0;
    position: absolute;
    width: 100vw;
    height: 400px;
    background-size: cover;
    background-position: center;
    will-change: opacity;
  `;

  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });
  useEffect(
    () => void setInterval(() => set((state) => (state + 1) % 4), 2000),
    []
  );
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      class={bg}
      style={{
        ...props,
        backgroundImage: `url(https://images.unsplash.com/${item.url}ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9)`,
      }}
    />
  ));
};

export default Navbar;
