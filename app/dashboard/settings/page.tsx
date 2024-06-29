import { UserProfile } from "@clerk/nextjs";

const SettingsPage = () => {
  return <UserProfile routing="hash" />;
};

export default SettingsPage;
