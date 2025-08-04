import { LogoutButton } from "@/features/logout/ui";
import { ProfileActions } from "@/features/profile/ui/profile-actions";
import { ProfileBio } from "@/features/profile/ui/profile-bio";
import { ProfileDocs } from "@/features/profile/ui/profile-docs";
import { ProfileInfo } from "@/features/profile/ui/profile-info";
import { ProfileSection } from "@/features/profile/ui/profile-section";

const Profile = () => {
  return (
    <div className="font-sans w-full min-h-[calc(100vh-4rem)] h-full bg-page px-2.5 py-6 space-y-4 mb-16">
      <ProfileInfo />
      <ProfileActions />
      <ProfileSection />
      <ProfileBio />
      <ProfileDocs />
      <LogoutButton />
    </div>
  );
};

export default Profile;
