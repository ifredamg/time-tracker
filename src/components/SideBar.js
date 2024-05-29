import Link from './Link';

function Sidebar() {
    const links = [
        { label: 'Time Tracker', path: '/' },
        { label: 'Calendar', path: '/calendar' },
        { label: 'Dashboard', path: '/dashboard' },
        { label: 'Reports', path: '/reports' },
        { label: 'Projects', path: '/projects' },
        { label: 'Clients', path: '/clients' },
        { label: 'Tags', path: '/tags' }
    ];

    const renderedLinks = links.map((link) => {
        return (
            <div>
                <Link key={link.label} to={link.path} className="ps-2 pe-2" activeClassName="fw-bold">{link.label}</Link>
            </div>
        );
    })

    return (
        <div className="sticky-top top-0 flex flex-col items-start">
            {renderedLinks}
        </div>
    );
}

export default Sidebar;