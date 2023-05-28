const film1 = {
  id: 9185128,
  title: 'Спасение Рядового Райана',
  localization: 'foreign',
  achievements: [achievementId1, achievementId2],
  images: [
    {imageId: 1, url: 'image-1.png', difficulty: 'easy'},
    {imageId: 2, url: 'image-2.png', difficulty: 'hard'}
  ]
};

const film2 = {
  id: 9185128,
  title: 'Дневной Дозор',
  localization: 'russian',
  images: [
    {imageId: 1, url: 'image-3.png', difficulty: 'easy'},
    {imageId: 2, url: 'image-4.png', difficulty: 'easy'}
  ]
};

/*--- При создании игры, в базе создаётся
сид игры выбранной категории.: ---*/

const seedGame1 = {
  gameId: 2112412,
  type: 'solo',
  rounds: null,
  createdAt: '02.02.2022Z0:33',
  status: 'playing',
  seed: [
    {
      round: 1,
      shuffle: [film1, film2, film1, film2],
      correctAnswer: film1
    },
    {
      round: 2,
      shuffle: [film2, film2, film1, film2],
      correctAnswer: film2
    }
  ],
  results: [
    {round: 1, answer: film1, isCorrect: false},
    {round: 2, answer: film2, isCorrect: true}
  ]
};

const seedGame2 = {
  id: 2112412,
  type: 'solo',
  rounds: 2,
  createdAt: '02.02.2022Z0:33',
  status: 'finished',
  seed: [
    {
      round: 1,
      shuffle: [film1, film2, film1, film2],
      correctAnswer: film1
    },
    {
      round: 2,
      shuffle: [film2, film2, film1, film2],
      correctAnswer: film2
    }
  ],
  results: [
    {round: 1, answer: film1, isCorrect: false},
    {round: 2, answer: film2, isCorrect: true}
  ]
};

const achievementId1 = {
  id: 2106291,
  title: 'Отгадал 10 фильмов режиссёра Квентина Тарантино'
}

const user = {
  userId: 857250,
  name: 'Pepega Pepegovich',
  description: 'Описание моего профиля',
  avatar: 'avatar.jpg',
  achievements: [achievementId1, achievementId2],
  ratings: {
    solo: {score: 1600},
    duel: {score: 4500}
  }
};


// Нужна таблица многие ко многим отдельно для ачивок
// и отдельно для уже полученных ачивок у юзера

