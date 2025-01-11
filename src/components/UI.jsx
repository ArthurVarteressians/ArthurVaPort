import { atom, useAtom } from "jotai";
import { useEffect } from "react";

const pictures = ["image1", "image2", "image3", "image4", "image5", "image6"];

export const pageAtom = atom(0);

export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];

for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const audio = new Audio("/audios/page.mp3");
    audio.play();
  }, [page]);

  return (
    <main className="pointer-events-auto select-none flex justify-center">
      <div className="overflow-auto flex items-center gap-4 max-w-full p-2">
        {[...pages].map((_, index) => (
          <button
            key={index}
            className={`border-transparent hover:border-white transition-all duration-300 px-2 py-1 rounded-full text-sm md:text-lg uppercase shrink-0 border ${
              index === page
                ? "bg-white/90 text-black"
                : "bg-black/50 text-white"
            }`}
            onClick={() => setPage(index)}
          >
            {index === 0 ? "Cover" : `Page ${index}`}
          </button>
        ))}
        <button
          className={`border-transparent hover:border-white transition-all duration-300 px-2 py-1 rounded-full text-sm md:text-lg uppercase shrink-0 border ${
            page === pages.length
              ? "bg-white/90 text-black"
              : "bg-black/50 text-white"
          }`}
          onClick={() => setPage(pages.length)}
        >
          Back Cover
        </button>
      </div>
    </main>
  );
};

