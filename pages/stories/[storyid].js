import { useRouter } from 'next/router';

function IndividualStoryPage() {
    const router = useRouter();

    const storyid = router.query.storyid;

    // send a request to the backend API
    // to fetch the news item with storyid

    return <h1>IndividualStoryPage Page</h1>
}

export default IndividualStoryPage;