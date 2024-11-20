import { Section, Row, Link, Img, Column } from '@react-email/components';

let ImageGrid = ({ count, image1Url, image1Alt, image2Url, image2Alt }) => {
  return (
    <Section style={{ marginTop: '16px' }}>
      {count == 1 ? (
        <Link href='#'>
          <Img
            alt={image1Alt || 'Mugs Collection'}
            style={{ borderRadius: '12px', objectFit: 'cover' }}
            height={200}
            src={image1Url || 'https://react.email/static/monty-art-cup-1.jpg'}
            width='100%'
          />
        </Link>
      ) : (
        <Row >
          <Column style={{ width: '50%', paddingRight: '8px' }}>
            <Link href='#'>
              <Img
                alt={image1Alt || 'Monty Art Cup - 1'}
                style={{ borderRadius: '12px', objectFit: 'cover' }}
                height={288}
                src={image1Url || 'https://react.email/static/monty-art-cup-1.jpg'}
                width='100%'
              />
            </Link>
          </Column>
          <Column style={{ width: '50%', paddingLeft: '8px' }}>
            <Link href='#'>
              <Img
                alt={image2Alt || 'Monty Art Cup - 2'}
                style={{ borderRadius: '12px', objectFit: 'cover' }}
                height={288}
                src={image2Url || 'https://react.email/static/monty-art-cup-2.jpg'}
                width='100%'
              />
            </Link>
          </Column>
        </Row>
      )}
    </Section>
  );
};

export default ImageGrid;
