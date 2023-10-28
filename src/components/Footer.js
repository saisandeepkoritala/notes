const Footer = () => {

    const get=["Careers",
        "Amazon Newsletter",
        "About Amazon",
        "Accessibility",
        "Sustainability",
        "Press Center",
        "Investor Relations",
        "Amazon Devices",
        "Amazon Science"]
        const renderedget=get.map((item)=>{
            return <p key={item.toLowerCase()}>{item}</p>
        })

        const Make=["Sell more with Amazon",
            "Sell apps on Amazon",
            "Supply to Amazon",
            "Protect & Build Your Brand",
            "Become an Affiliate",
            "Become a Delivery Driver",
            "Start a Package Delivery Business",
            "Advertise Your Products",
            "Self-Publish with Us",
            "Host an Amazon Hub",
            "See More Ways to Make Money"]
        const Pay=["Amazon Visa",
            "Amazon Store Card",
            "Amazon Secured Card",
            "Amazon Business Card",
            "Shop with Points",
            "Credit Card Marketplace",
            "Reload Your Balance",
            "Gift Cards",
            "Amazon Currency Converter"]

        const help=["Your Account",
        "Your Orders",
        "Shipping Rates & Policies",
        "Amazon Prime",
        "Returns & Replacements",
        "Manage Your Content and Devices",
        "Your Recalls and Product Safety Alerts",
        "Help"]    
return (
    <div className='footer'>
        <div>
            <h2>Get to Know us</h2>
            {renderedget}
        </div>
        <div>
            <h2>Make Money with us</h2>
            {Make.map((item)=><p key={item.toLowerCase()}>{item}</p>)}
        </div>
        <div>
            <h2>Amazon Payment Products</h2>
            {Pay.map((item)=><p key={item.toLowerCase()}>{item}</p>)}
        </div>
        <div>
            <h2>Let us help you</h2>
            {help.map((item)=><p key={item.toLowerCase()}>{item}</p>)}
        </div>
    </div>
)
}

export default Footer;
