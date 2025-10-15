import { TextArea, Button } from "../components";

function Summary(){
    return(
        <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center px-4 py-8 sm:px-6 lg:px-16">
            <div className="w-full max-w-2xl">
                <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-white text-center sm:text-left">
                    Summarize Text
                </h1>

                <div>
                    <TextArea 
                        className='bg-slate-800 p-4 border-slate-700 
                        focus:ring-2'
                        placeholder="Paste your long-form content here..."
                        rows={20}
                    />
                </div>

                <div className="flex flex-col space-y-4">
                    <div id="summary" className="flex-grow bg-slate-800 p-4 rounded-lg border border-slate-700 relative">
                        <p className="text-slate-400">Your concise summary will appear here.</p>
                    </div>

                    <Button 
                        bgColor='bg-sky-600'
                        className="w-full py-3 px-6 hover:bg-sky-700 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                        <span>Summarize</span>
                    </Button>

                </div>
            </div>
        </div>
    )
}

export default Summary;