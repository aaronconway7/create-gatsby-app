import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
            query SiteMetaData {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        twitter
                        socialImage
                    }
                }
            }
        `
    )
    return site.siteMetadata
}
