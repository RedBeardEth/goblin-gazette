import { LoginButton } from "../_components/LoginButton";
import { LoginModal } from "../_components/LoginModal";
import AppProvider from "../providers/Providers";
import { UIContextProvider } from "../providers/UIProvider";

const MainLayout = (props: any) => {
  const { children } = props;
  return (
    <AppProvider>
      <UIContextProvider>
        <div className="min-h-screen bg-black text-white">
          <div className="w-full flex px-4  py-3 justify-end">
            <LoginButton />
          </div>
          <div className="container mx-auto">{children}</div>
        </div>
        <LoginModal />
      </UIContextProvider>
    </AppProvider>
  );
};

export default MainLayout;
