import Link from 'next/link';
import { Fragment } from 'react';

function Stories() {
    return <Fragment>
        <h1>Stories Page</h1>
        <ul>
            <li><Link href='/stories/Mountains'>Mountains</Link></li>
            <li><Link href='/stories/Sunset'>Sunset</Link></li>
        </ul>
        </Fragment>
}

export default Stories;