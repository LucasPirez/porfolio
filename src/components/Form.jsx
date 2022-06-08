const Form = ({ text, handleLanguaje }) => {
  return (
    <>
      <h3 className="text-slate-200 text-center pt-7  sm:text-4xl text-2xl">
        {text.header.contact}
      </h3>
      <form
        action="post"
        className="flex flex-col  items-center justify-center space-y-3 sm:text-lg text-base
         sm:w-96 w-[80] text-slate-200 last:items-end mt-7"
      >
        <input
          type="text"
          placeholder={text.contact.name}
          className="p-1 pl-3 focus:outline-none focus:border-2  focus:border-cyan-500 rounded bg-slate-900 placeholder-slate-500 w-full shadow-sm
          shadow-slate-400"
        />
        <input
          type="email"
          placeholder={text.contact.email}
          className="p-1 pl-3 focus:outline-none focus:border-2  focus:border-cyan-500 rounded bg-slate-900 placeholder-slate-500 w-full shadow-sm
          shadow-slate-400"
        />
        <textarea
          placeholder={text.contact.message}
          className="p-1 pl-3 focus:outline-none shadow-sm
          shadow-slate-400 focus:border-2  focus:border-cyan-500 rounded bg-slate-900 placeholder-slate-500 w-full max-h-40"
          maxLength={300}
        />
        <input
          type="submit"
          value={text.contact.submit}
          className=" p-1 px-3 rounded cursor-pointer hover:bg-cyan-500 border-2 border-cyan-700 bg-slate-900 active:scale-95"
        />
      </form>
    </>
  );
};

export default Form;
