import { NarrateJS } from "narratejs";

const Page = (props: any) => {
  return (
    <NarrateJS options={{ backendProvider: "jsonplaceholder" }} {...props} />
  );
};

export default Page;
