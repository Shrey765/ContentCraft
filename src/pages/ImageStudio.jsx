import { Input, Button } from "../components";

function ImageStudio() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-slate-900 text-white px-4 py-8 sm:px-6 lg:px-10">
      {/* Header */}
      <div className="text-center md:text-left mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-white">Image Studio</h1>
        <p className="text-slate-400 text-sm sm:text-base">Create stunning visuals for your content.</p>
      </div>

      {/* Input Section */}
      <div className="bg-slate-800 w-full max-w-4xl p-4 sm:p-6 rounded-lg border border-slate-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div className="flex-grow">
            <Input
                className="flex-grow w-full md:w-full p-3 focus:ring-2 text-sm sm:text-base"
                placeholder="Describe the image you want to create..."
                />
        </div>
        <Button
          bgColor="bg-sky-600"
          className="w-full md:w-auto py-3 px-5 sm:px-6 hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <span className="text-sm sm:text-base">Generate Image</span>
        </Button>
      </div>

      {/* Image Output Section */}
      <div className="flex justify-center">
        {/* Future: generated image preview goes here */}
      </div>
    </div>
  );
}

export default ImageStudio;
