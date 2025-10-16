import { Input, Select, TextArea, Button } from "../components"
import { useSession } from "../context"

export default function GenerateContent(){

    const {sessions, addSession, updateSession, deleteSession} = useSession();


    return(
        <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center px-4 py-8 sm:px-6 lg:px-16">
            <div className="w-full max-w-7xl">
                <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-white text-center sm:text-left">
                    Generate New Content
                </h1>

                {/* responsive grid: 1 column on small, 2 on large */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    {/* Left form card */}
                    <div className="bg-slate-800 p-4 sm:p-6 lg:p-8 rounded-lg border border-slate-700 space-y-6">
                        <div>
                            <TextArea 
                                label="What do You want to create?"
                                placeholder="e.g., A blog post about the future of AI..."
                                rows={5}
                                className="focus:ring-2 w-full resize-none"
                            />
                        </div>

                        <div>
                            <Select 
                                label="Content Type"
                                options={[
                                    {value: 'blog', label: 'Blog Post'},
                                    {value: 'twitter', label: 'Social Media Post (Twitter)'},
                                    {value: 'instagram', label: 'Social Media Post (Instagram)'},
                                    {value: 'linkedin', label: 'Social Media Post (LinkedIn)'},
                                    {value: 'email', label: 'Email Campaign'},
                                    {value: 'ad', label: 'Ad Copy'}
                                ]}
                                
                            />
                        </div>

                        <div>
                            <Select 
                                label='Tone of Voice'
                                options={[
                                    {value: 'professional', label: 'Professional'},
                                    {value: 'casual', label: 'Casual'},
                                    {value: 'humorous', label: 'Humorous'},
                                    {value: 'inspirational', label: 'Inspirational'},
                                    {value: 'friendly', label: 'Friendly'},
                                    {value: 'enthusiastic', label: 'Enthusiastic'},
                                    {value: 'formal', label: 'Formal'},
                                ]}
                                
                            />
                        </div>

                        <div>
                            <Input 
                                label='Keywords'
                                placeholder="Add keywords separated by commas"
                                className="focus:ring-2 w-full"
                            />
                        </div>

                        <div>
                            <Button 
                                bgColor="bg-sky-500"
                                textColor="text-white"
                                className={
                                  `w-full py-2.5 sm:py-3 md:py-3 px-4 sm:px-6 
                                   focus:outline-none focus:ring-2 focus:ring-offset-2
                                   focus:ring-offset-slate-800 focus:ring-sky-500
                                   transition-transform transform hover:scale-105
                                   flex items-center justify-center`
                                }
                            >
                                {/* svg + label aligned; svg has right margin on larger screens */}
                                <svg 
                                  xmlns="http://www.w3.org/2000/svg" 
                                  fill="none" 
                                  viewBox="0 0 24 24" 
                                  strokeWidth={1.5} 
                                  stroke="currentColor" 
                                  className="w-5 h-5 mr-2 flex-shrink-0"
                                > 
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                                </svg>

                                <span className="text-sm sm:text-base font-semibold">Generate Content</span>
                            </Button>
                        </div>
                    </div>
                    
                    {/* Right result panel */}
                    <div className="bg-slate-800 rounded-lg border border-slate-700 flex flex-col overflow-hidden">
                        <div
                            id="result-panel"
                            className="p-4 sm:p-5 lg:p-6 overflow-y-auto min-h-[240px] sm:min-h-[360px] lg:min-h-[520px] max-h-[520px]"
                            style={{ height: "520px" }}
                        >
                            {/* results go here; scrolls on small screens */}
                            Your generated content will appear here...
                        </div>
                        <div className="bg-slate-900/50 p-3 border-t border-slate-700 flex items-center justify-between
                            space-x-2 mx-1">
                            <div className="flex items-center space-x-2">
                                <Button
                                    bgColor="bg-traparent"
                                    textColor="text-white"
                                    className="p-2 hover:bg-slate-700 transition-color"
                                    title="Copy to Clipboard"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                                    </svg>
                                </Button>

                                <Button
                                    bgColor="bg-traparent"
                                    textColor="text-white"
                                    className="p-2 hover:bg-slate-700 transition-color"
                                    title="save"
                                    
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                    </svg>

                                </Button>

                            </div>
                            <Button
                                bgColor="bg-green-600"
                                textColor="text-white"
                                className="font-semibold py-2 px-4 transition-colors hover:bg-green-700"
                            >
                                <span>Publish</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
