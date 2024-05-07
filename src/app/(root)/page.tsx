import HeaderBox from "@/components/layout/HeaderBox";
import { getLoggedInUser } from "@/lib/server/user.actions";

const Home = async ({ searchParams: { page } }: SearchParamProps) => {
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={"Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          {/* <TotalBalanceBox
            accounts={accountsData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          /> */}
        </header>
      </div>
    </section>
  );
};

export default Home;
