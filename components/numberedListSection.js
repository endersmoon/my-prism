import { Section, Row, Column,Text } from '@react-email/components';


const NumberedListSection = ({ items, heading, description }) => {
  return (
    <Section style={{ marginTop: 16, marginBottom: 16 }}>
      <Section>
        <Row>
          <Text
            style={{
              margin: '0px',
              fontSize: 24,
              lineHeight: '32px',
              fontWeight: 600,
              color: 'rgb(17,24,39)',
            }}>
            {heading}
          </Text>
          <Text
            style={{
              marginTop: 8,
              fontSize: 16,
              lineHeight: '24px',
              color: 'rgb(107,114,128)',
            }}>
            {description}
          </Text>
        </Row>
      </Section>
      
      {items.map((item, index) => (
        <>
          <Section key={index} style={{ marginTop: 24 }}>
            <Row>
              <Column style={{ verticalAlign: 'baseline' }}>
                <table style={{ textAlign: 'center' }}>
                  <td
                    align='center'
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      height: 40,
                      width: 40,
                      backgroundColor: 'rgb(199,210,254)',
                      borderRadius: 9999,
                      padding: '0px',
                    }}>
                    <Text
                      style={{
                       fontSize:18,
                        fontWeight: 600,
                        margin: '0px',
                        color: 'rgb(79,70,229)',
                      }}>
                      {index+1}
                    </Text>
                  </td>
                </table>
              </Column>
              <Column style={{ width: '90%' }}>
                <Text
                  style={{
                    margin: '0px',
                    fontSize: 20,
                    lineHeight: '28px',
                    fontWeight: 600,
                    color: 'rgb(17,24,39)',
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    margin: '0px',
                    marginTop: 4,
                    fontSize: 16,
                    lineHeight: '24px',
                    color: 'rgb(107,114,128)',
                  }}>
                  {item.description}
                </Text>
              </Column>
            </Row>
          </Section>
        </>
      ))}
    </Section>
  );
};


export default NumberedListSection;
