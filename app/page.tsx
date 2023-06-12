
export default function Home() {
  return (
    <main className="space-y-12 px-5 py-20">
      <div className="grid gap-2 sm:grid-cols-3">
        <Category
          name="Snowboarding"
          image="/img1.jpg"
          intro="The worlds best snowboarding gear"
        />
        <Category
          name="Mountain Biking"
          image="/img2.jpg"
          intro="The worlds best snowboarding gear"
        />
        <Category
          name="Hiking"
          image="/img3.jpg"
          intro="The worlds best snowboarding gear"
        />
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <Category
          name="Camping"
          image="/img1.jpg"
          intro="The worlds best snowboarding gear"
        />
        <Category
          name="Skying"
          image="/img3.jpg"
          intro="The worlds best snowboarding gear"
        />
      </div>

      <Category
        name="Most Wanted"
        image="/img4.jpg"
        intro="The worlds best snowboarding gear"
      />
    </main>
  );
}

type CategoryComponent = {
  name: string;
  image?: string;
  intro?: string;
};

const Category = ({ name, image, intro }: CategoryComponent) => {
  return (
    <div className="relative flex aspect-square overflow-clip rounded-md bg-[#191919] text-white @container/category ">
      <img
        src={image}
        className="absolute h-full w-full object-cover @[700px]:h-full @[700px]:w-[70%] @[700px]:object-cover"
      />
      <div className="@[700px]:justify-left relative z-10 flex w-full flex-col items-center justify-center p-5 @container/text-wrapper @[350px]:items-center @[350px]:justify-end @[700px]:left-[70%] @[700px]:w-[30%] @[700px]:justify-center">
        <p className="text-5xl @[350px]/text-wrapper:text-3xl"
        {name}</p>
        <p className="mt-2 hidden @[350px]/category:block @[700px]/category:mt-5">
          {intro}
        </p>
      </div>
    </div>
  );
};
