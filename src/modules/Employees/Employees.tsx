import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import THead from "../../components/Table/THead";
import Table from "../../components/Table/Table";
import { getEmployees } from "./employeeApi";
import './employees.css'
import Pagination from "../../components/Pagination/Pagination";

const Employees = () => {
	const [data, setData] = useState<any[]>([]);
	useEffect(() => {
		getEmployees(setData)
	}, [])

	const handleNextClick = () => {
		console.log(data)
	}
	
    const columnOrder = [
        { column: "name", Label: "Name", isSortable: false },
        { column: "id", Label: "ID", isSortable: false },
        { column: "role", Label: "Role", isSortable: false },
    ];
    
	const row = [
        { id: "1234", name: "Test", role: "employee" },
        { id: "asas1", name: "Test", role: "employee" },
        { id: "11221", name: "Test", role: "employee" },
        { id: "123121", name: "Test", role: "employee" },
    ];
    function handleIconClick(column: string): void {
        console.log(column);
    }

    function handleEdit(column: string | number | boolean): void {
        console.log(column);
    }

    function handleDelete(column: string | number | undefined): void {
        console.log(column);
    }

    return (
        <div>
            <Navbar />
			<h3 className="text-start">Employee Details</h3>
            <div className="row justify-content-end btn-container">
                <button
                    type="button"
                    className="btn btn-primary create w-25 mb-4"
                >
                    Create
                </button>
            </div>
            <Table
                rows={row}
                page={0}
                perPage={0}
                columnOrder={columnOrder}
                onEditClick={handleEdit}
                id={["id"]}
                onDeleteClick={handleDelete}
                onVerifyClick={handleEdit}
                modalDeleteHeading="Delete"
                modalDeleteContent="Are you sure you want to delete this user ?"
            >
                <THead
                    columnOrder={columnOrder}
                    onIconClick={handleIconClick}
                    action={true}
                />
                <div className="page row justify-content-center align-center">
                    <Pagination
                        currentPage={1}
                        totalPages={1}
                        margin="10px 0"
                        handleNextClick={handleNextClick}
                        handlePreviousClick={handleNextClick}
                    />
                </div>
            </Table>
        </div>
    );
};

export default Employees;
