import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  return (
    <div className="h-[100vh] relative grid grid-rows-2 text-white">
      <button onClick={()=> router.push("/task_1")} className="bg-[#EFBC9B] font-[500] hover:opacity-90">Go to task 1</button>
      <button onClick={()=> router.push("/task_2")} className="bg-[#9CAFAA] font-[500] hover:opacity-90">Go to task 2</button>
    </div>
  );
}
