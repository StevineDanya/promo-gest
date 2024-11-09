import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export default function pageVisiteure() {
  return (
    <section className='bg-black'>
      <div className=" h-44 bg-white flex justify-center items-center">
        <h1 className="text-4xl justify-center">
          Bienvenue sur le tableau de bord de gestion des étudiants
        </h1>
      </div>
    <div className="bg-white flex justify-evenly items-start h-52">
    <div className="bg-lime-300 p-6 rounded-lg shadow-md flex flex-col items-center justify-center w-full max-w-xs mt-6">
      <h1 className="text-blue-600 text-lg font-semibold">Total Apprenant</h1>
      <p className="text-2xl font-bold mt-2">250</p>
    </div>
  
    <div className="bg-lime-300 p-6 rounded-lg shadow-md flex flex-col items-center justify-center w-full max-w-xs mt-6">
      <h1 className="text-blue-600 text-lg font-semibold">Promotion Active</h1>
      <p className="text-2xl font-bold mt-2">7</p>
    </div>
  
    <div className="bg-lime-300 p-6 rounded-lg shadow-md flex flex-col items-center justify-center w-full max-w-xs mt-6">
      <h1 className="text-blue-600 text-lg font-semibold">Taux de Reussite</h1>
      <p className="text-2xl font-bold mt-2">98%</p>
    </div>
    </div>
    <main>
    <Table className="bg-white overflow-auto w-full ">
  <TableCaption>Liste des apprenants et leurs performances.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-1/4 text-center text-blue-600 text-lg">Promotions</TableHead>
      <TableHead className="w-1/4 text-center text-blue-600 text-lg">Année</TableHead>
      <TableHead className="w-1/4 text-center text-blue-600 text-lg">Nombre d'apprenants</TableHead>
      <TableHead className="w-1/4 text-center text-blue-600 text-lg">Taux de réussite</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="text-center">Promotion1</TableCell>
      <TableCell className="text-center">2018</TableCell>
      <TableCell className="text-center">25</TableCell>
      <TableCell className="text-center">85%</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="text-center">Promotion2</TableCell>
      <TableCell className="text-center">2022</TableCell>
      <TableCell className="text-center">30</TableCell>
      <TableCell className="text-center">90%</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="text-center">Promotion3</TableCell>
      <TableCell className="text-center">2023</TableCell>
      <TableCell className="text-center">25</TableCell>
      <TableCell className="text-center">85%</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="text-center">Promotion4</TableCell>
      <TableCell className="text-center">2022</TableCell>
      <TableCell className="text-center">30</TableCell>
      <TableCell className="text-center">90%</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="text-center">Promotion5</TableCell>
      <TableCell className="text-center">2022</TableCell>
      <TableCell className="text-center">30</TableCell>
      <TableCell className="text-center">90%</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="text-center">Promotion6</TableCell>
      <TableCell className="text-center">2023</TableCell>
      <TableCell className="text-center">25</TableCell>
      <TableCell className="text-center">85%</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="text-center">Promotion7</TableCell>
      <TableCell className="text-center">2022</TableCell>
      <TableCell className="text-center">30</TableCell>
      <TableCell className="text-center">90%</TableCell>
    </TableRow>
   
  </TableBody>
</Table>

    </main>
  </section>
  
  );
}