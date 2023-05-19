import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar="https://media.licdn.com/dms/image/D4D03AQGFrLqcoRRVHQ/profile-displayphoto-shrink_800_800/0/1675552052757?e=1688601600&v=beta&t=KQsqWxu7aBnv2va4iaSQ-_v_gjLhq09psrp1r_IHYKM"
        name="Mateus"
        bio="Full-stack javascript developer at Tarrafada."
        email="mateuscunha0220@gmail.com"
        phone="+5569999768533"
        githubUrl="https://github.com/"
        linkedinUrl="https://www.linkedin.com/"
        twitterUrl="https://twitter.com/i/flow/login"
      ></Profile>
    </div>
  );
}
