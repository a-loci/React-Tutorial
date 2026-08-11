

type JobsList = {
    Id: number;
    Occupation: string;
    Pay?:number
}


const activeJobs : JobsList[] = [
    {Id: 1, Occupation: 'Janitor'},
    {Id: 2 , Occupation: 'Doctor'},
    {Id: 3, Occupation: 'Florist'},
    {Id:4, Occupation:'Helldiver', Pay: 35.00}
 ] as const;


function DisplayJobsList() {
    return (
        <div className="container mt-4">
            <table className="table table-bordered text-center">             
                <thead className="table-dark">
                    <tr>
                        <th>Occupation</th>
                        <th>Pay</th>
                    </tr>
                </thead>              
                <tbody>                  
                    {activeJobs.map((job) => (
                        <tr key={job.Id}>
                            <td>{job.Occupation}</td>
                            <td>${job.Pay?.toFixed(2) ?? '0.00'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}





 export default DisplayJobsList;