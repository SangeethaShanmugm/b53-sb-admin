import React from 'react'

function Table() {

    const data = [
        {
            name: "Tiger Nixon",
            address: "Edinburgh",
            salary: "$320,800"
        },
        {
            name: "Garrett Winters",
            address: "Tokyo",
            salary: "$320,800"
        },
        {
            name: "Garrett Winters",
            address: "Tokyo",
            salary: "$320,800"
        },
        {
            name: "Garrett Winters",
            address: "Tokyo",
            salary: "$320,800"
        },
        {
            name: "Garrett Winters",
            address: "Tokyo",
            salary: "$320,800"
        },
        {
            name: "Garrett Winters",
            address: "Tokyo",
            salary: "$320,800"
        },
        {
            name: "Garrett Winters",
            address: "Tokyo",
            salary: "$320,800"
        }
    ]


    return (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                For more information about DataTables, please visit the <a target="_blank"
                    href="https://datatables.net">official DataTables documentation</a>.</p>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Salary</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => {
                                    return (
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{item.address}</td>
                                            <td>{item.salary}</td>
                                        </tr>
                                    )
                                })}



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Table