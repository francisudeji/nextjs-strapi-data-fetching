# Introduction to Data Fetching With Next.js and Strapi CMS

## Technologies:

- [Next.js](https://nextjs.org/)
- [Strapi CMS](https://strapi.io/)
- [Tailwind CSS](https://tailwindcss.com)

## Getting Started

### Backend

- `cd` into the backend folder and install all dependencies

```bash
npm install
# or
yarn install
```

Open [http://localhost:1337/admin](http://localhost:3000) with your browser to login(Username and password are both `francisudeji`).

### Frontend

First, create a `.env.development` file at the root of the `frontend` folder with the link to your strapi API or rename the `.env.example` to `.env.development`

Secondly, install all dependencies:

```bash
npm install
# or
yarn install
```

Lastly, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
