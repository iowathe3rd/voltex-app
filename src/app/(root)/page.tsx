import HeaderBox from "@/components/layout/HeaderBox";

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
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
        </header>
      </div>
    </section>
  );
};

export default Home;
