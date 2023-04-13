import LinkButton from './LinkButton'

import githubLogo from '../assets/linksLogos/github.svg'
import lastfmLogo from '../assets/linksLogos/lastfm.svg'
import openaiLogo from '../assets/linksLogos/openai.svg'
import tutanotaLogo from '../assets/linksLogos/tutanota.svg'
import twitterLogo from '../assets/linksLogos/twitter.svg'
import youtubeLogo from '../assets/linksLogos/youtube.svg'
import dndLogo from '../assets/linksLogos/dnd.svg'
import chessLogo from '../assets/linksLogos/chess.svg'
import xahLogo from '../assets/linksLogos/sum.svg'
import whatsappLogo from '../assets/linksLogos/whatsapp.svg'

function Links() {
    return( <div className="linksWrapper">
        <LinkButton
            logo={twitterLogo}
            name="Twitter"
            url="https://twitter.com/home" />
        <LinkButton
            logo={youtubeLogo}
            name="YouTube"
            url="https://www.youtube.com/" />
        <LinkButton
            logo={githubLogo}
            name="Github"
            url="https://github.com/nilet" />
        <LinkButton
            logo={lastfmLogo}
            name="Last FM"
            url="https://www.last.fm/user/nntablzdeboa" />
        <LinkButton
            logo={whatsappLogo}
            name="WhatsApp"
            url="https://web.whatsapp.com/" />
        <LinkButton
            logo={openaiLogo}
            name="ChatGPT"
            url="https://chat.openai.com/chat" />
        <LinkButton
            logo={tutanotaLogo}
            name="Tutanota"
            url="https://mail.tutanota.com/mail/" />
        <LinkButton
            logo={dndLogo}
            name="D&D"
            url="https://www.dndbeyond.com/" />
        <LinkButton
            logo={xahLogo}
            name="Xah Lee"
            url="http://xahlee.info/" />
        <LinkButton
            logo={chessLogo}
            name="Chess"
            url="https://www.chess.com/home" />
    </div >)
}

export default Links;
