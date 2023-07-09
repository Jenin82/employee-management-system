import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import THead from "../../components/Table/THead";
import Table from "../../components/Table/Table";
import { getEmployees } from "./employeeApi";

const Employees = () => {
	const [data, setData] = useState<any[]>([]);
	useEffect(() => {
		getEmployees(setData)
	}, [])
	
    const columnOrder = [
        { column: "name", Label: "Name", isSortable: true },
        { column: "user_ig_link_ig", Label: "Members", isSortable: false },
        { column: "updated_by", Label: "Updated By", isSortable: false },
        { column: "created_by", Label: "Created By", isSortable: false },
        { column: "created_at", Label: "Created On", isSortable: false },
    ];
    function handleIconClick(column: string): void {
        throw new Error("Function not implemented.");
    }

    return (
        <div>
            <Navbar />
            <Table rows={data} page={0} perPage={0} columnOrder={columnOrder}>
                <THead
                    columnOrder={columnOrder}
                    onIconClick={handleIconClick}
                    action={true}
                />
                <></>
            </Table>
        </div>
    );
};

export default Employees;
