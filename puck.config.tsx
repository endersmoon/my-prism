import TypeSection from '@/components/typeSection';
import ImageGrid from '@/components/imageGrid';
import { Container } from '@react-email/components';
import { Config } from '@measured/puck';
import ArticleSection from '@/components/article';
import HeaderSection from'@/components/headerSection'
import FooterSection from '@/components/footerSection';
import NumberedListSection from '@/components/numberedListSection';
import SurveySection from '@/components/survey';

export const config: Config = {
  components: {
    HeaderSection: {
      fields: {
        variant: {
          type: "select",
          options: [
            { label: "Centered", value: "centered" },
            { label: "Side", value: "side" },
            { label: "Social", value: "social" },
          ],
        },
        logoUrl: {
          type: "text",
        },
        logoAlt: {
          type: "text",
        },
        logoHeight: {
          type: "text",
        },
        links: {
          type: "array",
          arrayFields: {
            text: { type: "text" },
            href: { type: "text" },
          },
        },
      },
      resolveFields: (data) => {
        const fields = {
          variant: {
            type: "select" as const,
            options: [
              { label: "Centered", value: "centered" },
              { label: "Side", value: "side" },
              { label: "Social", value: "social" },
            ],
          },
          logoUrl: { type: "text" as const },
          logoAlt: { type: "text" as const },
          logoHeight: { type: "text" as const },
          links: {
            type: "array" as const,
            arrayFields: {
              text: { type: "text" },
              href: { type: "text" },
            },
          },
        };

        if (data.props.variant === "social") {
          return {
            ...fields,
            socialLinks: {
              type: "array",
              arrayFields: {
                icon: { type: "text" },
                alt: { type: "text" },
                href: { type: "text" },
              },
            },
          };
        }

        return fields;
      },
      defaultProps: {
        variant: "centered",
        logoUrl: "https://react.email/static/logo-without-background.png",
        logoAlt: "React Email logo",
        logoHeight: "42",
        links: [
          { text: "About", href: "#" },
          { text: "Blog", href: "#" },
          { text: "Company", href: "#" },
          { text: "Features", href: "#" },
        ],
        socialLinks: [
          { icon: "https://react.email/static/x-logo.png", alt: "X", href: "#" },
          { icon: "https://react.email/static/instagram-logo.png", alt: "Instagram", href: "#" },
          { icon: "https://react.email/static/facebook-logo.png", alt: "Facebook", href: "#" },
        ],
      },
      render: ({ variant, logoUrl, logoAlt, logoHeight, links, socialLinks }) => {
        return (
          <HeaderSection 
            type={variant}
            logoUrl={logoUrl}
            logoAlt={logoAlt}
            logoHeight={logoHeight}
            links={links}
            socialLinks={socialLinks}
          />
        );
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
    FooterSection: {
      fields: {
        logoSrc: {
          type: 'text',
        },
        companyName: {
          type: 'text',
        },
        tagline: {
          type: 'text',
        },
        address: {
          type: 'text',
        },
        contactInfo: {
          type: 'text',
        },
        socialLinks: {
          type: 'object',
          fields: {
            facebook: { type: 'text' },
            twitter: { type: 'text' },
            instagram: { type: 'text' },
          },
        },
      },
      defaultProps: {
        logoSrc: 'https://react.email/static/logo-without-background.png',
        companyName: 'Acme corporation',
        tagline: 'Think different',
        address: '123 Main Street Anytown, CA 12345',
        contactInfo: 'mail@example.com +123456789',
        socialLinks: {
          facebook: '#',
          twitter: '#',
          instagram: '#'
        }
      },
      render: ({ logoSrc, companyName, tagline, address, contactInfo, socialLinks }) => {
        return (
          <FooterSection 
            logoSrc={logoSrc}
            companyName={companyName}
            tagline={tagline}
            address={address}
            contactInfo={contactInfo}
            socialLinks={socialLinks}
          />
        );
      }
    },
    NumberedListSection: {
      fields: {
        heading: {
          type: 'text',
        },
        description: {
          type: 'text',
        },
        items: {
          type: 'array',
          arrayFields: {
            title: { type: 'text' },
            description: { type: 'text' },
          },
        },
      },
      defaultProps: {
        heading: 'Steps to Success',
        description: 'Follow these steps to achieve your goals',
        items: [
          {
            title: 'First Step',
            description: 'Begin your journey here with the first important step.',
          },
          {
            title: 'Second Step',
            description: 'Continue making progress with this crucial step.',
          },
        ],
      },
      render: ({ heading, description, items }) => {
        return (
          <NumberedListSection
            heading={heading}
            description={description}
            items={items}
          />
        );
      },
    },
    SurveySection: {
      fields: {
        highlightText: {
          type: 'text',
        },
        headingText: {
          type: 'text',
        },
        questionText: {
          type: 'text',
        },
        ratingLink: {
          type: 'text',
        },
      },
      defaultProps: {
        highlightText: "Your opinion matters",
        headingText: "We want to hear you",
        questionText: "How would you rate your experience using our product in a scale from 1 to 5?",
        ratingLink: "https://example.com/rate"
      },
      render: ({ highlightText, headingText, questionText, ratingLink }) => {
        return (
          <SurveySection
            highlightText={highlightText}
            headingText={headingText}
            questionText={questionText}
            ratingLink={ratingLink}
          />
        );
      },
    },
  },
  categories: {
    Sections: {
      components: ["HeaderSection", "FooterSection","Article", "SurveySection"],
    },
    Blocks:{
      components:["SectionHeader","NumberedListSection","ImageGrid"]
    }

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
