import { NarrateJS } from "narratejs";

const Page = (props: any) => {
  return (
    <NarrateJS
      options={{
        backendProvider: "jsonplaceholder",
        adminSlug: "admin",
        test: true,
      }}
      {...props}
    />
  );
};

export default Page;
