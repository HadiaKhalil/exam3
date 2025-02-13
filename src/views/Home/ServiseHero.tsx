


 export default function LatestNews() {
     const news = [
       {
         date: "24",
         month: "Feb",
         title: "Lyndon Group is a professional",
         author: "admin",
         category: "Business",
         description:
           "Lyndon Group is a professional services firm specializing in accounting, finance, IT, governance.",
       },
       {
         date: "04",
         month: "Feb",
         title: "Lyndon Group is a professional",
         author: "admin",
         category: "Business",
         description:
           "Lyndon Group is a professional services firm specializing in accounting, finance, IT, governance.",
       },
     ];
  
     return (
       <div className="w-full max-w-6xl mx-auto text-center py-12">
         <h2 className="text-3xl font-semibold">
           Latest <span className="text-gray-500">News</span>
         </h2>
         <p className="text-sm text-gray-400">Simply dummy text.</p>
  
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
           {news.map((item, index) => (
             <div
               key={index}
               className="flex items-start bg-white shadow-md p-6 rounded-lg"
             >
               {/* Date Box */}
               <div className="bg-yellow-500 text-white text-center p-2 w-12 h-14 flex flex-col items-center justify-center rounded">
                 <span className="text-lg font-bold">{item.date}</span>
                 <span className="text-sm">{item.month}</span>
               </div>
  
               {/* News Content */}
               <div className="ml-4 text-left">
                 <h3 className="text-lg font-bold">{item.title}</h3>
                 <p className="text-sm text-gray-500">
                   by {item.author} | In news:{" "}
                   <span className="text-yellow-500">{item.category}</span>
                 </p>
                 <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                 <a href="#" className="text-yellow-500 text-sm font-semibold mt-2 block">
                   Read More →
                 </a>
               </div>
             </div>
           ))}
         </div>
       </div>
     );
   }
