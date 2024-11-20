import { Section, Row, Text } from '@react-email/components';

let TypeSection = ({overLine,heading,description}) => {
  return (
    <Section style={{ marginTop: '16px', marginBottom: '16px' }}>
      <Section style={{ marginTop: '42px' }}>
        <Row>
          <Text
            style={{
              margin: 0,
              fontSize: '18px',
              fontWeight: 600,
              lineHeight: '24px',
              color: '#6366F1',
            }}>
            {overLine}
          </Text>
          <Text
            style={{
              margin: 0,
              marginTop: '8px',
              fontSize: '32px',
              fontWeight: 600,
              lineHeight: '32px',
              color: '#111827',
            }}>
            {heading}
          </Text>
          <Text
            style={{
              marginTop: '18px',
              fontSize: '16px',
              lineHeight: '24px',
              color: '#6B7280',
            }}>
           {description}
          </Text>
        </Row>
      </Section>
      
    </Section>
  );
};

export default TypeSection;
