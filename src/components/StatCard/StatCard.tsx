import clsx from "clsx";
import { Col, Container, Row } from 'react-bootstrap';
import ContentCard from "../ContentCard";
import classes from './StatCard.module.scss';

type StatCardProps = {
    title?: string;
    amount?: string;
    image?: React.ReactNode;
};

function StatCard({title, amount, image}: StatCardProps) {
    <ContentCard>
        <Container fluid>
            <Row>
                <Col xs={6}>
                    <h1>{title}</h1>
                    <h2>{amount}</h2>
                </Col>
                <Col xs={3}>
                    <div>
                        {image}
                    </div>
                </Col>
            </Row>
        </Container>
    </ContentCard>
};

export default StatCard;
