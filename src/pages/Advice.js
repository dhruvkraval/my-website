const advice = [
  {
    quote: 'Success is being excited to go to work and being excited to come home.',
    source: 'Will Ahmed',
    link: 'https://x.com/willahmed/status/1877006730493603903',
  },
  {
    quote: 'The self is the friend of a man who masters himself through the self, but for a man without self-mastery, the self is like an enemy at war.',
    source: 'Bhagavad Gita',
  },
  {
    quote: 'If we only wanted to be happy, it would be easy; but we want to be happier than other people, which is almost always difficult, since we think them happier than they are.',
    source: 'Charles de Montesquieu',
  },
  {
    quote: 'You can literally destroy your happiness if you spend all of your time living in delusions of the future.',
    source: "Naval's Almanack",
  },
  {
    quote: 'All the returns in life, whether in wealth, relationships, or knowledge, come from compound interest.',
    source: "Naval's Almanack",
  },
  {
    quote: 'Velocity creates a sense of vitality.',
    source: 'Unknown',
  },
  {
    quote: 'Your goal is a process, not a result.',
    source: 'Nick Saban',
  },
  {
    quote: 'Outcomes are a distraction. We want to focus on what we need to do to get the outcome.',
    source: 'Nick Saban',
  },
  {
    quote: "If everybody doesn't buy into the same principles and values of the organization at the same high standard, you're never gonna be successful.",
    source: 'Nick Saban',
  },
  {
    quote: "Mediocre people don't like high-achievers and high-achievers don't like mediocre people.",
    source: 'Nick Saban',
  },
  {
    quote: "There's the ones with statues and there's the ones without. And the thing is, the ones without the statues are all different. But the ones with statues are all the same.",
    source: 'Nick Saban',
  },
  {
    quote: 'Pyrrhic victory — a triumph that is as good as a defeat, for it comes at too great a cost.',
    source: 'Unknown',
  },
  {
    quote: 'I go to other people\'s funerals so they come to mine.',
    source: 'Yogi Berra',
  },
];

export default function Advice() {
  return (
    <>
      <p className="section-label">Advice I liked</p>
      <p style={{ marginBottom: '16px', color: '#444' }}>I keep my favorite quotes on postcards taped to one of the walls in my room. Given my website is my internet wall, I added some of my favorite quotes here.</p>
      <ul style={{ listStyle: 'disc', paddingLeft: '32px', marginTop: '8px' }}>
        {advice.map((a, i) => (
          <li key={i} style={{ marginBottom: '4px', color: '#333' }}>
            {a.link ? (
              <a href={a.link} target="_blank" rel="noopener noreferrer">"{a.quote}"</a>
            ) : (
              <span>"{a.quote}"</span>
            )}
            <span style={{ color: '#666' }}> — {a.source}</span>
          </li>
        ))}
      </ul>
      <ul style={{ listStyle: 'disc', paddingLeft: '32px', marginTop: '8px' }}>
        <li style={{ marginBottom: '4px', color: '#333' }}>
          <a href="/principles">A list of good quotes from Principles by Ray Dalio</a>
        </li>
      </ul>
    </>
  );
}
