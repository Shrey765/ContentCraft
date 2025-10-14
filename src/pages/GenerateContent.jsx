import { Input, Select, TextArea, Button } from "../components"


export default function GenerateContent(){
    return(
        <div className="bg-slate-900 h-full text-white flex flex-col items-center">
            <h1 className="text-3xl font-bold mt-2 mb-6 text-white">
                Generate New Content
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 space-y-6">
                    <div>
                        <TextArea 
                            label="What do You want to create?"
                            placeholder="e.g., A blog post about the future of AI..."
                            rows="5"
                            className="focus:ring-2"
                        />
                    </div>

                    <div>
                        <Select 
                            label="Content Type"
                            options={
                                [
                                    {value: 'blog', label: 'Blog Post'},
                                    {value: 'twitter', label: 'Social Media Post (Twitter)'},
                                    {value: 'instagram', label: 'Social Media Post (Instagram)'},
                                    {value: 'linkedin', label: 'Social Media Post (LinkedIn)'},
                                    {value: 'email', label: 'Email Campaign'},
                                    {value: 'ad', label: 'Ad Copy'}
                                ]
                            }
                        />
                    </div>

                    <div>
                        <Select 
                            label='Tone of Voice'
                            options={
                                [
                                    {value: 'professional', label: 'Professional'},
                                    {value: 'casual', label: 'Casual'},
                                    {value: 'humorous', label: 'Humorous'},
                                    {value: 'inspirational', label: 'Inspirational'},
                                    {value: 'friendly', label: 'Friendly'},
                                    {value: 'enthusiastic', label: 'Enthusiastic'},
                                    {value: 'formal', label: 'Formal'},
                                ]
                            }
                        />
                    </div>

                    <div>
                            <Input 
                                label='Keywords'
                                placeholder="Add keywords separated by commas"
                                className="focus:ring-2"
                            />
                    </div>

                    <div>
                            <Button 
                                bgColor="bg-sky-500"
                                textColor="text-white"
                                className="w-full py-3 px-6 focus:outline-none
                                focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800
                                focus:ring-sky-500 transition-transform transform hover:scale-105
                                "
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                                </svg>
                                Generate Content
                            </Button>
                    </div>
                </div>

            </div>
        </div>
    )
};

