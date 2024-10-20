import { FC } from "react";

interface IText {
  text: string;
  color: string;
}
export const Title: FC<IText> = (props: IText) => {
  const { text, color } = props;

  return (
    <>
      <div className="jumbotron-title mb-5">
        <h1 className={`text-4xl lg:text-5xl text-${color} font-bold leading-10`}>
          {text}
        </h1>
      </div>
    </>
  );
};

export const Subtitle: FC<IText> = (props: IText) => {
  const { text, color } = props;
  return (
    <div className="jumbotron-title mb-5">
      <h1 className={`text-2xl text-${color} font-bold leading-5`}>{text}</h1>
    </div>
  );
};
