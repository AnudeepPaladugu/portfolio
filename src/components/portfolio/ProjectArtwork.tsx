import { getProjectArtwork, type ArtworkKey } from "./projectArtwork";
export function ProjectArtwork({ project }: { project: ArtworkKey; number: string }) {
  const artwork = getProjectArtwork(project);
  return <div className="project-artwork" data-project-artwork={project}>
    <img className="project-image" src={artwork.url} alt={artwork.alt} loading="lazy" decoding="async" width={artwork.width} height={artwork.height} />
  </div>;
}
