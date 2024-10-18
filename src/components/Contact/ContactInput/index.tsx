import { FC } from "react";

interface IContactInput {
  label: string;
  placeholder: string;
  type: string;
}

export const ContactInput: FC<IContactInput> = (props: IContactInput) => {
  const { label, placeholder, type } = props;

  return (
    <>
      <div className="contact-label pb-2">
        <label className="font-bold text-courtney-dark-blue" htmlFor={label}>
          {label}
        </label>
      </div>
      <div className="contact-input pb-7">
        <input
          className="border border-courtney-soft-blue pl-2 py-5 w-full rounded-lg text-courtney-dark-blue"
          type={type}
          placeholder={placeholder}
          name={label}
          id={label}
        />
      </div>
    </>
  );
};

export const ContactInputArea: FC = () => {
  return (
    <>
      <div className="contact-label-area pb-2">
        <label
          className="font-bold text-courtney-dark-blue"
          htmlFor="project-detail"
        >
          Project Detail
        </label>
      </div>
      <div className="contact-input-area">
        <textarea
          className="border border-courtney-soft-blue pl-2 py-2 w-full rounded-lg h-24 text-courtney-dark-blue"
          placeholder="Your Project Detail"
        ></textarea>
      </div>
    </>
  );
};
