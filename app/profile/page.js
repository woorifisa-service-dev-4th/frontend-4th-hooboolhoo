// app/profile/page.js

import Profile from './profile';  // Profile.jsx 컴포넌트를 불러옵니다.

const ProfilePage = () => {
  return (
    <div>
      <h1>마이페이지</h1> {/* 마이페이지 제목 */}
      <Profile />  {/* Profile 컴포넌트를 여기에서 사용합니다. */}
    </div>
  );
};

export default ProfilePage;
