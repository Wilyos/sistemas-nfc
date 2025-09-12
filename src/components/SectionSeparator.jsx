import './SectionSeparator.css';

const SectionSeparator = ({ from = '#0a0a0a', to = '#111111', accent = 'var(--color-accent-green-weak)' }) => {
  return (
    <div
      className="section-separator"
      style={{ ['--from']: from, ['--to']: to, ['--accent']: accent }}
    >
      <div className="separator-line" />
    </div>
  );
};

export default SectionSeparator;
