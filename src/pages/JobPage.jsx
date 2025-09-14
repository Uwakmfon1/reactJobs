import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  JobListing  from '../components/JobListing';
import Spinner from '../components/Spinner';

const JobPage = async () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        const fetchJob = async () => {
            try{
                const res = await fetch(`/api/jobs/${id}`);
                const data = await res.json();
                console.log(data);
                console.error();
                setJob(data);
            }catch(error){
                console.log('Error fetching data',error);
            }finally {
                setLoading(false);
            }
        };
        setLoading(false);
    })

    fetchJob();
   return loading ? <Spinner /> : <h1>{job.title}</h1>;
//    (
//            <>
//            <JobListing isHome={false} />
//            </>     
//   )
}

export default JobPage