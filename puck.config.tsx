import TypeSection from '@/components/typeSection';
import ImageGrid from '@/components/imageGrid';
import { Container } from '@react-email/components';
import { Config } from '@measured/puck';
import ArticleSection from '@/components/article';
import HeaderSection from'@/components/headerSection'

export const config: Config = {
  components: {
    HeaderSection:{
      fields:{
        variant:{
          type:"select",
          options: [
            { label: "Centered", value: "centered" },
            { label: "Side", value: "side" },
            { label: "Social", value: "social" },
          ],
        }
      },
      defaultProps:{
        variant:"centered"
      },
      render:({variant})=>{
        return(
          <HeaderSection type={variant} />
        )
      }

    },
    SectionHeader: {
      fields: {
        overLine: {
          type: 'text',
        },
        heading: {
          type: 'text',
        },
        description: {
          type: 'text',
        },
      },
      defaultProps: {
        overLine: 'Brand new',
        heading: 'Super heading',
        description: 'This is a full line description',
      },
      render: ({ overLine, heading, description }) => {
        return (
          <TypeSection
            overLine={overLine}
            heading={heading}
            description={description}
          />
        );
      },
    },
    ImageGrid: {
      resolveFields: (data) => {
        const fields = {
          count: {
            type: 'radio' as const,
            options: [
              { label: 'Single Image', value: '1' },
              { label: 'Two Images', value: '2' }
            ]
          },
          image1Url: {
            type: 'text' as const,
          },
          image1Alt: {
            type: 'text' as const,
          }
        };

        if (data.props.count == 2) {
          return {
            ...fields,
            image2Url: {
              type: 'text',
            },
            image2Alt: {
              type: 'text',
            }
          };
        }

        return fields;
      },
      defaultProps: {
        count: '1',
        image1Url: 'https://react.email/static/monty-art-cup-1.jpg',
        image1Alt: 'Mugs Collection',
        image2Url: 'https://react.email/static/monty-art-cup-2.jpg',
        image2Alt: 'Monty Art Cup - 2',
      },
      render: ({ count, image1Url, image1Alt, image2Url, image2Alt }) => {
        return (
          <ImageGrid
            count={Number(count)}
            image1Url={image1Url}
            image1Alt={image1Alt}
            image2Url={image2Url}
            image2Alt={image2Alt}
          />
        );
      },
    },
    Article: {
      fields: {
        overLine: {
          type: 'text',
        },
        heading: {
          type: 'text',
        },
        description: {
          type: 'text',
        },
        link: {
          type: 'text',
        },
        btnText: {
          type: 'text',
        },
        imgSrc: {
          type: 'text',
        },
        imgHeight: {
          type: 'number',
        },
        imgAlt: {
          type: 'text',
        },
      },
      defaultProps: {
        overLine: 'Featured Article',
        heading: 'Article Heading',
        description: 'Article description goes here',
        link: 'https://example.com',
        btnText: 'Read More',
        imgSrc: 'https://react.email/static/herman-miller-chair.jpg',
        imgHeight: 400,
        imgAlt: 'Article Image',
      },
      render: ({
        overLine,
        heading,
        description,
        link,
        btnText,
        imgSrc,
        imgHeight,
        imgAlt,
      }) => {
        return (
          <ArticleSection
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            imgHeight={imgHeight}
            overLine={overLine}
            heading={heading}
            description={description}
            link={link}
            btnText={btnText}
          />
        );
      },
    },
  },
  root: {
    render: ({ children }: { children: React.ReactNode }) => {
      return (
        <Container className='p-12 bg-white '>{children}</Container>
      );
    },
  },
};

export default config;
