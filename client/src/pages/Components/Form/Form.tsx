import React, { FC } from "react";
import { useState } from "react";
import styles from "./Form.module.scss";

export interface FormField {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
}

export interface FormComponentProps {
  fields: FormField[];
  buttonLabel: string;
  onSubmit: (data: Record<string, string>) => void;
}

const Form: FC<FormComponentProps> = ({ fields, buttonLabel, onSubmit }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        {fields.map((field) => (
          <div key={field.name} className="mb-4">
            <label className="block font-semibold">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name] || ""}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
        ))}
        <button
          type="submit"
          className={styles.button}
        >
          {buttonLabel}
        </button>
      </form>
    </div>
  );
};

export default Form;
