import Hero from "../src/components/Hero.jsx";
import HomeCards from "../src/components/HomeCards.jsx";
import JobListings from "../src/components/JobListings.jsx";
import ViewAllJobs from "../src/components/ViewAllJobs.jsx";



const HomePage = () => {
	return (
		<>
		<Hero />
		<HomeCards />
		<JobListings />
		<ViewAllJobs/>
		</>
	);
};

export default HomePage;