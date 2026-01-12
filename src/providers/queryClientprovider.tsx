import {MutationCache, QueryClient, QueryClientProvider} from "@tanstack/react-query";
import type {ReactNode} from "react";


const queryClient = new QueryClient({
    mutationCache: new MutationCache(({
        onSettled: ()=>{
            queryClient.invalidateQueries({queryKey:['members']});
        }
    }))
})
type Props = {
    children: ReactNode;
};
function AppQueryClientProvider({children} : Props) {
    return (
        <>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider></>
    );
}

export default AppQueryClientProvider;