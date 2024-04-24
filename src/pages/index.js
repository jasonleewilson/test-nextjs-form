import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className='p-8'>
      <form name='contact' method='POST' data-netlify='true'>
        <input type='hidden' name='form-name' value='contact' />
        <p>
          <label>
            Your Name: <input type='text' name='name' />
          </label>
        </p>
        <p className='p-4'>
          <label>
            Your Email: <input type='email' name='email' />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name='message'></textarea>
          </label>
        </p>
        <p>
          <button className='bg-red' type='submit'>
            Send
          </button>
        </p>
      </form>
    </main>
  );
}
