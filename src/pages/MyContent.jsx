import { Button } from "../components";
import { useNavigate } from "react-router-dom";
import { useSession } from "../context";
import { getElapsedTime} from "../utils"

function MyContent(){

    const navigate = useNavigate();

    const {sessions, deleteSession} = useSession();

    const handleEdit = (session) => {
      navigate("/generate-content", {state: {session}});
    }


    return(
        <div className="min-h-screen flex flex-col justify-center bg-slate-900 text-white px-4 py-8 sm:px-6 lg:px-10">
            <h1 className="text-3xl font-bold mb-6 text-white">My Content</h1>
            <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-900/50">
                        <tr>
                            <th className="p-4 font-semibold">Title</th>
                            <th className="p-4 font-semibold">Type</th>
                            <th className="p-4 font-semibold">Last Modified</th>
                            <th className="p-4 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700">
                        {sessions?.map((session) => {
                            const time = getElapsedTime(session.time);
                            console.log(time);
                            
                            return(
                                <tr className="hover:bg-slate-700/50">
                                <td className="p-4">{session.title}</td>
                                <td className="p-4"><span className="bg-sky-500/20 text-sky-500 text-xs font-medium px-2 py-1 rounded-full">{session.type}</span></td>
                                <td className="p-4">{time}</td>
                                <td className="p-4 flex space-x-2">
                                    <Button
                                        className="p-2 rounded-md bg-transparent hover:bg-slate-600"
                                        onClick={() => handleEdit(session)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                        </svg>

                                    </Button>
                                    <Button
                                        className="p-2 rounded-md hover:bg-slate-600 text-red-400 bg-transparent"
                                        onClick={() => deleteSession(session.id)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>

                                    </Button>
                                </td>
                            </tr>
                            )  
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default MyContent;