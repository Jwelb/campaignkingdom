import Image from "next/image";
//w-9/12 is 75% width which is perfect for us.
//Navbar
//Logo needs to be inserted
//items-center center vertically with flex
//justify-center center horizonttally with flex
//7 is a lucky
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 sm:items-baseline w-9/12">
        <div class="mb-2 sm:mb-0">
            <a href="#" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark">[logo]</a>
        </div>
        <div>
            <a href="/About" class="pr-7 text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">About</a>
            <a href="/Subscriptions" class="pr-7 text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Subscriptions</a>
            <a href="/Login" class="pr-7 text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Login</a>
            <button type="/Sign-Up" class="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-3 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign Up</button>
        </div>
      </nav>

      <div className="bg-white flex flex-col min-h-screen w-9/12 justify-center items-center text-center">
      <p className="text-black text-3xl">Stay tuned for the latest Happenings <br></br> in the realm of Campaign Kingdom!</p>
      <p className="text-black text-lg pt-7 pb-7">Discover new features, enhancements, and exciting news that shape the table top experience.</p>
      <button type="button" class="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-3 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign Up</button>
      </div>
    </main>
  );
}
