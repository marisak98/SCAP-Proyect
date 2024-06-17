"use client";

import React, { useState, useEffect } from "react";
import { Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Employee, columns } from "./columns";
import { DataTable } from "./data-table";
import SocioForm from "./form_component/socio";

async function getEmployees(): Promise<Employee[]> {
  return [
    {
      id: "1",
      name: "Juan",
      area: "Producción",
      email: "Juan@javierdiez.com",
      phone: "123456789",
      status: "available",
      proyects: ["Proyecto 1", "Proyecto 2"],
    },
    {
      id: "2",
      name: "María",
      area: "Producción",
      email: "maria@javierdiez.com",
      phone: "987654321",
      status: "unavailable",
      proyects: ["Proyecto 3", "Proyecto 4"],
    },
    {
      id: "3",
      name: "Pedro",
      area: "Producción",
      email: "pedro@javierdiez.com",
      phone: "123456789",
      status: "available",
      proyects: ["Proyecto 5", "Proyecto 6"],
    },
    {
      id: "4",
      name: "Ana",
      area: "Metalmeánica",
      email: "ana@javierdiez.com",
      phone: "987654321",
      status: "unavailable",
      proyects: ["Proyecto 7", "Proyecto 8"],
    },
    {
      id: "5",
      name: "Luis",
      area: "Carpenetería",
      email: "luis@javierdiez.com",
      phone: "123456789",
      status: "available",
      proyects: ["Proyecto 9", "Proyecto 10"],
    },
    {
      id: "6",
      name: "Sara",
      area: "Acrilicos y Acabados",
      email: "sara@javierdiez.com",
      phone: "987654321",
      status: "unavailable",
      proyects: ["Proyecto 11", "Proyecto 12"],
    },
  ];
}

function Registos() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getEmployees();
      setEmployees(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="p-4 sm:px-4 sm:py-4">
      <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
        <div className="hidden flex-col md:flex">
          <section className=" flex items-center justify-between mb-4  md:mb-8 lg:mb-12 p-4">
            <div className="space-y-1">
              <h2 className="text-xl  sm:text-2xl text-foreground font-semibold tracking-tight">
                {" "}
                Registro de usuarios
              </h2>
              <p className="text-xs ms:text-sm text-muted-foreground">
                Tabla de todos los usuarios registrados.
              </p>
            </div>
          </section>
          {/*section end*/}
          <section className="flex items-center gap-2 mb-2 p-4">
            <p className="text:sm text-gray-400 flex items-center gap-x-1 ">
              <Users className="w-4 h-4" />
              <span>10 usuarios</span>
            </p>
          </section>
          <div className="border-b"></div>
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div dir="ltr" data-orientation="horizontal" className="space-y-4">
              <Tabs defaultValue="users" className="min-w-[400px]">
                <TabsList className=" flex-col sm:flex-row gap-0 sm:gap-0.5">
                  <TabsTrigger value="users">Usuarios</TabsTrigger>
                  <TabsTrigger value="admin">Administradores</TabsTrigger>
                </TabsList>
                <TabsContent value="users">
                  Make changes to your user here.
                  <div className="flex">
                    {/* Primer div que ocupa la mayor parte del ancho */}
                    <div className="flex-1 p-4 mt-2">
                      <DataTable columns={columns} data={employees} />
                    </div>
                    {/* Segundo div que ocupa el resto del espacio */}
                    <div className="p-4 mt-2">
                      <SocioForm />
                    </div>
                  </div>{" "}
                </TabsContent>
                <TabsContent value="admin">Change your admin here.</TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Registos;
