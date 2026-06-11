const quotes = [
  'Think for yourself to decide 1) what you want, 2) what is true, and 3) what you should do to achieve #1 in light of #2.',
  'Look to the patterns of those things that affect you in order to understand the cause-effect relationships that drive them and to learn principles for dealing with them effectively.',
  'Some people want to change the world and others want to operate in simple harmony with it and save life. Neither is better. Each of us needs to decide what we value and choose the paths we take to achieve it.',
  'Truth — or, more precisely, an accurate understanding of reality — is the essential foundation for any good outcome.',
  'The more open-minded you are, the less likely you are to deceive yourself.',
  "Don't get hung up on your views of how things 'should' be because you will miss out on learning how they really are. It's important not to let our biases stand in the way of our objectivity.",
  'Reality is optimizing for the whole — not for you.',
  "By recognizing the higher-level consequences nature optimizes for, I've come to see that people who overweigh the first-order consequences of their decisions and ignore the second- and subsequent-order consequences rarely reach their goals. For example, the first-order consequences of exercise (pain and time spent) are commonly considered undesirable, while the second-order consequences (better health and more attractive appearance) are desirable.",
  'Principle 3.4: Triangulate your view with believable people who are willing to disagree.',
  'Know that the most constant struggle is between feeling and thinking.',
  'One of the most important decisions you can make is who you ask questions of. Make sure they\'re fully informed and believable…Listening to uninformed people is worse than having no answers at all.',
];

export default function Principles() {
  return (
    <>
      <p className="section-label">Principles — Ray Dalio</p>
      <p style={{ marginBottom: '16px', color: '#444' }}>I usually avoid "self-help" books, but I decided to give this one a shot. It wasn't particularly impressive, most of the ideas felt surface-level, but there were a few useful takeaways, which I've compiled below. My general preference is to build lessons from first principles, drawing from sources like foundational philosophy or history rather than packaged advice. Like many books in this genre, the insights here didn't go very deep, but there are still a handful of worthwhile ideas to take from it.</p>
      <ul style={{ listStyle: 'disc', paddingLeft: '32px', marginTop: '8px' }}>
        {quotes.map((q, i) => (
          <li key={i} style={{ marginBottom: '4px', color: '#333' }}>"{q}"</li>
        ))}
      </ul>
    </>
  );
}
