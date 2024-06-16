import { Row, Col, Card } from 'react-bootstrap'

const Tombol = ({ var_props }) => {

    const handleInputChange = (e) => {
        var_props(e.target.name);
    };
    
    return (
        <Card>
            <Row className="mb-2">
                <Col>
                    <button className="btn btn-success" name="(" onClick={handleInputChange}>(</button>
                </Col>
                <Col>
                    <button className="btn btn-success" name="CE" onClick={handleInputChange}>CE</button>
                </Col>
                <Col>
                    <button className="btn btn-success" name=")" onClick={handleInputChange}>)</button>
                </Col>
                <Col>
                    <button className="btn btn-success" name="C" onClick={handleInputChange}>C</button><br/>
                </Col>
            </Row>
            <Row className="mb-2">
                <Col>
                    <button className="btn btn-success" name="1" onClick={handleInputChange}>1</button> 
                </Col>
                <Col>
                    <button className="btn btn-success" name="2" onClick={handleInputChange}>2</button>
                </Col>
                <Col>
                    <button className="btn btn-success" name="3" onClick={handleInputChange}>3</button>
                </Col>
                <Col>
                    <button className="btn btn-success" name="+" onClick={handleInputChange}>+</button><br/>
                </Col>
            </Row>

            <Row className="mb-2">
                <Col>
                    <button className="btn btn-success" name="4" onClick={handleInputChange}>4</button>
                </Col>
                <Col>
                    <button className="btn btn-success" name="5" onClick={handleInputChange}>5</button>
                </Col>
                <Col>
                    <button className="btn btn-success" name="6" onClick={handleInputChange}>6</button>
                </Col>
                <Col>
                    <button className="btn btn-success" name="-" onClick={handleInputChange}>-</button><br/>
                </Col>
            </Row>

            <Row className="mb-2">
                <Col>
                    <button className="btn btn-success" name="7" onClick={handleInputChange}>7</button>
                </Col>
                <Col>
                    <button className="btn btn-success" name="8" onClick={handleInputChange}>8</button>
                </Col>
                <Col>
                    <button className="btn btn-success" name="9" onClick={handleInputChange}>9</button>
                </Col>
                <Col>
                    <button className="btn btn-success" name="*" onClick={handleInputChange}>x</button><br/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button className="btn btn-success" name="." onClick={handleInputChange}>.</button>
                </Col>
                <Col>
                    <button className="btn btn-success" name="0" onClick={handleInputChange}>0</button>
                </Col>
                <Col>
                    <button className="btn btn-success" name="=" onClick={handleInputChange}>=</button>
                </Col>
                <Col>
                    <button className="btn btn-success" name="/" onClick={handleInputChange}>÷</button><br/>
                </Col>
            </Row>
        </Card>
    );
}

export default Tombol;