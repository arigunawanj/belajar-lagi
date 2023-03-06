import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Book(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Data Buku
                </h2>
            }
        >
            <Head title="Data Buku" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-9 text-gray-900 dark:text-gray-100">
                            <table className="table table-auto text-lg text-center">
                                <thead>
                                    <tr>
                                        <th className="border border-slate-600 ...">
                                            Judul
                                        </th>
                                        <th className="border border-slate-600 ...">
                                            Deskripsi
                                        </th>
                                        <th className="border border-slate-600 ...">
                                            Kategori
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.buku ? props.buku.map((data, i) => {
                                        return (
                                        <tr>
                                            <td className="border border-slate-700 ...">
                                                {data.judul}
                                            </td>
                                            <td className="border border-slate-700 ...">
                                                {data.deskripsi}
                                            </td>
                                            <td className="border border-slate-700 ...">
                                                {data.category_id}
                                            </td>
                                        </tr>
                                        )
                                    }): <h1>Data TIDAK ADA </h1>}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
