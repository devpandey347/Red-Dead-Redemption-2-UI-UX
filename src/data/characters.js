export const characters = [
  {
    id: 'arthur',
    name: 'Arthur Morgan',
    role: 'Lead Enforcer & Right-Hand Man',
    bio: 'Arthur Morgan is a cold, brooding outlaw who has spent his entire life running with Dutch van der Linde. Raised by the gang since he was a boy, he is fiercely loyal to Dutch and views the gang as his only true family. However, as the world modernizes and the gang\'s situation becomes increasingly desperate, Arthur finds himself questioning the very ideals he has dedicated his life to protecting.',
    quote: 'We\'re thieves in a world that don\'t want us no more.',
    relationship: 'The primary protagonist. He is the heart and soul of the gang.',
    facts: [
      'Joined the gang around age 14',
      'Keeps a detailed journal of his travels',
      'An exceptional marksman and brawler'
    ],
    imagePath: import.meta.env.BASE_URL + 'characters-images/aurthor_morgan.jpg', // Using the provided typo filename
    isFeatured: true,
  },
  {
    id: 'dutch',
    name: 'Dutch van der Linde',
    role: 'Gang Leader',
    bio: 'Charismatic, idealistic, and deeply flawed, Dutch van der Linde is the philosophical leader of the gang. He fancies himself a Robin Hood figure, fighting against a corrupt system that is rapidly encroaching on the untamed frontier. His silver tongue inspires unyielding loyalty, but as the pressure mounts, his methods become increasingly erratic and dangerous.',
    quote: 'I have a plan. You just need to have a little faith.',
    relationship: 'Father figure and mentor to Arthur, though their bond is severely tested.',
    facts: [
      'Avid reader of John Evelyn',
      'Despises the Pinkerton Detective Agency',
      'Prefers dual-wielding Schofield revolvers'
    ],
    imagePath: import.meta.env.BASE_URL + 'characters-images/dutch.jpg',
  },
  {
    id: 'john',
    name: 'John Marston',
    role: 'Senior Gunman',
    bio: 'A former street orphan saved by Dutch at the age of twelve, John Marston has always had to fight to survive. Shrewd and capable, John and Arthur share a complicated brotherly dynamic filled with rivalry and mutual respect. Recently returned after abandoning the gang for a year, John is trying to find his footing as a father and a husband while navigating the outlaw life.',
    quote: 'Some trees flourish, others die. Some cattle grow strong, others are taken by wolves. Some men are born rich enough and dumb enough to enjoy their lives. Ain\'t nothing fair.',
    relationship: 'Views Arthur as an older brother; often the target of Arthur\'s frustration but ultimately his greatest hope.',
    facts: [
      'Cannot swim',
      'Married to Abigail Roberts',
      'Iconic facial scars from a wolf attack'
    ],
    imagePath: import.meta.env.BASE_URL + 'characters-images/john_marston.jpg',
  },
  {
    id: 'sadie',
    name: 'Sadie Adler',
    role: 'Bounty Hunter / Gunwoman',
    bio: 'A widow seeking vengeance after her husband was murdered by the O\'Driscoll boys, Sadie transforms from a grieving victim into one of the most formidable and ruthless members of the Van der Linde gang. She proves herself to be fearless, fiercely independent, and completely unwilling to let anyone dictate her fate.',
    quote: 'Nobody\'s taking nothing from me ever again.',
    relationship: 'Develops a deep mutual respect with Arthur, often riding together on the most dangerous missions.',
    facts: [
      'Exceptional rider and gunslinger',
      'Harbors a burning hatred for the O\'Driscolls',
      'Takes charge when the gang leadership falters'
    ],
    imagePath: import.meta.env.BASE_URL + 'characters-images/saddie_adler.jpg',
  },
  {
    id: 'charles',
    name: 'Charles Smith',
    role: 'Hunter & Tracker',
    bio: 'Born to an African American father and a Native American mother, Charles has never truly fit in anywhere. A relatively recent addition to the gang, he is quiet, reserved, but incredibly deadly. He possesses a strong moral compass and a deep connection to nature, often grounding the gang\'s more chaotic elements.',
    quote: 'The amount of hell we\'ve raised, we\'re owed some back.',
    relationship: 'One of Arthur\'s most trusted confidants; they share a profound respect for each other\'s capabilities.',
    facts: [
      'Master tracker and survivalist',
      'Prefers bows and throwing knives',
      'Often acts as the gang\'s conscience'
    ],
    imagePath: import.meta.env.BASE_URL + 'characters-images/charles.jpg',
  },
  {
    id: 'javier',
    name: 'Javier Escuella',
    role: 'Gunman',
    bio: 'A notorious bounty hunter and Mexican revolutionary, Javier fled to America to escape a death sentence. He is fiercely loyal to Dutch\'s ideals and brings a touch of cynical romance and musical talent to the gang. Despite his charming demeanor, Javier is a hardened killer who will not hesitate to eliminate threats to his adopted family.',
    quote: 'If we have to fight, we fight. If we have to run, we\'ll run. If we must die, we\'ll die. But we\'ll stay free.',
    relationship: 'Friendly with Arthur, though their differing views on blind loyalty eventually drive a wedge between them.',
    facts: [
      'Skilled guitarist',
      'Fluent in Spanish and English',
      'Expert with throwing knives'
    ],
    imagePath: import.meta.env.BASE_URL + 'characters-images/javier escuella.jpg', // Kept original filename
  },
  {
    id: 'micah',
    name: 'Micah Bell',
    role: 'Gunman',
    bio: 'A seasoned criminal and hitman, Micah Bell is wild, unpredictable, and entirely self-serving. He lives for the chaos of the outlaw lifestyle and has quickly wormed his way into Dutch\'s inner circle by appealing to his worst instincts. Micah is a survivor above all else, possessing no moral boundaries.',
    quote: 'I believe there\'s winners and losers... and nothing else besides.',
    relationship: 'Arthur\'s primary rival within the gang; they share a deep, mutual animosity.',
    facts: [
      'Exceptional quick-draw ability',
      'Always wears his iconic white hat and leather coat',
      'Will do absolutely anything to survive'
    ],
    imagePath: import.meta.env.BASE_URL + 'characters-images/micah_bell.jpg',
  }
];
