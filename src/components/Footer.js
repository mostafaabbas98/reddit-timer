import { StyledFooter } from '../styles/Footer.style';

const Footer = () => {
  return (
    <StyledFooter>
      <small>
        I got the idea of this project from
        <a href="https://jkettmann.com" target="_blank" rel="noreferrer">
          Johannes Kettmann's
        </a>
        blog
      </small>
      <small>
        made by
        <a
          href="https://www.github.com/mostafaabbas98"
          target="_blank"
          rel="noreferrer"
        >
          mostafa abbas
        </a>
      </small>
    </StyledFooter>
  );
};

export default Footer;
