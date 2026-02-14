import React, { useState, useEffect, useRef } from 'react';
import { Heart, Music, Star, Sparkles, MapPin, MessageCircle, Camera, Calendar } from 'lucide-react';

const BASE = import.meta.env.BASE_URL;

const CONFIG = {
  // Hero Section
  mainTitle: "Five Years of Friendship",
  heroSubtitle: "From awkward hellos to irreplaceable friendship",
  
  // Spotify Playlist - Replace with your actual playlist URL
  spotifyPlaylistUrl: "https://open.spotify.com/embed/playlist/4YwDGltuEZJ0QdgnypmoMp?utm_source=generator",
  
  // Chapters configuration
  chapters: [
    {
      id: 1,
      title: "The Beginning",
      subtitle: "High School, 2019",
      mood: "Soft Nostalgia",
      story: "We met in the most unremarkable way possible – through a friend of a friend of a friend's acquaintance. We didn't share a single class, so it was definitely luck, or fate, that said 'Let me cook'. Little did I know that this random pairing would change everything.",
      quote: "\"Wait, you have discord?\"",
      insideJoke: "Remember when you forgot my name..? Never letting you live that down 😂",
      memories: [
        { text: "First conversation about games", icon: "🎮" },
        { text: "The original 'group at break'", icon: "👋" },
      ],
      photos: [
        { caption: "First art pic you sent me", url: `${BASE}images/firstArt.jfif` },
        { caption: "The group hangout (squint your eyes it's us)", url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400" }
      ]
    },
    {
      id: 2,
      title: "Plot Twist: We're Friends?",
      subtitle: "Junior Year Chaos",
      mood: "Warm Feelings",
      story: "Somehow between complaining about homework and a literal global crisis, we became actual friends. The kind who text random thoughts at 2am and understand each other's weird references. You made high school bearable, then actually almost fun.",
      quote: "\"Are you free? Wanna hop on the gc? (haha that rhymes)\"",
      insideJoke: "The drama we won't speak of 🤫. Rivaled The DSMP",
      memories: [
        { text: "Late night yapping sessions", icon: "🌙" },
        { text: "Creating our secret base ideas", icon: "🏠" },
        { text: "The never ending art pictures", icon: "🎨" }
      ],
      photos: [
        { caption: "'Dr House' in my house", url: `${BASE}images/weFriends1.jfif` },
        { caption: "Trixie!!", url: `${BASE}images/trixie.jfif` },
        { caption: "Us in another universe, on our schools fence", url: `${BASE}images/weFriends2.jfif` }
      ]
    },
    {
      id: 3,
      title: "Graduation Goodbyes",
      subtitle: "End of an Era, 2024",
      mood: "Bittersweet Nostalgia",
      story: "Senior year hit different. Between college applications and countdown calendars, we thought nothing would change. We took too many silly photos we'd probably seldom see again, stayed up too late, and tried to freeze time (still convinced I can, I'm just procrastinating). Spoiler: we changed, and that is okay.",
      quote: "\"No matter where we end up, I'll still spam 'LILY WAKE UP, I NEED ANSWERS' in the morning.\"",
      insideJoke: "A certain someone who shall not be named (but rhymes with 'Silly') and their obsession with a certain boy whose name rhymes with 'Sir Bastien' 🤡",
      memories: [
        { text: "Matric Dance shenanigans", icon: "👗" },
        { text: "Last day of school feels", icon: "😭" },
        { text: "Summer before we became adults", icon: "☀️" }
      ],
      photos: [
        { caption: "Sometime in matric", url: `${BASE}images/redBlazer.jfif` },
        { caption: "Last summer together", url: `${BASE}images/mdOption.jfif` }
      ]
    },
    {
      id: 4,
      title: "The University Arc",
      subtitle: "Different Campuses, Same Energy",
      mood: "Growing Together",
      story: "Different universities, different cities, but somehow we stayed us. FaceTime became our hangout spot, Instagram reels replaced daily convos, and I learned that real friendship doesn't need proximity. Distance just made our reunions that much better.",
      quote: "\"Just got to campus, already miss you!\"",
      insideJoke: "When are you gonna come to my university?!? (Answer: when are you gonna STOP going to your university? So far..) 😂",
      memories: [
        { text: "First semester video calls", icon: "📱" },
        { text: "Holiday break reunions", icon: "🎄" },
        { text: "Care packages as reels with lame reactions as the ribbon", icon: "📦" }
      ],
      photos: [
        { caption: "Before Uni", url: `${BASE}images/beforeUni.jfif` },
        { caption: "After Uni", url: `${BASE}images/afterUni.jfif` },
        { caption: "Meanwhile me: ", url: `${BASE}images/meUni.jfif` }
      ]
    },
    {
      id: 5,
      title: "The Current Us",
      subtitle: "Still Going Strong, 2026",
      mood: "Full Energy",
      story: "Here we are, still sharing ourselves, still texting at random hours, still laughing at jokes no one else gets, not entirely sure I do either. We've half-grown up but stayed the same where it matters. You're still the first person I want to tell good news, and the only one who truly gets the weird news.",
      quote: "\"Sadie S., Lily Rimmer? Would. \"",
      insideJoke: "Your running quote book stays entertaining, but also how do you remember all these quotes??",
      memories: [
        { text: "Current quote count: infinite", icon: "📚" },
        { text: "Inside jokes that still land", icon: "😂" },
        { text: "Plans we're actually making happen", icon: "✨" }
      ],
      photos: [
        { caption: "You in your head", url: `${BASE}images/currentYou.jfif` },
        { caption: "Me thinking about you in my head", url: `${BASE}images/CurrentMe.jfif` }
      ]
    },
    {
      id: 6,
      title: "The Future",
      subtitle: "Whatever Comes Next",
      mood: "Full Sing-Along Mode",
      story: "I don't know where we'll be in five more years, but I hope its you reinventing ways Ferrari bends the rules, and me on my fourth Phineas and Ferb crossover (saw a vid of LeBron doing that now I want to). More cities, more adventures, more inside jokes, hopefully, the same bond. Because some friendships aren't just for a season – they're for a lifetime.",
      quote: "\"Here's to the next chapter 💕\"",
      insideJoke: "Future us is definitely going to cringe at this website 🙈",
      memories: [
        { text: "Adventures waiting to happen", icon: "🌍" },
        { text: "Dreams we'll chase together", icon: "🌟" },
        { text: "More stories to tell", icon: "📖" }
      ],
      photos: [
        { caption: "To many more years", url: `${BASE}images/future.jfif` }
      ]
    }
  ],
  
  // Reasons Why section
  reasonsWhy: [
    "You laugh at my terrible jokes",
    "You send me your art, genuinely interested in my feedback",
    "It's easy to remember the small things",
    "You tell me when I'm being ridiculous (I never am, but I appreciate it)",
    "I can celebrate your wins like they're mine",
    "You make ordinary days very unordinary",
    "You get my references",
    "You've overcome",
    "You're genuinely yourself",
    "You make distance feel small",
    "You're my second favorite human",
    "You're simply irreplaceable"
  ],
  
chatMessages: [
  { sender: "them", text: "JOSH" },
  { sender: "them", text: "JOSH" },
  { sender: "them", text: "HOSH" },
  { sender: "them", text: "JOSH" },
  { sender: "me", text: "THE FEMALE" },
  { sender: "me", text: "THE FEMALE" },
  { sender: "me", text: "THE FEMALE" },
  { sender: "them", text: "Don't forget about 5 o clock stranger things" }
],
  
  // Final letter
  finalLetter: {
    title: "To you who's changed everything",
    content: `I'm not great at putting feelings into words, which is ironic considering I just built you an entire website. But here goes:

If an artist, an author, and a comedian adopted a baby, it would be our friendship. We've had plot twists, character development, and deadpool level meta moments and humour to cope with it. If just one detail of our one and a half month junior year had been different, we wouldn't know each other, but our stories aligned so perfectly that there was no way we'd be separated

There is a lot about you that I don't know, like your vulnerabilities, how every choice shaped you into what you are now, and I don't need to. I'm just glad that you've endured what you had no right coming back from, and no right living through in the first place, because when I give my speech on role models and people who kept me going, who I drew example from, I may not say it, but your name will come in mind.

As we approach that moment in coming years, I can't wait to be the audinece to your most epic victories, witness and consolement in your most crushing defeats, and the ping in your phone when you want nothing but to not be alone. One life is never long enough.

Here's to more years of friendship, more late-night talks, and more gratitude that I'm fortunate enough to get to know a fleshy mind as strong as steel.

Appreciation always,
Your friend who's definitely going to cringe at this later 💕 (please spare me)`
  },
  
  // Easter egg - Click on a specific word in the hero subtitle to reveal
  easterEggTriggerWord: "irreplaceable",
  easterEggContent: {
    title: "You found the secret! 🎉",
    message: "Since you're the kind of person who presses on random things (yes, I know you), here's a bonus paragraph: I hope that somewhere during this, I tugged on your heart strings just a little. I want you to feel what I do at those fleeting and magical moments when I'm with you. I would prefer you stopped pressing my buttons though. There are better things you could do with your hands.. 🌟"
  }
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function ValentinesStory() {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [activeMemory, setActiveMemory] = useState(null);
  const [showStarPopup, setShowStarPopup] = useState(null);
  
  const chapterRefs = useRef([]);
  const audioRef = useRef(null);

  // Scroll detection for chapters
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      chapterRefs.current.forEach((ref, index) => {
        if (ref && ref.offsetTop <= scrollPosition && ref.offsetTop + ref.offsetHeight > scrollPosition) {
          setCurrentChapter(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Confetti trigger on final section
  useEffect(() => {
    if (currentChapter === CONFIG.chapters.length - 1 && !showConfetti) {
      setTimeout(() => setShowConfetti(true), 500);
    }
  }, [currentChapter]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleEasterEgg = () => {
    setShowEasterEgg(true);
  };

  return (
    <div className="valentines-story" style={{ 
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      background: 'linear-gradient(180deg, #fff5f7 0%, #ffe8ec 50%, #ffd6dd 100%)',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Grain texture overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.03,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        zIndex: 1
      }} />

      {/* Floating hearts background */}
      <FloatingHearts />

      {/* Mute button - always visible */}
      <button
        onClick={handleMute}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          background: 'rgba(255, 255, 255, 0.9)',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      >
        <Music size={24} color={isMuted ? '#ccc' : '#ff6b9d'} />
      </button>

      {/* Timeline - Desktop only */}
      <Timeline chapters={CONFIG.chapters} currentChapter={currentChapter} />

      {/* Hero Section */}
      <Hero 
        config={CONFIG} 
        onPlay={handlePlayPause} 
        isPlaying={isPlaying}
        onEasterEgg={handleEasterEgg}
      />

      {/* Spotify Embed - Hidden but functional */}
      <div style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 1000, width: '300px', height: '380px' }}>
        <iframe
          ref={audioRef}
          src={CONFIG.spotifyPlaylistUrl + (isPlaying ? '&autoplay=1' : '')}
          width="300"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
      </div>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Chapters */}
      {CONFIG.chapters.map((chapter, index) => (
        <Chapter
          key={chapter.id}
          chapter={chapter}
          index={index}
          ref={el => chapterRefs.current[index] = el}
          isActive={currentChapter === index}
          onMemoryClick={setActiveMemory}
        />
      ))}

      {/* Constellation / Star Map */}
      <ConstellationSection onStarClick={setShowStarPopup} />

      {/* Chat Conversation */}
      <ChatSection messages={CONFIG.chatMessages} />

      {/* Dual Perspective */}
      <DualPerspective />

      {/* Reasons Why Grid */}
      <ReasonsWhySection reasons={CONFIG.reasonsWhy} />

      {/* Final Letter */}
      <FinalLetter letter={CONFIG.finalLetter} />

      {/* Easter Egg Modal */}
      {showEasterEgg && (
        <EasterEggModal 
          content={CONFIG.easterEggContent} 
          onClose={() => setShowEasterEgg(false)} 
        />
      )}

      {/* Memory Popup */}
      {activeMemory && (
        <MemoryPopup 
          memory={activeMemory} 
          onClose={() => setActiveMemory(null)} 
        />
      )}

      {/* Star Memory Popup */}
      {showStarPopup !== null && (
        <StarMemoryPopup 
          memory={showStarPopup} 
          onClose={() => setShowStarPopup(null)} 
        />
      )}

      {/* Confetti */}
      {showConfetti && <Confetti />}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Pacifico&family=Caveat:wght@400;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .valentines-story {
          position: relative;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        .chapter-enter {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .polaroid {
          background: white;
          padding: 12px;
          padding-bottom: 40px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          transform: rotate(-2deg);
          transition: all 0.3s ease;
        }
        
        .polaroid:hover {
          transform: rotate(0deg) scale(1.05);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }
        
        .polaroid:nth-child(even) {
          transform: rotate(2deg);
        }
        
        .polaroid:nth-child(even):hover {
          transform: rotate(0deg) scale(1.05);
        }
        
        @media (max-width: 768px) {
          .polaroid {
            transform: rotate(0deg) !important;
          }
        }
      `}</style>
    </div>
  );
}

// ============================================================================
// SUBCOMPONENTS
// ============================================================================

// Floating hearts background animation
function FloatingHearts() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
      {[...Array(15)].map((_, i) => (
        <Heart
          key={i}
          size={Math.random() * 20 + 10}
          color="#ffb3c6"
          fill="#ffb3c6"
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3 + 0.1,
            animation: `float ${Math.random() * 3 + 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
}

// Timeline component
function Timeline({ chapters, currentChapter }) {
  return (
    <div style={{
      position: 'fixed',
      right: '40px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 100,
      display: window.innerWidth > 768 ? 'flex' : 'none',
      flexDirection: 'column',
      gap: '20px'
    }}>
      {chapters.map((chapter, index) => (
        <div
          key={chapter.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            transition: 'all 0.3s ease'
          }}
        >
          <span style={{
            fontSize: '12px',
            color: currentChapter === index ? '#ff6b9d' : '#ccc',
            fontWeight: currentChapter === index ? '600' : '400',
            opacity: currentChapter === index ? 1 : 0.5,
            textAlign: 'right',
            minWidth: '120px',
            transition: 'all 0.3s ease'
          }}>
            {chapter.title}
          </span>
          <div style={{
            width: currentChapter === index ? '16px' : '10px',
            height: currentChapter === index ? '16px' : '10px',
            borderRadius: '50%',
            background: currentChapter === index ? '#ff6b9d' : '#ddd',
            transition: 'all 0.3s ease',
            boxShadow: currentChapter === index ? '0 0 12px rgba(255, 107, 157, 0.5)' : 'none'
          }} />
        </div>
      ))}
    </div>
  );
}

// Hero section
function Hero({ config, onPlay, isPlaying, onEasterEgg }) {
  const subtitleWords = config.heroSubtitle.split(' ');
  const easterEggWord = config.easterEggTriggerWord;
  
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      position: 'relative',
      zIndex: 2
    }}>
      <div style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h1 style={{
          fontFamily: "'Pacifico', cursive",
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          color: '#ff6b9d',
          marginBottom: '24px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
          animation: 'fadeInUp 1s ease-out'
        }}>
          {config.mainTitle}
        </h1>
        
        <p style={{
          fontFamily: "'Caveat', cursive",
          fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
          color: '#666',
          marginBottom: '48px',
          animation: 'fadeInUp 1s ease-out 0.2s backwards'
        }}>
          {subtitleWords.map((word, index) => (
            <span
              key={index}
              onClick={word.toLowerCase() === easterEggWord.toLowerCase() ? onEasterEgg : undefined}
              style={{
                cursor: word.toLowerCase() === easterEggWord.toLowerCase() ? 'pointer' : 'default',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (word.toLowerCase() === easterEggWord.toLowerCase()) {
                  e.target.style.color = '#ff6b9d';
                }
              }}
              onMouseLeave={(e) => {
                if (word.toLowerCase() === easterEggWord.toLowerCase()) {
                  e.target.style.color = '#666';
                }
              }}
            >
              {word}{' '}
            </span>
          ))}
        </p>

        <div style={{
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '20px 40px',
          borderRadius: '50px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '16px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          marginBottom: '40px',
          animation: 'fadeInUp 1s ease-out 0.4s backwards'
        }}>
          <Music size={20} color="#ff6b9d" />
          <span style={{ color: '#666', fontSize: '14px', fontWeight: '500' }}>
            Press play before you scroll ↓
          </span>
        </div>

        <button
          onClick={onPlay}
          style={{
            background: 'linear-gradient(135deg, #ff6b9d 0%, #ff8fab 100%)',
            border: 'none',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 12px 32px rgba(255, 107, 157, 0.4)',
            transition: 'all 0.3s ease',
            animation: 'fadeInUp 1s ease-out 0.6s backwards, pulse 2s ease-in-out infinite'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.boxShadow = '0 16px 40px rgba(255, 107, 157, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 12px 32px rgba(255, 107, 157, 0.4)';
          }}
        >
          {/* Vinyl record effect */}
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'conic-gradient(from 0deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(255,255,255,0.3) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: isPlaying ? 'spin 3s linear infinite' : 'none'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '0',
                height: '0',
                borderLeft: '12px solid #ff6b9d',
                borderTop: '8px solid transparent',
                borderBottom: '8px solid transparent',
                marginLeft: '3px'
              }} />
            </div>
          </div>
        </button>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

// Stats counter
function StatsCounter() {
  return (
    <section style={{
      padding: '80px 20px',
      textAlign: 'center',
      position: 'relative',
      zIndex: 2
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.6)',
        padding: '40px',
        borderRadius: '20px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{
          fontFamily: "'Caveat', cursive",
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          color: '#ff6b9d',
          marginBottom: '32px'
        }}>
          5 years, 47 inside jokes, 1 incredible friendship
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '24px'
        }}>
          {[
            { number: '5', label: 'Years' },
            { number: '∞', label: 'Inside Jokes' },
            { number: '1000+', label: 'Memories' },
            { number: '2', label: 'Universities' },
            { number: '1', label: 'Best Friend' }
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: '700',
                color: '#ff6b9d',
                fontFamily: "'Inter', sans-serif"
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '0.9rem',
                color: '#666',
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Chapter component
const Chapter = React.forwardRef(({ chapter, index, isActive, onMemoryClick }, ref) => {
  return (
    <section
      ref={ref}
      style={{
        minHeight: '100vh',
        padding: '100px 20px',
        position: 'relative',
        zIndex: 2,
        opacity: isActive ? 1 : 0.6,
        transition: 'opacity 0.5s ease'
      }}
      className={isActive ? 'chapter-enter' : ''}
    >
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {/* Chapter Header */}
        <div style={{ marginBottom: '60px', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(255, 107, 157, 0.1)',
            padding: '8px 20px',
            borderRadius: '20px',
            marginBottom: '16px'
          }}>
            <span style={{
              fontSize: '0.9rem',
              color: '#ff6b9d',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              {chapter.subtitle}
            </span>
          </div>
          
          <h2 style={{
            fontFamily: "'Pacifico', cursive",
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            color: '#ff6b9d',
            marginBottom: '16px'
          }}>
            {chapter.title}
          </h2>
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.8)',
            padding: '12px 24px',
            borderRadius: '30px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Sparkles size={16} color="#ff6b9d" />
            <span style={{ fontSize: '0.85rem', color: '#666', fontWeight: '500' }}>
              Now Playing: {chapter.mood}
            </span>
          </div>
        </div>

        {/* Photos */}
        <div style={{
          display: 'flex',
          gap: '32px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '60px'
        }}>
          {chapter.photos.map((photo, i) => (
            <div key={i} className="polaroid" style={{ maxWidth: '280px' }}>
              <img
                src={photo.url}
                alt={photo.caption}
                style={{
                  width: '100%',
                  height: '240px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <p style={{
                fontFamily: "'Caveat', cursive",
                fontSize: '1.1rem',
                color: '#666',
                marginTop: '12px',
                textAlign: 'center'
              }}>
                {photo.caption}
              </p>
            </div>
          ))}
        </div>

        {/* Story */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.8)',
          padding: '40px',
          borderRadius: '20px',
          marginBottom: '40px',
          backdropFilter: 'blur(10px)'
        }}>
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#444',
            marginBottom: '24px'
          }}>
            {chapter.story}
          </p>
          
          <div style={{
            borderLeft: '4px solid #ff6b9d',
            paddingLeft: '20px',
            marginBottom: '24px'
          }}>
            <p style={{
              fontFamily: "'Caveat', cursive",
              fontSize: '1.4rem',
              color: '#ff6b9d',
              fontStyle: 'italic'
            }}>
              {chapter.quote}
            </p>
          </div>
          
          <div
            onClick={() => onMemoryClick(chapter.insideJoke)}
            style={{
              background: '#fffbf0',
              border: '2px dashed #ffb366',
              padding: '16px 24px',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#fff4e6';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#fffbf0';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <span style={{ fontSize: '0.95rem', color: '#cc7a00' }}>
              💭 {chapter.insideJoke}
            </span>
          </div>
        </div>

        {/* Memory nodes */}
        <div style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {chapter.memories.map((memory, i) => (
            <div
              key={i}
              onClick={() => onMemoryClick(memory.text)}
              style={{
                background: 'white',
                padding: '12px 20px',
                borderRadius: '30px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-4px)';
                e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>{memory.icon}</span>
              <span style={{ fontSize: '0.9rem', color: '#666', fontWeight: '500' }}>
                {memory.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

// Constellation section
function ConstellationSection({ onStarClick }) {
  const memories = [
    { x: 20, y: 30, text: "First time we laughed until we cried" },
    { x: 40, y: 20, text: "That random 3am phone call" },
    { x: 60, y: 40, text: "When the love triangles became somehow less interesting" },
    { x: 35, y: 60, text: "Your Balito trips I attended in spirit" },
    { x: 70, y: 50, text: "Discord sing-alongs" },
    { x: 50, y: 70, text: "It's a bird, it's a plane, it's.. Klark Kent at MD, and a man in a collar?" },
    { x: 80, y: 35, text: "It's a bird, it's a plane, it's.. a friendship." }
  ];

  return (
    <section style={{
      minHeight: '100vh',
      padding: '100px 20px',
      background: 'linear-gradient(180deg, #2a1a4a 0%, #4a2a6a 100%)',
      position: 'relative',
      zIndex: 2
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: "'Pacifico', cursive",
          fontSize: 'clamp(2rem, 6vw, 3.5rem)',
          color: '#ffd700',
          marginBottom: '60px'
        }}>
          Our Constellation of Memories
        </h2>
        
        <div style={{
          position: 'relative',
          height: '500px',
          background: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '20px',
          overflow: 'hidden'
        }}>
          {/* Stars background */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '2px',
                height: '2px',
                background: 'white',
                borderRadius: '50%',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
                animation: `sparkle ${Math.random() * 3 + 2}s ease-in-out infinite`
              }}
            />
          ))}
          
          {/* Connecting lines */}
          <svg style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}>
            {memories.map((memory, i) => {
              if (i < memories.length - 1) {
                return (
                  <line
                    key={i}
                    x1={`${memory.x}%`}
                    y1={`${memory.y}%`}
                    x2={`${memories[i + 1].x}%`}
                    y2={`${memories[i + 1].y}%`}
                    stroke="rgba(255, 215, 0, 0.3)"
                    strokeWidth="2"
                  />
                );
              }
              return null;
            })}
          </svg>
          
          {/* Memory stars */}
          {memories.map((memory, i) => (
            <div
              key={i}
              onClick={() => onStarClick(memory.text)}
              style={{
                position: 'absolute',
                left: `${memory.x}%`,
                top: `${memory.y}%`,
                transform: 'translate(-50%, -50%)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translate(-50%, -50%) scale(1.3)'}
              onMouseLeave={(e) => e.target.style.transform = 'translate(-50%, -50%) scale(1)'}
            >
              <Star size={24} color="#ffd700" fill="#ffd700" />
            </div>
          ))}
        </div>
        
        <p style={{
          color: 'rgba(255, 255, 255, 0.7)',
          marginTop: '24px',
          fontSize: '0.9rem'
        }}>
          Click the stars to reveal hidden memories ✨
        </p>
      </div>
    </section>
  );
}

// Chat section
function ChatSection({ messages }) {
  return (
    <section style={{
      padding: '100px 20px',
      position: 'relative',
      zIndex: 2
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: "'Pacifico', cursive",
          fontSize: 'clamp(2rem, 6vw, 3rem)',
          color: '#ff6b9d',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          Conversations at 2am
        </h2>
        
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '24px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
        }}>
          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: msg.sender === 'me' ? 'flex-end' : 'flex-start',
                marginBottom: '12px'
              }}
            >
              <div style={{
                background: msg.sender === 'me' ? '#ff6b9d' : '#f0f0f0',
                color: msg.sender === 'me' ? 'white' : '#333',
                padding: '12px 16px',
                borderRadius: '18px',
                maxWidth: '70%',
                fontSize: '0.95rem',
                lineHeight: '1.4'
              }}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Dual perspective section
function DualPerspective() {
  return (
    <section style={{
      padding: '100px 20px',
      position: 'relative',
      zIndex: 2,
      background: 'rgba(255, 255, 255, 0.5)'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: "'Pacifico', cursive",
          fontSize: 'clamp(2rem, 6vw, 3rem)',
          color: '#ff6b9d',
          marginBottom: '60px',
          textAlign: 'center'
        }}>
          Two Perspectives, One Memory
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
          gap: '40px'
        }}>
          <div style={{
            background: 'white',
            padding: '32px',
            borderRadius: '20px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{
              fontFamily: "'Caveat', cursive",
              fontSize: '1.8rem',
              color: '#ff6b9d',
              marginBottom: '16px'
            }}>
              What I was thinking
            </h3>
            <p style={{
              fontSize: '1rem',
              lineHeight: '1.7',
              color: '#555'
            }}>
              "Should I text her? It's kind of late. But she's probably awake. Okay, I'm texting. Wait, is this weird? No, we're friends. Friends text at random times. Sending it now. Oh no, did I sound too excited about that thing? Whatever, send."
            </p>
          </div>
          
          <div style={{
            background: 'white',
            padding: '32px',
            borderRadius: '20px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{
              fontFamily: "'Caveat', cursive",
              fontSize: '1.8rem',
              color: '#ff6b9d',
              marginBottom: '16px'
            }}>
              What I said
            </h3>
            <p style={{
              fontSize: '1rem',
              lineHeight: '1.7',
              color: '#555'
            }}>
              "I had a great time today, type stuff."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reasons why section
function ReasonsWhySection({ reasons }) {
  return (
    <section style={{
      padding: '100px 20px',
      position: 'relative',
      zIndex: 2
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: "'Pacifico', cursive",
          fontSize: 'clamp(2rem, 6vw, 3.5rem)',
          color: '#ff6b9d',
          marginBottom: '60px',
          textAlign: 'center'
        }}>
          Reasons Why You're Important
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px'
        }}>
          {reasons.map((reason, i) => (
            <div
              key={i}
              style={{
                background: 'white',
                padding: '24px',
                borderRadius: '16px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px)';
                e.target.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                opacity: 0.2
              }}>
                <Heart size={40} color="#ff6b9d" fill="#ff6b9d" />
              </div>
              <p style={{
                fontSize: '1.05rem',
                color: '#444',
                lineHeight: '1.6',
                position: 'relative',
                zIndex: 1
              }}>
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Final letter section
function FinalLetter({ letter }) {
  const [showSecret, setShowSecret] = useState(false);
  
  return (
    <section style={{
      minHeight: '100vh',
      padding: '100px 20px',
      position: 'relative',
      zIndex: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%'
      }}>
        <div style={{
          background: 'white',
          padding: '60px 40px',
          borderRadius: '20px',
          boxShadow: '0 12px 48px rgba(0,0,0,0.15)',
          position: 'relative',
          border: '1px solid #f0f0f0'
        }}>
          {/* Tape decoration */}
          <div style={{
            position: 'absolute',
            top: '-12px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100px',
            height: '24px',
            background: 'rgba(255, 215, 0, 0.3)',
            border: '1px solid rgba(255, 215, 0, 0.5)',
            borderRadius: '4px'
          }} />
          
          <h2 style={{
            fontFamily: "'Pacifico', cursive",
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#ff6b9d',
            marginBottom: '32px',
            textAlign: 'center'
          }}>
            {letter.title}
          </h2>
          
          <div style={{
            fontSize: '1.1rem',
            lineHeight: '1.9',
            color: '#444',
            whiteSpace: 'pre-line',
            fontFamily: "'Inter', sans-serif"
          }}>
            {letter.content}
          </div>
          
          <div style={{
            marginTop: '48px',
            textAlign: 'center'
          }}>
            <button
              onClick={() => setShowSecret(!showSecret)}
              style={{
                background: 'linear-gradient(135deg, #ff6b9d 0%, #ff8fab 100%)',
                color: 'white',
                border: 'none',
                padding: '16px 32px',
                borderRadius: '30px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(255, 107, 157, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 12px 28px rgba(255, 107, 157, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 20px rgba(255, 107, 157, 0.3)';
              }}
            >
              {showSecret ? 'Hide the Secret' : 'Reveal a Secret'}
            </button>
            
            {showSecret && (
              <div style={{
                marginTop: '32px',
                padding: '24px',
                background: '#fffbf0',
                borderRadius: '16px',
                border: '2px dashed #ffb366',
                animation: 'fadeInUp 0.5s ease-out'
              }}>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  color: '#666',
                  fontStyle: 'italic'
                }}>
                  P.S. I made this entire website from scratch because I wanted you to have something as unique as you are. Also, I may have spent way too much time picking the perfect gradient colors. Worth it. 💕
                </p>
              </div>
            )}
          </div>
          
          <div style={{
            marginTop: '48px',
            textAlign: 'center',
            paddingTop: '32px',
            borderTop: '1px dashed #ddd'
          }}>
            <p style={{
              fontFamily: "'Caveat', cursive",
              fontSize: '1.8rem',
              color: '#ff6b9d'
            }}>
              Here's to the next chapter 💕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Easter egg modal
function EasterEggModal({ content, onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        padding: '20px',
        animation: 'fadeInUp 0.3s ease-out'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'white',
          padding: '48px',
          borderRadius: '24px',
          maxWidth: '600px',
          width: '100%',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          position: 'relative',
          animation: 'pulse 0.5s ease-out'
        }}
      >
        <div style={{
          position: 'absolute',
          top: '-30px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '4rem'
        }}>
          🎉
        </div>
        
        <h3 style={{
          fontFamily: "'Pacifico', cursive",
          fontSize: '2rem',
          color: '#ff6b9d',
          marginBottom: '24px',
          textAlign: 'center',
          marginTop: '20px'
        }}>
          {content.title}
        </h3>
        
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: '#555',
          textAlign: 'center',
          marginBottom: '32px'
        }}>
          {content.message}
        </p>
        
        <button
          onClick={onClose}
          style={{
            width: '100%',
            background: 'linear-gradient(135deg, #ff6b9d 0%, #ff8fab 100%)',
            color: 'white',
            border: 'none',
            padding: '16px',
            borderRadius: '12px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.opacity = '0.9'}
          onMouseLeave={(e) => e.target.style.opacity = '1'}
        >
          Close
        </button>
      </div>
    </div>
  );
}

// Memory popup
function MemoryPopup({ memory, onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '20px',
        animation: 'fadeInUp 0.2s ease-out'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'white',
          padding: '32px',
          borderRadius: '20px',
          maxWidth: '500px',
          width: '100%',
          boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
          animation: 'fadeInUp 0.3s ease-out'
        }}
      >
        <h4 style={{
          fontFamily: "'Caveat', cursive",
          fontSize: '1.8rem',
          color: '#ff6b9d',
          marginBottom: '16px'
        }}>
          Remember when...
        </h4>
        
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.7',
          color: '#555',
          marginBottom: '24px'
        }}>
          {memory}
        </p>
        
        <button
          onClick={onClose}
          style={{
            background: '#f0f0f0',
            color: '#666',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '0.9rem',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => e.target.style.background = '#e0e0e0'}
          onMouseLeave={(e) => e.target.style.background = '#f0f0f0'}
        >
          Close
        </button>
      </div>
    </div>
  );
}

// Star memory popup
function StarMemoryPopup({ memory, onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '20px',
        animation: 'fadeInUp 0.2s ease-out'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(135deg, #2a1a4a 0%, #4a2a6a 100%)',
          padding: '40px',
          borderRadius: '20px',
          maxWidth: '500px',
          width: '100%',
          boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
          animation: 'fadeInUp 0.3s ease-out',
          border: '2px solid rgba(255, 215, 0, 0.3)'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <Star size={48} color="#ffd700" fill="#ffd700" />
        </div>
        
        <p style={{
          fontSize: '1.2rem',
          lineHeight: '1.7',
          color: 'white',
          textAlign: 'center',
          marginBottom: '24px'
        }}>
          {memory}
        </p>
        
        <button
          onClick={onClose}
          style={{
            width: '100%',
            background: 'rgba(255, 215, 0, 0.2)',
            color: '#ffd700',
            border: '2px solid #ffd700',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '0.9rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 215, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255, 215, 0, 0.2)';
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

// Confetti component
function Confetti() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 9998
    }}>
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '10px',
            height: '10px',
            background: ['#ff6b9d', '#ffd700', '#ff8fab', '#ffb3c6'][i % 4],
            left: `${Math.random() * 100}%`,
            top: '-20px',
            animation: `fall ${Math.random() * 3 + 2}s linear infinite`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: 0.8,
            borderRadius: i % 3 === 0 ? '50%' : '0'
          }}
        />
      ))}
      
      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}