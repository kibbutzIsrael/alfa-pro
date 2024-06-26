import axios from "axios";
import { SWRConfig } from "swr";

const Providers = ({ children }) => {
   return (
      <SWRConfig
         value={{
            fetcher: (resource, init) =>
               axios.get(resource, init).then((res) => res.data),
         }}
      >
         {children}
      </SWRConfig>
   );
};

export default Providers;
