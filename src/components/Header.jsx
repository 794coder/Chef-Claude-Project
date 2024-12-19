import icon from "/src/images/chef-claude-icon.png"

export default function Header (){
    return(
        <header>
            <img src={icon} alt="chef claude" />
            <h1>Chef Claude</h1>
        </header>
    )
}