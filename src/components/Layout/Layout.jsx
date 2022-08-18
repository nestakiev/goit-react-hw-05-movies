import { Outlet } from "react-router-dom";
import { PageHeader } from "components/PageHeader/PageHeader";
import { Suspense } from "react";
import { ThreeDots } from "react-loader-spinner";

export const Layout = () => {
    return (
        <main>
            <PageHeader/>
            <Suspense fallback={<ThreeDots 
                                height="80" 
                                width="80" 
                                radius="9"
                                color="#4fa94d" 
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
            />}>
            <Outlet/>
            </Suspense>
        </main>
    )
};