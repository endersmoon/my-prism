import { Section, Text, Heading, Row, Column, Button } from '@react-email/components';

const SurveySection = ({
  highlightText = "Your opinion matters",
  headingText = "We want to hear you",
  questionText = "How would you rate your experience using our product in a scale from 1 to 5?",
  ratingLink = "https://example.com/rate"
}) => {
  return (
    <Section
      style={{
        textAlign: "center",
        paddingTop: 16,
        paddingBottom: 16,
      }}
    >
      <Text
        style={{
          marginTop: 8,
          marginBottom: 8,
          fontSize: 18,
          lineHeight: "28px",
          fontWeight: 600,
          color: "rgb(79,70,229)",
        }}
      >
        {highlightText}
      </Text>
      <Heading
        as="h1"
        style={{
          margin: "0px",
          marginTop: 8,
          fontSize: 30,
          lineHeight: "36px",
          fontWeight: 600,
          color: "rgb(17,24,39)",
        }}
      >
        {headingText}
      </Heading>
      <Text
        style={{
          fontSize: 16,
          lineHeight: "24px",
          color: "rgb(55,65,81)",
        }}
      >
        {questionText}
      </Text>
      <Row>
        <Column align="center">
          <table>
            <tr>
              {[1, 2, 3, 4, 5].map((number) => (
                <td align="center" key={number} style={{ padding: 4 }}>
                  <Button
                    href={`${ratingLink}/${number}`}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 48,
                      width: 48,
                      borderRadius: 8,
                      borderWidth: 1,
                      borderStyle: "solid",
                      borderColor: "rgb(79,70,229)",
                      padding: 4,
                      fontWeight: 600,
                      color: "rgb(79,70,229)",
                    }}
                  >
                    {number}
                  </Button>
                </td>
              ))}
            </tr>
          </table>
        </Column>
      </Row>
    </Section>
  )
}

export default SurveySection