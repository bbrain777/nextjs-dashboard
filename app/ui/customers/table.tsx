import Image from 'next/image';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { formatCurrency } from '@/app/lib/utils';

export default async function CustomersTable({
  query,
}: {
  query: string;
}) {
  // Make sure this always becomes an array
  const customers = (await fetchFilteredCustomers(query)) ?? [];

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="min-w-full text-gray-900">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Total Invoices
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Total Pending
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Total Paid
                </th>
              </tr>
            </thead>

            <tbody className="bg-white">
              {customers.length === 0 ? (
                <tr>
                  <td className="py-6 pl-6 pr-3" colSpan={5}>
                    No customers found.
                  </td>
                </tr>
              ) : (
                customers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="w-full border-b border-gray-100 py-3 text-sm last-of-type:border-none
                      [&:first-child>td:first-child]:rounded-tl-lg
                      [&:first-child>td:last-child]:rounded-tr-lg
                      [&:last-child>td:first-child]:rounded-bl-lg
                      [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex items-center gap-3">
                        <Image
                          src={customer.image_url}
                          className="rounded-full"
                          width={28}
                          height={28}
                          alt={`${customer.name}'s profile picture`}
                        />
                        <p>{customer.name}</p>
                      </div>
                    </td>

                    <td className="whitespace-nowrap px-3 py-3">
                      {customer.email}
                    </td>

                    <td className="whitespace-nowrap px-3 py-3">
                      {customer.total_invoices}
                    </td>

                    <td className="whitespace-nowrap px-3 py-3">
                      {formatCurrency(customer.total_pending)}
                    </td>

                    <td className="whitespace-nowrap px-3 py-3">
                      {formatCurrency(customer.total_paid)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
