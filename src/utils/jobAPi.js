


export const getJob = async() => {
    
    const res = await fetch('http://localhost:5000/jobs/api/getjobs');
    if(res?.ok){
        return res.json();
    }
}

export const jobApiInfo = async(id)=>{
    console.log(id)
    const res = await fetch(`http://localhost:5000/jobs/api/getjobs/${id}`);
    if(res?.ok){
        return res.json();
    }else{
        throw new Error('Failed to fetch job details.');
    }

}