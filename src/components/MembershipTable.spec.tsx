import React from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactNode} from "react";
import {vi} from "vitest";
import {render,screen} from "@testing-library/react";
import Table, {List} from "./Table.tsx";
import "@testing-library/jest-dom";

export const createQueryClient = ()=>{
    return new QueryClient({
       defaultOptions:{
          queries:{
              retry:false,
              gcTime:0
          }
       },
    })
}

export const TestQueryClientProvider = ({children}: {children:ReactNode})=>{
    const client =createQueryClient();
    return (
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
    )
}
describe('check the suspensequery is working',()=>{

    beforeEach(()=>{

    });
    afterEach(() => {
        vi.resetAllMocks();
    });
    it('renders table data', () => {
        const data:List[] = [
            {
                _id: 862376,
                name: "Amit Jeeba",
                gender: "Male",
                membershipStartDate: "2023-05-20T00:00:00.000Z",
                membershipEndData: "2024-05-19T00:00:00.000Z",
            },
        ];

        render(
            <TestQueryClientProvider>
                <Table list={data} />
            </TestQueryClientProvider>
        );

        expect(screen.getByText(/Amit/i)).toBeInTheDocument();
    });

})