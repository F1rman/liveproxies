import Footer from "@/components/footer";
import Header from "@/components/header";
import Questions from "@/components/questions";
import SimpleManagementDashboard from "@/modules/home/simple_management_dashboard";
import GetSolutions from "@/modules/home/get_solution";
import LiveToday from "@/modules/home/live_today";
import Plans from "@/modules/home/plans";
import UtilizeFavouriteApp from "@/modules/home/utilize_favorite_app";
import WhyLiveProxies from "@/modules/home/why_live_proxies";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HomeHeader from "@/modules/home/home_header";
import TrustPilot from "@/modules/home/trust_pilot";
import TopUseCases from "@/modules/home/top_use_cases";
import TrustedService from "@/modules/home/trusted_service";
import PlansMobile from "@/modules/home/plans_mobile";

export default function Home() {
  return (
    <>
      <Head>
        <title>LIVE PROXIES</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomeHeader />
	  <TrustPilot />
      <TopUseCases />
      <TrustedService />
      <WhyLiveProxies />
      <Plans />
      <GetSolutions />
      <SimpleManagementDashboard />
      <UtilizeFavouriteApp />
      <Questions />
      <LiveToday />
      <Footer />
    </>
  );
}
