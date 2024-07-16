import NavigationCard from "./NavigationCard";


export default function Layout({children}) {
  return (
    <div className="flex max-w-4xl mx-auto  gap-6 pt-10">
      <div className="w-4/12">
        <NavigationCard />
      </div>
      <div className="w-9/12" >
       {children}
      </div>
    </div>
  )
}
