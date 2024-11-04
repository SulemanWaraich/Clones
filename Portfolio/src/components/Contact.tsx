function Contact() {
  return (
    <div className="w-screen min-h-screen p-5 bg-gray-100">
      <h1 className="md:text-4xl 2xl:w-[200px] text-3xl border-b-4 pb-2 mb-10 mt-4 border-sky-400 mx-auto md:w-[220px] w-[180px] font-bold">
        Contact Me
      </h1>
      <form className="flex flex-col justify-start mx-auto lg:w-3/6 md:w-4/6 w-3/4 items-start p-10 rounded-lg space-y-5 bg-white shadow-lg md:h-[80vh] overflow-hidden border-2">
        <div className="flex flex-col space-y-2 w-full">
          <label htmlFor="name" className="text-xl">Name</label>
          <input type="text" className="border-2 rounded-lg p-2 md:text-lg text-sm"  placeholder="Enter Your Name"/>
        </div>

        <div className="flex flex-col w-full space-y-2">
          <label htmlFor="email" className="text-xl">Email</label>
          <input type="email" className="border-2 rounded-lg p-2 md:text-lg text-sm"  placeholder="Enter Your Name" />
        </div>

        <div className="flex flex-col w-full space-y-2">
          <label htmlFor="message" className="text-xl">Message</label>
          <textarea name="message" rows={4} className="border-2 rounded-lg p-2 md:text-lg text-sm" placeholder="Enter Your Message"></textarea>
        </div>

    <div className="mx-auto bg-sky-400 md:py-4 md:px-6 px-3 py-2 rounded-lg">
        <button className="text-white font-semibold">Send Messages</button>
    </div>
      </form>
    </div>
  );
}

export default Contact;
