import Link from 'next/link';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { deleteInvoice } from '@/app/lib/actions';

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
      aria-label="Edit invoice"
      title="Edit"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  return (
    <form action={deleteInvoiceWithId}>
      <button
        type="submit"
        className="rounded-md border p-2 hover:bg-gray-100"
        aria-label="Delete invoice"
        title="Delete"
      >
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
