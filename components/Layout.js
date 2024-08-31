import NavigationCard from "./NavigationCard";


export default function Layout({children, hideNavigation}) {
  let rightColumnClasses = '';

  if(hideNavigation){
    rightColumnClasses +="w-full"
  }
  else{
    rightColumnClasses +=" mx-4 md:mx-0 md:w-9/12"
  }
  return (
    <div className="md:flex max-w-4xl mx-auto mt-4 gap-6 pt-10 mb-24 md:mb-0">
      {!hideNavigation &&(
      <div className="fixed md:static bottom-0  w-full  md:w-3/12 -mb-5 ">
        <NavigationCard />
      </div>
      )}
      <div className={rightColumnClasses} >
       {children}
      </div>
    </div>
  )
}
