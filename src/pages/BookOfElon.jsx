const sections = [
  {
    label: 'Prologue',
    quotes: [
      'Elon sleeps on the factory floor, doubles down every time, and never gives up.',
      'As Chief Engineer, Elon reminds us that building value is building things, not financing or managing them. It\'s a better world when the richest man is one who creates wealth rather than shuffles it around, or seizes it in the name of the people.',
      'Don\'t make the thing to make the money, make the money so that you can make the thing. Don\'t get paid for work, get paid so that you can do your best work.',
    ],
  },
  {
    label: 'Part 1: Pursue Purpose',
    quotes: [
      'The measure of success in my life is: how many useful things can I get done?',
      'A useful life is worth having lived.',
      'Life is too short to spend it doing something you don\'t like.',
      'Nobody ever changed the world on forty hours a week...With that said, I would say this to twenty-something me: I think there\'s some merit to not being too intense, and enjoying the moment a bit. Occasionally stopping to smell the roses would probably be a good idea.',
      'We should not be afraid of doing something just because some amount of tragedy is likely to occur.',
      'Start somewhere. Then be prepared to question your assumptions, fix what you did wrong, and adapt to reality.',
      'In business and personal life, wishful thinking causes a lot of mistakes...Wishful thinking is innate in the human brain. You want things to be the way you wish them to be, so you tend to filter out information you shouldn\'t.',
      'Reasoning by analogy: doing something because it\'s similar to something else, or what other people are doing. Reasoning by first principles: building reasoning from the ground up.',
      'It is okay to be wrong, just don\'t be confident and wrong.',
      'You want to believe things proportionate to the evidence. Not inversely proportional to the evidence.',
      'Most people self-limit their ability to learn. It\'s pretty straightforward — just read books and talk to people.',
    ],
  },
  {
    label: 'Part 2: Ultra Hardcore Work',
    quotes: [
      'To make the right decisions, you need to understand something at a detailed level.',
      'If someone is smart and talented, they can go anywhere and do anything, anytime.',
      'Do everything you can to gather great people.',
      'Only exceptional performance constitutes a passing grade.',
      'Failure is essentially irrelevant unless it is catastrophic.',
      "Failure is a side effect of iteration. I once told a discouraged engineer, 'If you can't tell me the four ways you fucked something up before you got it right, you weren't the one doing the real work.'",
      'When you get used to losing, you will play each game with less emotion.',
      'The most common mistake of smart engineers is to optimize a thing that should not exist. Simplify as much as possible — delete anything that is unnecessary and make the simplest possible solution.',
      'The only true currency is time.',
    ],
  },
  {
    label: 'Part 3: Building Companies',
    quotes: [
      'I\'ve always wanted to push my chips back on the table or play the next level of the game. I\'m not good at sitting back.',
      'Better to pick a path and keep moving than to vacillate endlessly on a decision.',
      'Pay close attention to negative feedback, and solicit it, particularly from friends. It\'s incredibly helpful.',
      'Life is too short for long-term grudges.',
      'You can find a small number of people that will disagree with anything.',
      'The most important thing is to start somewhere, be prepared to question your assumptions, fix what you did wrong, and adapt to reality.',
      'There must be things to inspire us — things that make you proud to be a member of humanity.',
      'When something is important enough, you do it even if the odds are not in your favor.',
      'We must be optimistic. There\'s no point in being pessimistic — it just doesn\'t help. My theory is that you\'d rather be optimistic and wrong about the future than pessimistic and right. If you\'re pessimistic, you\'re going to be miserable. Might as well enjoy the journey.',
      'I don\'t ever give up. I\'d have to be dead or completely incapacitated.',
      'Eliminate what isn\'t necessary to solve the key problem.',
      'There must be things you\'re excited about, things you\'re glad to be alive for.',
    ],
  },
  {
    label: 'Part 4: On Behalf of Humanity',
    quotes: [
      'I care about reality. Perception be damned.',
      'Work on things that you find interesting, fulfilling, and that contribute some good to the rest of society.',
      'The final thing I would encourage you to do is to take risks. Especially before you have kids or other obligations.',
      'If you don\'t push for radical breakthroughs, you\'re not going to get radical outcomes.',
      'If you want the future to be good, you must make it so. Take action to make it good, and it will be.',
    ],
  },
];

export default function BookOfElon() {
  return (
    <>
      <p className="section-label">The Book of Elon — Eric Jorgenson</p>
      {sections.map((section, si) => (
        <div key={si}>
          <p className="section-label" style={{ marginTop: si === 0 ? '8px' : '20px' }}>{section.label}</p>
          <ul style={{ listStyle: 'disc', paddingLeft: '32px', marginTop: '8px' }}>
            {section.quotes.map((q, i) => (
              <li key={i} style={{ marginBottom: '4px', color: '#333' }}>"{q}"</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
