import { Section, Row, Column, Img, Link, Text } from '@react-email/components';

let FooterSection = ({
  logoSrc = 'https://react.email/static/logo-without-background.png',
  companyName = 'Acme corporation',
  tagline = 'Think different',
  address = '123 Main Street Anytown, CA 12345',
  contactInfo = 'mail@example.com +123456789',
  socialLinks = {
    facebook: '#',
    twitter: '#',
    instagram: '#'
  }
}) => {
  return (
    
    <Section style={{ textAlign: 'center' }}>
      <table style={{ width: '100%' }}>
        <tr style={{ width: '100%' }}>
          <td align='center'>
            <Img
              alt='Company logo'
              height='42'
              src={logoSrc}
            />
          </td>
        </tr>
        <tr style={{ width: '100%' }}>
          <td align='center'>
            <Text
              style={{
                marginTop: 8,
                marginBottom: 8,
                fontSize: 16,
                lineHeight: '24px',
                fontWeight: 600,
                color: 'rgb(17,24,39)',
              }}>
              {companyName}
            </Text>
            <Text
              style={{
                marginTop: 4,
                marginBottom: '0px',
                fontSize: 16,
                lineHeight: '24px',
                color: 'rgb(107,114,128)',
              }}>
              {tagline}
            </Text>
          </td>
        </tr>
       
        <tr>
          <td align='center'>
            <Text
              style={{
                marginTop: 8,
                marginBottom: 8,
                fontSize: 16,
                lineHeight: '24px',
                fontWeight: 600,
                color: 'rgb(107,114,128)',
              }}>
              {address}
            </Text>
            <Text
              style={{
                marginTop: 4,
                marginBottom: '0px',
                fontSize: 16,
                lineHeight: '24px',
                fontWeight: 600,
                color: 'rgb(107,114,128)',
              }}>
              {contactInfo}
            </Text>
          </td>
        </tr>
      </table>
    </Section>
  );
};

export default FooterSection;
