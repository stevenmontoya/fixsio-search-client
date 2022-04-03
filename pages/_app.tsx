import { GlobalStyles } from "../components/GlobalStyles";
import { RecoilRoot } from "recoil";

const App = ({ Component, pageProps }) => (
  <div>
    <GlobalStyles />
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  </div>
);

export default App;
