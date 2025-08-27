export default function FooterRights() {
    const currentYear = new Date().getFullYear();
    
    return (
        <span className="side-panel-text-content-dynamic-year-right-wrapper dynamic-year">
            {currentYear}
        </span>
    );
};