import { Card, Col, Row } from "antd";

const Home = () => {
  return (
    <>
      <Row gutter={[10, 10]} justify={"space-between"}>
        <Col style={{ width: "66%", height: "500px" }}>
          <Card style={{ width: "100%", height: "500px" }}>asdasds</Card>
        </Col>

        <Col style={{ width: "33%", height: "500px" }}>
          <Card style={{ width: "100%", height: "500px" }}>asdasds</Card>
        </Col>
      </Row>
      <Row
        gutter={[10, 10]}
        justify={"space-between"}
        style={{ marginTop: "20px" }}
      >
        <Card style={{ width: "100%", height: "400px" }}>asdasds</Card>

        {/* <Col style={{ width: "32%", height: "400px" }}>
          <Card style={{ width: "100%", height: "400px" }}>asdasds</Card>
        </Col>
        <Col style={{ width: "33%", height: "400px" }}>
          <Card style={{ width: "100%", height: "400px" }}>asdasds</Card>
        </Col>
        <Col style={{ width: "33%", height: "400px" }}>
          <Card style={{ width: "100%", height: "400px" }}>asdasds</Card>
        </Col> */}
      </Row>
    </>
  );
};

export default Home;
