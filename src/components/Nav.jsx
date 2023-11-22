import PropTypes from 'prop-types';
import ThemeToggleButton from './ThemeToggleButton';

const Nav = ({ elements }) => {
  return (
    <nav className='flex items-center justify-center gap-2'>
      <ul className='flex gap-4'>
        {elements.map((element, index) => (
          <li key={index} className='hover:text-slate-700'>
            <a href={`#${element.toLowerCase().replace(/\s+/g, '')}`}>{element}</a>
          </li>
        ))}
        <ThemeToggleButton />
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  elements: PropTypes.array.isRequired,
};

export default Nav;
