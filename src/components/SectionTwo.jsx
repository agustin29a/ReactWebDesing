import React, { useRef, useState, useEffect, useCallback } from "react";
import { useTransition, animated } from "react-spring";
import { css } from "emotion";

const SectionTwo = () => {
  const transitionsItem = css`
    overflow: hidden;
    width: 100%;
    color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 4em;
    font-weight: 800;
    text-transform: uppercase;
    will-change: transform, opacity, height;
    white-space: nowrap;
    cursor: pointer;
    line-height: 80px;
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
      helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial,
      sans-serif;
  `;

  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = useTransition(items, null, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#8fa5b6",
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: "perspective(600px) rotateX(180deg)", color: "#28d79f" },
      { transform: "perspective(600px) rotateX(0deg)" },
    ],
    leave: [
      { color: "#c23369" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: "#28b4d7" },
  });

  const reset = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => set(["Design", "Space", "New"]), 2000));
    ref.current.push(setTimeout(() => set(["Space", "New"]), 5000));
    ref.current.push(setTimeout(() => set(["Design", "Space", "New"]), 8000));
  }, []);

  useEffect(() => void reset(), []);

  return (
    <div>
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div
          className={transitionsItem}
          key={key}
          style={rest}
          onClick={reset}
        >
          <animated.div style={{ overflow: "hidden", height: innerHeight }}>
            {item}
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
};

export default SectionTwo;
