export default function Avatar({size}){
    let width = 'w-12';
    let hight='h-12';
    if(size=='lg'){
        width='w-36'
        hight='h-36'
    }
    return (
        <div className={`${width}  rounded-full overflow-hidden  ${hight && hight}`}>
        <img src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
    )
}