import { Section, Row, Column, Img, Link } from '@react-email/components';
let HeaderSection = ({ type }) => {
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
                  alt='React Email logo'
                  height='42'
                  src='https://react.email/static/logo-without-background.png'
                />
              </Column>
            </Row>
            <Row style={{ marginTop: 40 }}>
              <Column align='center'>
                <table>
                  <tr>
                    <td style={{ paddingRight: 8, paddingLeft: 8 }}>
                      <Link
                        href='#'
                        style={{
                          color: 'rgb(75,85,99)',
                          textDecoration: 'none',
                        }}>
                        About
                      </Link>
                    </td>
                    <td style={{ paddingRight: 8, paddingLeft: 8 }}>
                      <Link
                        href='#'
                        style={{
                          color: 'rgb(75,85,99)',
                          textDecoration: 'none',
                        }}>
                        Blog
                      </Link>
                    </td>
                    <td style={{ paddingRight: 8, paddingLeft: 8 }}>
                      <Link
                        href='#'
                        style={{
                          color: 'rgb(75,85,99)',
                          textDecoration: 'none',
                        }}>
                        Company
                      </Link>
                    </td>
                    <td style={{ paddingRight: 8, paddingLeft: 8 }}>
                      <Link
                        href='#'
                        style={{
                          color: 'rgb(75,85,99)',
                          textDecoration: 'none',
                        }}>
                        Features
                      </Link>
                    </td>
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
                  alt='React Email logo'
                  height='42'
                  src='https://react.email/static/logo-without-background.png'
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
                  alt='React Email logo'
                  height='42'
                  src='https://react.email/static/logo-without-background.png'
                />
              </Column>
              <Column align='right'>
                <Row align='right'>
                  <Column>
                    <Link href='#'>
                      <Img
                        alt='X'
                        height='36'
                        src='https://react.email/static/x-logo.png'
                        style={{
                          marginLeft: 4,
                          marginRight: 4,
                        }}
                        width='36'
                      />
                    </Link>
                  </Column>
                  <Column>
                    <Link href='#'>
                      <Img
                        alt='Instagram'
                        height='36'
                        src='https://react.email/static/instagram-logo.png'
                        style={{
                          marginLeft: 4,
                          marginRight: 4,
                        }}
                        width='36'
                      />
                    </Link>
                  </Column>
                  <Column>
                    <Link href='#'>
                      <Img
                        alt='Facebook'
                        height='36'
                        src='https://react.email/static/facebook-logo.png'
                        style={{ marginLeft: 4, marginRight: 4 }}
                        width='36'
                      />
                    </Link>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Section>
        )
    );
};

export default HeaderSection;
