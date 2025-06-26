import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type TitleProps = {
  lineContent: string;
  lineContent2: string;
};

export default function Title({ lineContent, lineContent2 }: TitleProps) {
  let line1 = useRef<HTMLDivElement | null>(null);
  let line2 = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.set([line1.current, line2.current], { y: -64 });
    // gsap code here...]
    gsap.to(line1.current, {
      duration: 0.8,
      delay: 0.8,
      ease: "power3.out",
      y: 0,
      stagger: {
        amount: 0.15,
      },
    }); // <-- automatically reverted
    gsap.to(line2.current, {
      duration: 0.8,
      delay: 1,
      ease: "power3.out",
      y: 0,
      stagger: {
        amount: 0.15,
      },
    }); // <-- automatically reverted
  }, []);

  return (
    <h1 className="page-title">
      <div className="line-wrap">
        <div ref={line1} className="line1">
          {lineContent}
        </div>
      </div>
      <div className="line-wrap">
        <div ref={line2} className="line2">
          {lineContent2}
        </div>
      </div>
    </h1>
  );
}
