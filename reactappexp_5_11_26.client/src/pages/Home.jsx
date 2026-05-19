/*import React from 'react';*/
/*import { Link } from 'react-router-dom';*/
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
function Home() {
    const data = [
        { name: 'HR', value: 10 },
        { name: 'IT', value: 25 },
        { name: 'Sales', value: 15 },
        { name: 'Support', value: 20 }
    ];

    const dataMg = [
        { name: 'HR', value: 15 },
        { name: 'IT', value: 35 },
        { name: 'Sales', value: 30 },
        { name: 'Support', value: 20 }
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    return (
        <table className="table table-borderless" width="100%">
            <tr>
                <td>
                    <div style={{ width: '100%', height: 400 }}>

                        <ResponsiveContainer>

                            <PieChart>

                                <Pie
                                    data={data}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={120}
                                    label
                                >

                                    {data.map((entry, index) => (
                                        <Cell
                                            key={index}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}

                                </Pie>

                                <Tooltip />
                                <Legend />

                            </PieChart>







                        </ResponsiveContainer>

                    </div>
                </td>
                <td>
                    <div style={{ width: '100%', height: 400 }}>

                        <ResponsiveContainer>

                            <PieChart>

                                <Pie
                                    data={dataMg}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={120}
                                    label
                                >

                                    {dataMg.map((entry, index) => (
                                        <Cell
                                            key={index}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}

                                </Pie>

                                <Tooltip />
                                <Legend />

                            </PieChart>







                        </ResponsiveContainer>

                    </div>
                </td>
            </tr>
                </table>
     
  );
}

export default Home;