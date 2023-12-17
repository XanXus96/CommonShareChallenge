export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      appName: "DM",
      loadMore: "Show more cars",
      loading: "loading..",
      search: {
        input: {
          placeholder: "Search something here",
        },
      },
      footer: {
        description:
          "Our vision is to provide convenience and help increase your sales business.",
        section: {
          about: {
            title: "About",
            howItWorks: "How it works",
            featured: "Featured",
            partnership: "Partnership",
            businessRelation: "Business Relation",
          },
          community: {
            title: "Community",
            events: "Events",
            blog: "Blog",
            podcast: "Podcast",
            inviteFriend: "Invite a friend",
          },
          socials: {
            title: "Socials",
            discord: "Discord",
            instagram: "Instagram",
            twitter: "Twitter",
            facebook: "Facebook",
          },
        },
        copyright: "All Rights Reserved.",
        privacyPolicy: "Privacy & Policy",
        termsConditions: "Terms & Conditions",
      },
    },
  },
}));
