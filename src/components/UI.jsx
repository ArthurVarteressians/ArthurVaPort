import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { projects } from "./Projects";

const pictures = [
  "image7",
  "image8",
  "image1",
  "image2",
  "image3",
  "image4",
  "image5",
  "image6",
];

export const pageAtom = atom(0);

export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
    backProject: projects.find((p) =>
      p.image.includes(pictures[0])
    ),
  },
];

for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i],
    back: pictures[i + 1],
    frontProject: projects.find((p) =>
      p.image.includes(pictures[i])
    ),
    backProject: projects.find((p) =>
      p.image.includes(pictures[i + 1])
    ),
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
  frontProject: projects.find((p) =>
    p.image.includes(pictures[pictures.length - 1])
  ),
});

/* ---------------- INFO BOX ---------------- */

const InfoBox = ({ project }) => {
  if (!project) return null;

  return (
    <div className="bg-white/90 p-3 rounded-lg shadow-lg text-black backdrop-blur-sm border border-white/20 max-w-xs text-center">
      <h2 className="text-xs md:text-sm font-bold uppercase mb-1">
        {project.title}
      </h2>
      <p className="text-[10px] md:text-xs mb-2 line-clamp-3">
        {project.description}
      </p>
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] md:text-xs underline font-medium hover:text-blue-600"
        >
          Visit Project
        </a>
      )}
    </div>
  );
};

/* ---------------- UI ---------------- */

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const audio = new Audio("/audios/page.mp3");
    audio.play();
  }, [page]);

  const showInfo = page > 0 && page < pages.length;
  const leftProject = showInfo ? pages[page - 1]?.backProject : null;
  const rightProject = showInfo ? pages[page]?.frontProject : null;
  const isSameProject =
    leftProject && rightProject && leftProject.url === rightProject.url;

  return (
    <div className="relative pointer-events-auto select-none">
      {/* DESKTOP INFO (ABOVE CONTROLS) */}
      <div className="hidden md:block">
        {showInfo && leftProject && (
          <div
            className={`absolute bottom-full mb-3
              ${
                isSameProject
                  ? "left-1/2 -translate-x-1/2"
                  : "right-1/2 mr-2"
              }`}
          >
            <InfoBox project={leftProject} />
          </div>
        )}

        {showInfo && rightProject && !isSameProject && (
          <div className="absolute bottom-full mb-3 left-1/2 ml-2">
            <InfoBox project={rightProject} />
          </div>
        )}
      </div>

      {/* CONTROLS */}
      <div className="flex flex-wrap items-center justify-center gap-2 px-4 py-3 bg-black/50 backdrop-blur-md rounded-full border border-white/10 shadow-2xl max-w-[90vw]">
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => setPage(index)}
            className={`px-3 py-1 rounded-full text-xs md:text-sm uppercase shrink-0 border transition-all
              ${
                page === index
                  ? "bg-white text-black"
                  : "bg-black/60 text-white hover:border-white"
              }`}
          >
            {index === 0 ? "START" : `PAGE ${index}`}
          </button>
        ))}

        <button
          onClick={() => setPage(pages.length)}
          className={`px-3 py-1 rounded-full text-xs md:text-sm uppercase shrink-0 border transition-all
            ${
              page === pages.length
                ? "bg-white text-black"
                : "bg-black/60 text-white hover:border-white"
            }`}
        >
          END
        </button>
      </div>

      <div className="md:hidden mt-3 flex justify-center">
        {showInfo && (
          <InfoBox project={leftProject || rightProject} />
        )}
      </div>
    </div>
  );
};
