import React from "react";
import Image from "next/image";
import Topbar from "@/components/Topbar/Topbar";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

type DashboardProps = {};

const bar_options = {
    responsive: true,
    indexAxis: "y" as const,
    plugins: {
        legend: {
            position: "top" as const,
        },
    },
    scales: {
        x: {
            min: 0,
            suggestedMax: 100,
        },
    },
};

const bar_labels = [
    "Array",
    "Two-Pointer",
    "Dynamic Programming",
    "Linked List",
    "Stack",
    "Queue",
    "Heap",
    "Greedy",
    "Hash Table",
    "Binary Search",
    "Tree",
    "Graph",
];

const Dashboard: React.FC<DashboardProps> = () => {
    return (
        <>
            <Topbar clock={false} />
            <div className="bg-dark-layer-2 w-full py-4 px-4 text-white ">
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-dark-layer-1 rounded-md py-4 px-4 max-h-[320px] min-w-[475px]">
                        <div className="flex items-center space-x-4 flex-1 justify-start p-4 gap-2">
                            <Image
                                src="/avatar.png"
                                alt="avatar"
                                height={150}
                                width={150}
                                className="rounded-full mr-7"
                            />
                            <div className="flex flex-col gap-4">
                                <div className="text-xl font-semibold">
                                    User Details
                                </div>
                                <div>USERNAME</div>
                                <div>email@gmail.com</div>
                                <div>Date of Joining: 03-02-2023</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-dark-layer-1 rounded-md py-4 px-4 min-w-[475px]">
                        <div className="text-xl font-semibold">
                            Question Statistics
                        </div>
                        <div className="grid grid-cols-2 grid-rows-3 grid-flow-row pt-3 px-4 text-lg">
                            <div className="text-green-600 p-2">Easy</div>
                            <div>0</div>
                            <div className="text-orange-500 p-2">Medium</div>
                            <div>1</div>
                            <div className="text-red-700 p-2">Hard</div>
                            <div>1</div>
                        </div>
                    </div>
                    <div className="bg-dark-layer-1 rounded-md py-4 px-4 col-span-2 w-full">
                        <div className="text-xl font-semibold">
                            Category Statistics
                        </div>
                        <Bar
                            data={{
                                labels: bar_labels,
                                datasets: [
                                    {
                                        label: "User Score",
                                        data: [
                                            20, 50, 30, 40, 50, 60, 70, 80, 90,
                                            40, 30, 10,
                                        ],
                                        barThickness: 30,
                                        type: "bar",

                                        backgroundColor: "rgb(1, 102, 32)",
                                    },
                                ],
                            }}
                            options={bar_options}
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Dashboard;
