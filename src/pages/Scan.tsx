import { Card } from "antd";
import { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const Scan = () => {
  const [data, setData] = useState<any>("Not");
  const [order, setOrder] = useState<any>([]);
  console.log("data", data);
  console.log("order", order);

  const covertData = () => {
    const countOccurrences = order.reduce((acc: any, item: any) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});

    const result: any = Object.entries(countOccurrences).map(
      ([code, count]) => ({
        code,
        count,
      })
    );

    console.log("result", result);
    if (result.length > 0) {
      return result;
    }
    return [];
  };

  return (
    <>
      <Card>
        <BarcodeScannerComponent
          width={500}
          height={500}
          onUpdate={(err, result: any) => {
            if (result?.text) {
              setData(result?.text);
              setOrder((d: any) => [result?.text, ...d]);
              covertData();
            } else setData(`error : ${err}`);
          }}
        />
      </Card>
      {order.length > 0 ? (
        covertData().map((v: any) => {
          return (
            <p>
              {v.code}:{v.count}
            </p>
          );
        })
      ) : (
        <>No data</>
      )}
      <p>{data}</p>
    </>
  );
};

export default Scan;
