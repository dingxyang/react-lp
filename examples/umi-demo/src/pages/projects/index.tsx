import React from 'react';
import { Col, Row } from 'antd';
import styles from './index.css';

const App: React.FC = () => (
  <div className={styles.marginAuto}>
    <h1>Projects</h1>
    <Row gutter={16}>
      <Col span={8}>Card content</Col>
      <Col span={8}>Card content</Col>
      <Col span={8}>Card content</Col>
    </Row>
  </div>
);

export default App;
