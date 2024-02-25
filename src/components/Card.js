import React from 'react'

function Card({ progress }) {

    const data = [
        {
            color: "primary",
            title: "EARNINGS (MONTHLY)",
            price: "$40,000",
            icon: "fas fa-calendar"
        },
        {
            color: "success",
            title: "Earnings (Annual)",
            price: "$215,000",
            icon: "fas fa-dollar-sign"
        },
        {
            color: "info",
            title: "Tasks",
            price: "50%",
            icon: "fas fa-clipboard-list"
        },
        {
            color: "warning",
            title: "Pending Request",
            price: "18",
            icon: "fas fa-comments"
        }
    ]

    console.log(data)
    return (
        <div>
            <div className="row">
                {data.map((item) => {
                    return (
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className={`card border-left-${item.color} shadow h-100 py-2`}>
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className={`text-xs font-weight-bold text-${item.color} text-uppercase mb-1`}>
                                                {item.title}</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{item.price}</div>
                                        </div>
                                        {item.title === "Tasks" && progress !== undefined && (
                                            <div className="col">
                                                <div className="progress progress-sm mr-2">
                                                    <div className="progress-bar bg-info" role="progressbar"
                                                        style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin="0"
                                                        aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        )}


                                        <div className="col-auto">
                                            <i className={`${item.icon} fa-2x text-gray-300`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}


            </div>

        </div>
    )
}

export default Card