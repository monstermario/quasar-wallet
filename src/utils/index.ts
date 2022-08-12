export const shortenAddress = (str: string) =>
  `${str.slice(0, 4)}...${str.slice(-4)}`;
