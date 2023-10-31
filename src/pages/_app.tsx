import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <Head>
                <title>MainProject</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                ></meta>
                <meta
                    name="description"
                    content="Trying leetclone for mainproject"
                />
            </Head>
            <Component {...pageProps} />
        </RecoilRoot>
    );
}
