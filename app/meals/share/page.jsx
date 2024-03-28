import Link from "next/link";

function SharePage() {
    return (
        <main>
            <h2>This is the share Page</h2>
            <Link href={'/meals'}>Go back to meals</Link>
        </main>
    );
}

export default SharePage;