import { useRouter } from "next/router";

const SomethingImportant = () => {

  const router = useRouter();
  const newsId = router.query.newsId;

  console.log("newsid: ", newsId);

  return (
    <div>details</div>
  );
};

export default SomethingImportant;
