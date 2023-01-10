import './styles/App.css';
import Example from "./components/Example";


function App() {
  return (
    <main>
    <div className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
        <div>
          <section className="bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
              <h2
                className="max-w-2xl mx-auto text-3xl font-semibold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
                Fun-<span className="text-red-500">B</span><span className="text-yellow-500">o</span><span className="text-blue-500">x</span>
              </h2>

              <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
                This Reposetory is for all the fun stuff i do in my free time. I will try to add as much as possible. The only rule is that i can use it in one component. Nothing like a hole project, but all the snippets of coding.
              </p>

              <div className="inline-flex w-full mt-6 sm:w-auto">
                <a href="https://github.com/CodingBapthi/fun-box/blob/main/README.md"
                   className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                  Read More
                </a>
              </div>
            </div>
          </section>
          <hr className="w-48 h-1 mx-auto my-4 bg-blue-800 border-0 rounded md:my-10 dark:bg-blue-700" />
          <div className="container">
            <Example />
          </div>
        </div>
      </div>
    </div>
  </main>
  );
}

export default App;
