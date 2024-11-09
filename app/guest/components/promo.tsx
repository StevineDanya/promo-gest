import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function PageVisiteur() {
  return (
      <section className='bg-black '>
          <div className='flex w-full gap-4 bg-black  justify-center items-center h-screen'> 
              <Table className="bg-white overflow-auto   ml-8">
                  <TableCaption>Liste des apprenants et leurs performances.</TableCaption>
                  <TableHeader>
                      <TableRow>
                          <TableHead className="w-1/4 text-center text-blue-600 text-lg">Liste des apprenants</TableHead>
                          <TableHead className="w-1/4 text-center text-blue-600 text-lg">Évaluation</TableHead>
                          <TableHead className="w-1/4 text-center text-blue-600 text-lg">Projet</TableHead>
                          <TableHead className="w-1/4 text-center text-blue-600 text-lg">Pourcentage</TableHead>
                      </TableRow>
                  </TableHeader>
                  <TableBody>
                      <TableRow>
                          <TableCell className="text-center">David</TableCell>
                          <TableCell className="text-center">2018</TableCell>
                          <TableCell className="text-center">15</TableCell>
                          <TableCell className="text-center">85%</TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell className="text-center">Marie</TableCell>
                          <TableCell className="text-center">2022</TableCell>
                          <TableCell className="text-center">30</TableCell>
                          <TableCell className="text-center">90%</TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell className="text-center">Carlos</TableCell>
                          <TableCell className="text-center">2023</TableCell>
                          <TableCell className="text-center">25</TableCell>
                          <TableCell className="text-center">85%</TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell className="text-center">Jule</TableCell>
                          <TableCell className="text-center">2022</TableCell>
                          <TableCell className="text-center">30</TableCell>
                          <TableCell className="text-center">90%</TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell className="text-center">Mathieu</TableCell>
                          <TableCell className="text-center">2022</TableCell>
                          <TableCell className="text-center">30</TableCell>
                          <TableCell className="text-center">90%</TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell className="text-center">Daniel</TableCell>
                          <TableCell className="text-center">2023</TableCell>
                          <TableCell className="text-center">25</TableCell>
                          <TableCell className="text-center">85%</TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell className="text-center">Evrard</TableCell>
                          <TableCell className="text-center">2022</TableCell>
                          <TableCell className="text-center">30</TableCell>
                          <TableCell className="text-center">90%</TableCell>
                      </TableRow>
                  </TableBody>
              </Table>
              <div className="bg-slate-500 w-1/5 p-4 text-white mr-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                  Sint, quisquam quibusdam. Iure, nihil. Molestiae vel dicta at<br />
                  facilis nisi omnis libero tempora natus, quis,<br />
                  veritatis repellendus, ipsa esse nihil obcaecati?
              </div>
          </div>
      
    <div className="bg-white flex justify-evenly items-start h-52">
    <div className="bg-lime-300 p-6 rounded-lg shadow-md flex flex-col items-center justify-center w-full max-w-xs mt-6">
      <h1 className="text-blue-600 text-lg font-semibold">Front-end</h1>
      <p className="text-2xl font-bold mt-2">250</p>
    </div>
  
    <div className="bg-lime-300 p-6 rounded-lg shadow-md flex flex-col items-center justify-center w-full max-w-xs mt-6">
      <h1 className="text-blue-600 text-lg font-semibold">Back-end</h1>
      <p className="text-2xl font-bold mt-2">7</p>
    </div>
  
    <div className="bg-lime-300 p-6 rounded-lg shadow-md flex flex-col items-center justify-center w-full max-w-xs mt-6">
      <h1 className="text-blue-600 text-lg font-semibold">Total étudiant</h1>
      <p className="text-2xl font-bold mt-2">98%</p>
    </div>
    </div>
          
      </section>
  );
}
