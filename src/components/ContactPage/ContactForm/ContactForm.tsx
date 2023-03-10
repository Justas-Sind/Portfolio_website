import styles from "./ContactForm.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

console.log(SERVICE_ID);
console.log(PUBLIC_KEY);

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Must be a valid email" }),
  emailMessage: z.string().min(1, { message: "Please enter a message" }),
});

type Email = z.infer<typeof schema>;

function ContactForm() {
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm<Email>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: Email) => {
    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    resetField("name");
    resetField("email");
    resetField("emailMessage");
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
      <h3>Contact form</h3>
      <div>
        <input placeholder="Full name" {...register("name")} />
        <p>{errors.name?.message}</p>
      </div>
      <div>
        <input placeholder="Email address" {...register("email")} />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <textarea placeholder="Your message" cols={50} {...register("emailMessage")} />
        <p>{errors.emailMessage?.message}</p>
      </div>
      <button className={styles.sendButton} type="submit">
        Send
      </button>
    </form>
  );
}

export default ContactForm;
