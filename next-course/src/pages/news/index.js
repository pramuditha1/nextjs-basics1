import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/newxt-js-is-a-great-platofrm">
            Next JS is a great platofrm
          </Link>
        </li>
        <li>
          <Link href="/news/economy-news">
            Ecomony
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
