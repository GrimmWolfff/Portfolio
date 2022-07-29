export default function api(req, res) {
    res.status(200).json([
        {
            id: 1,
            title: 'Tic Tac Toe',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/1200px-Tic_tac_toe.svg.png',
            link: 'https://codepen.io/GrimmWolf/full/LwEoYa',
            desc: 'Check out my Web / Desktop Tic Tac Toe game using ReactJs and Babel.',
            skills: ['React', 'Electron']
        },
        {
            id: 2,
            title: 'Voicebot / Chatbot',
            img: 'https://img.freepik.com/free-vector/chat-bot-concept-illustration_114360-5522.jpg?w=2000',
            link: 'www.google.com',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            skills: ['Vanilla.js']
        },
        {
            id: 3,
            title: 'Facebook Clone',
            img: 'https://cdni.iconscout.com/illustration/free/thumb/facebook-advertisement-tutorial-4277121-3561283.png',
            link: 'https://github.com/GrimmWolfff/facebook-clone',
            desc: 'Facebook clone built with @next-auth/mongodb-adapter + tailwindcss + recoil',
            skills: ['Next.js', 'Next-Auth', 'Tailwind', 'MongoDB', 'Recoil']
        },
        {
            id: 4,
            title: 'Todo App',
            img: 'https://img.freepik.com/premium-vector/list-illustration-man-holds-pencil-notes-completed-tasks-time_173706-136.jpg',
            link: 'www.google.com',
            desc: 'Mern stack todo app with authentication. Besides CRUD operations and Bearer authorization it includes like/deslike functionality',
            skills: ['Mongoose', 'React', 'Express', 'Node', 'Rest api']
        },
        {
            id: 5,
            title: 'Crypto Price Tracker',
            img: 'https://img.freepik.com/free-vector/flat-design-cryptocurrency-concept_23-2149166905.jpg?w=2000',
            link: 'https://github.com/GrimmWolfff/Crypto-Market',
            desc: 'Crypto price tracker with search filter functionality',
            skills: ['Next.js', 'React-Query', 'Tailwind']
        },
        {
            id: 6,
            title: 'Memory game',
            img: 'https://img.freepik.com/free-vector/hand-drawn-case-study-illustration_23-2149082710.jpg?w=2000',
            link: 'https://github.com/GrimmWolfff/Word-Memory-Exam',
            desc: 'Game that helps to memorize English words. User is got a random word and they are supposed to translate it.',
            skills: ['HTML', 'CSS', 'JavaScript']
        },
        {
            id: 7,
            title: 'LinkedIn Clone',
            img: 'https://st2.depositphotos.com/3382541/8313/v/950/depositphotos_83132370-stock-illustration-concept-of-linked-in-logo.jpg',
            link: 'https://github.com/GrimmWolfff/LinkedIn-Clone',
            desc: 'LinkedIn clone, Next.js / NextAuth / mongodb / Tailwind',
            skills: ['Next.js', 'Next-Auth', 'Tailwind', 'MongoDB', 'Recoil']
        },
        {
            id: 8,
            title: 'Instagram Clone',
            img: 'https://niceillustrations.com/wp-content/uploads/2020/11/IG-Stories-color-800px.png',
            link: 'https://github.com/GrimmWolfff/Instagram-Clone',
            desc: 'Instagram clone using Next.js + NextAuth + Tailwind+ Recoil + MongoDB',
            skills: ['Next.js', 'Firebase', 'Firestore', 'Tailwind']
        },
        {
            id: 9,
            title: 'Random robo app',
            img: 'https://img.freepik.com/premium-vector/retro-robot-vintage-toys-robot-vector-illustration-flat-style-design-vintage-tin-robot-toy_475148-189.jpg?w=2000',
            link: 'https://github.com/GrimmWolfff/Auth0',
            desc: 'Simple app with authentication and react-query',
            skills: ['React', 'React-Query', 'Framer-motion', 'auth0']
        },
    ])
}