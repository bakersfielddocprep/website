import { locationGroups } from "../lib/locations";

export function LocationLists({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`location-groups ${compact ? "location-groups-compact" : ""}`}>
      {locationGroups.map((group) => (
        <div className="location-group" key={group.title}>
          <h3>{group.title}</h3>
          {!compact && group.note && <p>{group.note}</p>}
          <ol className="county-list">
            {group.counties.map((county, index) => (
              <li key={county}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {county}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}
