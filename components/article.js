import { Section, Row, Text, Heading, Button,Img } from '@react-email/components';

let ArticleSection = ({ overLine, heading, description, link, btnText, imgSrc, imgAlt, imgHeight = '320' }) => {
  return (
    <Section style={{ marginTop: 16, marginBottom: 16 }}>
      <Img
        alt={imgAlt}
        height={imgHeight}
        src={imgSrc}
        style={{
          width: '100%',
          borderRadius: 12,
          objectFit: 'cover',
        }}
      />
      <Section
        style={{
          marginTop: 32,
          textAlign: 'center',
        }}>
        <Text
          style={{
            marginTop: 16,
            marginBottom: 16,
            fontSize: 18,
            lineHeight: '28px',
            fontWeight: 600,
            color: 'rgb(79,70,229)',
          }}>
          {overLine}
        </Text>
        <Heading
          as='h1'
          style={{
            margin: '0px',
            marginTop: 8,
            fontSize: 36,
            lineHeight: '36px',
            fontWeight: 600,
            color: 'rgb(17,24,39)',
          }}>
          {heading}
        </Heading>
        <Text
          style={{
            fontSize: 16,
            lineHeight: '24px',
            color: 'rgb(107,114,128)',
          }}>
          {description}
        </Text>
        <Button
          href={link}
          style={{
            marginTop: 16,
            borderRadius: 8,
            backgroundColor: 'rgb(79,70,229)',
            paddingLeft: 40,
            paddingRight: 40,
            paddingTop: 12,
            paddingBottom: 12,
            fontWeight: 600,
            color: 'rgb(255,255,255)',
          }}>
          {btnText}
        </Button>
      </Section>
    </Section>
  );
};

export default ArticleSection;
