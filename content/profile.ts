export type SocialLink = {
  label: string;
  url: string;
};

export type DeveloperProfile = {
  handle: string;
  roleLine: string;
  statusLine?: string;
  locationLabel?: string;
  email: string;
  socialLinks?: SocialLink[];
};

export const profile: DeveloperProfile = {
  handle: "CASE",
  roleLine: "CYBER-DEVELOPER",
  statusLine: "DECK ONLINE // SEEKING UPLINK",
  locationLabel: "CHIBA CITY / REMOTE NODE",
  email: "ternoboy@gmail.com",
  socialLinks: [
    { label: "GITHUB", url: "https://github.com/iuru2522" },
    { label: "LINKEDIN", url: "https://www.linkedin.com/in/iurii-m-50981a191/" },
  ],
};
