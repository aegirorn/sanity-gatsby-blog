export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60a1a546616dfb812051f0dd",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-m5nda9t9",
                  apiId: "0663a617-05f1-44a2-8ec5-541a6af0675a",
                },
                {
                  buildHookId: "60a1a5463cd21fb631f8f0be",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-8wo5rnhb",
                  apiId: "7aa93e54-3da3-4f3b-9dc5-08d931028bcf",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/aegirorn/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-8wo5rnhb.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
