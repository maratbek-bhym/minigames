import { createElement } from '../../utils/dom';

interface LeaderboardEntry {
  rank: number;
  player: string;
  avatarInitials: string;
  gamesPlayed: number;
  totalScore: string;
  streak: number;
  favoriteGame: string;
}

const PLAYERS: LeaderboardEntry[] = [
  {
    rank: 1,
    player: 'Alex_Pro99',
    avatarInitials: 'AP',
    gamesPlayed: 142,
    totalScore: '94,250',
    streak: 12,
    favoriteGame: 'Heartopia',
  },
  {
    rank: 2,
    player: 'CozyGamer_x',
    avatarInitials: 'CG',
    gamesPlayed: 118,
    totalScore: '81,400',
    streak: 8,
    favoriteGame: 'Cat Mail Co.',
  },
  {
    rank: 3,
    player: 'MatchMaster',
    avatarInitials: 'MM',
    gamesPlayed: 98,
    totalScore: '72,110',
    streak: 5,
    favoriteGame: 'Tiny Glade',
  },
  {
    rank: 4,
    player: 'BubblePop',
    avatarInitials: 'BP',
    gamesPlayed: 87,
    totalScore: '65,900',
    streak: 3,
    favoriteGame: 'Whisper of the House',
  },
  {
    rank: 5,
    player: 'SudokuGod',
    avatarInitials: 'SG',
    gamesPlayed: 74,
    totalScore: '59,320',
    streak: 2,
    favoriteGame: 'Cat Chess',
  },
];

function createRow(entry: LeaderboardEntry): HTMLElement {
  return createElement('tr', { className: 'leaderboard__row' }, [
    createElement('td', { className: 'leaderboard__cell leaderboard__cell--rank' }, [
      createElement('span', {
        className: `leaderboard__rank${entry.rank === 1 ? ' leaderboard__rank--first' : ''}`,
        text: `#${entry.rank}`,
      }),
    ]),
    createElement('td', { className: 'leaderboard__cell leaderboard__cell--player' }, [
      createElement('span', {
        className: `leaderboard__avatar leaderboard__avatar--${entry.rank}`,
        text: entry.avatarInitials,
      }),
      createElement('span', { className: 'leaderboard__player-name', text: entry.player }),
    ]),
    createElement('td', { className: 'leaderboard__cell', text: String(entry.gamesPlayed) }),
    createElement('td', { className: 'leaderboard__cell', text: entry.totalScore }),
    createElement('td', { className: 'leaderboard__cell leaderboard__cell--streak' }, [
      createElement('span', {
        className: 'leaderboard__streak',
        attributes: { 'aria-hidden': 'true' },
        text: '\uD83D\uDD25',
      }),
      createElement('span', { text: `${entry.streak} days` }),
    ]),
    createElement('td', { className: 'leaderboard__cell leaderboard__cell--favorite' }, [
      createElement('span', { className: 'leaderboard__badge', text: entry.favoriteGame }),
    ]),
  ]);
}

function createHeaderCell(label: string): HTMLElement {
  return createElement('th', { text: label, attributes: { scope: 'col' } });
}

export function createLeaderboard(): HTMLElement {
  const rows = PLAYERS.map(createRow);

  const table = createElement('table', { className: 'leaderboard__table' }, [
    createElement('caption', { className: 'sr-only', text: 'Top players this week leaderboard' }),
    createElement('thead', {}, [
      createElement('tr', {}, [
        createHeaderCell('Rank'),
        createHeaderCell('Player'),
        createHeaderCell('Games Played'),
        createHeaderCell('Total Score'),
        createHeaderCell('Streak'),
        createHeaderCell('Favorite Game'),
      ]),
    ]),
    createElement('tbody', {}, rows),
  ]);

  return createElement('section', { className: 'leaderboard' }, [
    createElement('div', { className: 'leaderboard__header' }, [
      createElement('div', { className: 'leaderboard__accent' }),
      createElement('h2', {
        className: 'leaderboard__section-title',
        text: 'Top Players This Week',
      }),
    ]),
    createElement('div', { className: 'leaderboard__table-wrapper' }, [table]),
  ]);
}
