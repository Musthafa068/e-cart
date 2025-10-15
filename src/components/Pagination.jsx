import React from 'react'

function Pagination({totalProducts,cardPerPage,setCurrentPage,currentPage}) {

    let pages=[]

    for(let i=1;i<=Math.ceil(totalProducts/cardPerPage);i++){
        pages.push(i)
    }


    const handlePrevious=()=>{
        if(currentPage>1){
            setCurrentPage(currentPage-1)
        }
    }
    const handleNext=()=>{
        if(currentPage<pages.length){
            setCurrentPage(currentPage+1)
    }
    }

  return (
    <>
        <div className="d-flex align-items-center justify-content-center">
            <button onClick={handlePrevious} disabled={currentPage==1} className='btn me-2'><i class="fa-solid fa-arrow-left"></i></button>

            {
                pages?.map(page=>(
                    <button onClick={()=>setCurrentPage(page)} className={`btn me-2 ${currentPage==page?'active':''}`}>{page}</button>
                ))
            }
            <button onClick={handleNext} disabled={currentPage==5}  className='btn me-2'><i class="fa-solid fa-arrow-right"></i></button>
        </div>
    </>
  )
}

export default Pagination