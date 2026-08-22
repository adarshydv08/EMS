import React from "react" 
 const Task =({data})=>{
 
     return <div className="flex justify-center gap-8">
            
            <div className="p-5  h-40 w-[25%] bg-red-600 mt-10 rounded-xl">
                <div className="p-3 text-amber-50 ">
                    <h1 className="text-4xl font-bold">{data.taskCountByType.newTask}</h1><br />
                    <h3 className="text-3xl font-bold">New Task</h3>
                </div>
            </div>

            <div className="p-5  h-40 w-[25%] bg-blue-600 mt-10 rounded-xl">
                 <div className="p-3 text-amber-50 ">
                    <h1 className="text-4xl font-bold">{data.taskCountByType.completed}</h1><br />
                    <h3 className="text-3xl font-bold">Completed</h3>
                </div>
            </div>

            <div className="p-5  h-40 w-[25%] bg-green-600 mt-10 rounded-xl">
                 <div className="p-3 text-amber-50 ">
                    <h1 className="text-4xl font-bold">{data.taskCountByType.active}</h1><br />
                    <h3 className="text-3xl font-bold">Accepted</h3>
                </div>
            </div>

            <div className="p-5  h-40 w-[25%] bg-yellow-500 mt-10 rounded-xl">
                 <div className="p-3 text-amber-50 ">
                    <h1 className="text-4xl font-bold">{data.taskCountByType.failed}</h1><br />
                    <h3 className="text-3xl font-bold">Failed</h3>
                </div>
            </div>
            

     </div>

      }
 
 export default Task