const Footer =()=>{
    return (
        <nav
  className="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
  <div className="flex w-full flex-wrap items-center justify-between px-3">
    <a
      className="ml-2 text-xl text-neutral-800 dark:text-neutral-200"
      href="https://hp-api.onrender.com/"
      >Powered by  Potter Public API </a>
    <div className="ml-5 flex w-[20%] items-center justify-between">
    <a
      className="ml-2 text-xl text-neutral-800 dark:text-neutral-200"
      href="https://twitter.com/AndisiAmbuku"
      >Created by Andisi Ambuku</a>
    </div>
  </div>
</nav>
    )
}

export default Footer