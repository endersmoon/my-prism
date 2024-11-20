import { Section, Row, Column, Img, Link } from '@react-email/components';

let HeaderSection = ({ 
  type, 
  logoUrl = 'https://react.email/static/logo-without-background.png',
  logoAlt = 'React Email logo',
  logoHeight = '42',
  links = [
    { text: 'About', href: '#' },
    { text: 'Blog', href: '#' },
    { text: 'Company', href: '#' },
    { text: 'Features', href: '#' }
  ],
  socialLinks = [
    { icon: 'https://react.email/static/x-logo.png', alt: 'X', href: '#' },
    { icon: 'https://react.email/static/instagram-logo.png', alt: 'Instagram', href: '#' },
    { icon: 'https://react.email/static/facebook-logo.png', alt: 'Facebook', href: '#' }
  ]
}) => {
    return(
        type == 'centered' ? (
          <Section
            style={{
              paddingTop: 40,
              paddingBottom: 40,
              paddingLeft: 32,
              paddingRight: 32,
              marginTop: 40,
              marginBottom: 40,
            }}>
            <Row>
              <Column align='center'>
                <Img
                  alt={logoAlt}
                  height={logoHeight}
                  src={logoUrl}
                />
              </Column>
            </Row>
            <Row style={{ marginTop: 40 }}>
              <Column align='center'>
                <table>
                  <tr>
                    {links.map((link, index) => (
                      <td key={index} style={{ paddingRight: 8, paddingLeft: 8 }}>
                        <Link
                          href={link.href}
                          style={{
                            color: 'rgb(75,85,99)',
                            textDecoration: 'none',
                          }}>
                          {link.text}
                        </Link>
                      </td>
                    ))}
                  </tr>
                </table>
              </Column>
            </Row>
          </Section>
        ) : type == 'side' ? (
          <Section
            style={{
              paddingTop: 40,
              paddingBottom: 40,
              paddingLeft: 32,
              paddingRight: 32,
              marginTop: 40,
              marginBottom: 40,
            }}>
            <Row>
              <Column style={{ width: '80%' }}>
                <Img
                  alt={logoAlt}
                  height={logoHeight}
                  src={logoUrl}
                />
              </Column>
              <Column align='right'>
                <Row align='right'>
                  <Column style={{ paddingLeft: 8, paddingRight: 8 }}>
                    <Link
                      href='#'
                      style={{ color: 'rgb(75,85,99)', textDecoration: 'none' }}>
                      About
                    </Link>
                  </Column>
                  <Column style={{ paddingLeft: 8, paddingRight: 8 }}>
                    <Link
                      href='#'
                      style={{ color: 'rgb(75,85,99)', textDecoration: 'none' }}>
                      Company
                    </Link>
                  </Column>
                  <Column style={{ paddingLeft: 8, paddingRight: 8 }}>
                    <Link
                      href='#'
                      style={{ color: 'rgb(75,85,99)', textDecoration: 'none' }}>
                      Blog
                    </Link>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Section>
        ) : (
          <Section
            style={{
              paddingTop: 40,
              paddingBottom: 40,
              paddingLeft: 32,
              paddingRight: 32,
            }}>
            <Row>
              <Column style={{ width: '80%' }}>
                <Img
                  alt={logoAlt}
                  height={logoHeight}
                  src={logoUrl}
                />
              </Column>
              <Column align='right'>
                <Row align='right'>
                  {socialLinks.map((social, index) => (
                    <Column key={index}>
                      <Link href={social.href}>
                        <Img
                          alt={social.alt}
                          height='36'
                          src={social.icon}
                          style={{
                            marginLeft: 4,
                            marginRight: 4,
                          }}
                          width='36'
                        />
                      </Link>
                    </Column>
                  ))}
                </Row>
              </Column>
            </Row>
          </Section>
        )
    );
};

export default HeaderSection;
