import { copyFileSync } from "fs";
import { Invoice } from "./functions"


const generateInvoices = (customers: Customer[]): Invoice[] =>{
  return[
 {
    customer_id: customers[0].id,
    amount: 1234,
    status: 'pending',
    date: '2024-01-23',
  },
  {
    customer_id: customers[1].id,
    amount: 12343,
    status: 'pending',
    date: '2024-01-24',
  },

  ];
}

const customers:Customer[] = [
  {id: '1', name: 'Customer 1'},
  {id: '2', name: 'Customer 3'}
]


const invoices = generateInvoices(customers);
