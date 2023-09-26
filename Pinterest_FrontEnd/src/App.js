import { Route, Routes } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import HomePage from "./pages/homePage/HomePage";
import IntroPage from "./pages/introPage/IntroPage";
import MakePinPage from "./pages/makePinPage/MakePinPage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import ProfileEditPage from "./pages/profileEditPage/ProfileEditPage";
import PinDetailPage from "./pages/pinDetailPage/PinDetailPage";
import LoginModal from "./components/Modals/LoginModal";
import SignUpModal from "./components/Modals/SignUpModal";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="" element={<IntroPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="make" element={<MakePinPage />} />
          <Route path="detail/:pinid" element={<PinDetailPage />} />
          <Route path="profile/:nickname" element={<ProfilePage />} />
          <Route path="edit/:nickname" element={<ProfileEditPage />} />
        </Route>
        <Route path="/login" element={<LoginModal />} />
        <Route path="/signup" element={<SignUpModal />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
