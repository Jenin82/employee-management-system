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
		console.log("next")
	}
	
    const columnOrder = [
        { column: "name", Label: "Name", isSortable: false },
        { column: "id", Label: "ID", isSortable: false },
        { column: "role", Label: "Role", isSortable: false },
        // { column: "created_by", Label: "Created By", isSortable: false },
        // { column: "created_at", Label: "Created On", isSortable: false },
    ];
    
	const row = [
        { name: "Test", id: "1234", role: "employee" },
        { column: "user_ig_link_ig", Label: "Members", isSortable: false },
        { column: "updated_by", Label: "Updated By", isSortable: false },
        { column: "created_by", Label: "Created By", isSortable: false },
        { column: "created_at", Label: "Created On", isSortable: false },
    ];
    function handleIconClick(column: string): void {
        throw new Error("Function not implemented.");
    }

	function handleEdit(column: string | number | boolean): void {
		throw new Error("Function not implemented.");
	}

	function handleDelete(column: string | number | undefined): void {
		throw new Error("Function not implemented.");
	}

    return (
        <div>
            <Navbar />
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
                onDeleteClick={handleDelete}
                modalDeleteHeading="Delete"
                modalDeleteContent="Are you sure you want to delete this user ?"
            >
                <THead
                    columnOrder={columnOrder}
                    onIconClick={handleIconClick}
                    action={true}
                />
                <Pagination
                    currentPage={0}
                    totalPages={3}
                    margin="10px 0"
                    handleNextClick={handleNextClick}
                    handlePreviousClick={handleNextClick}
                />
            </Table>
        </div>
    );
};

export default Employees;
