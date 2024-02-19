import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  const date_of_births:Date = new Date('11/30/2002');
  date_of_births.setHours(0, 0, 0, 0);
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      gender: "Female",
      date_of_birth: date_of_births,
    },
     {
      id: "12313",
      amount: 134,
      status: "processing",
      email: "example@example.com",
      gender: "Male",
      date_of_birth: date_of_births,
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

