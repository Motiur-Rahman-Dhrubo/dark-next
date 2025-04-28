import { redirect } from "next/navigation";

const homePage = () => {
  redirect("/home/web");
};

export default homePage;