import { useEffect, useState } from "preact/hooks";
import type { Station, Resource } from "../types";
import { calcPrice } from "../utils/calcPrice";

export function StationView() {
    const [station, setStation] = useState<Station | null>(null);

    useEffect(() => {
        fetch("./dummydata/stations.json")
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setStation(data[0]);
            },
            );
    }, []);

    if (!station) return <div>Lade Station …</div>;

    return (
        <div>
            <h2>{station.name}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Ressource</th>
                        <th>Lager</th>
                        <th>Nachfrage</th>
                        <th>Preis</th>
                    </tr>
                </thead>
                <tbody>
                    {(Object.keys(station.stock) as Resource[]).map((res) => {
                        const stock = station.stock[res] ?? 0;
                        const demand = station.demand[res] ?? 0;
                        const base = station.basePrices[res] ?? 100;
                        const price = calcPrice(base, stock, demand);

                        return (
                            <tr key={res}>
                                <td>{res}</td>
                                <td>{stock}</td>
                                <td>{demand}</td>
                                <td>
                                    {price}
                                    {" "}
                                    ₵
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
