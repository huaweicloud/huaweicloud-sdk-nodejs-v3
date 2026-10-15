

export class LandingZoneVersionDetail {
    public version?: string;
    private 'release_date'?: string;
    private 'release_notes'?: string;
    public constructor() { 
    }
    public withVersion(version: string): LandingZoneVersionDetail {
        this['version'] = version;
        return this;
    }
    public withReleaseDate(releaseDate: string): LandingZoneVersionDetail {
        this['release_date'] = releaseDate;
        return this;
    }
    public set releaseDate(releaseDate: string  | undefined) {
        this['release_date'] = releaseDate;
    }
    public get releaseDate(): string | undefined {
        return this['release_date'];
    }
    public withReleaseNotes(releaseNotes: string): LandingZoneVersionDetail {
        this['release_notes'] = releaseNotes;
        return this;
    }
    public set releaseNotes(releaseNotes: string  | undefined) {
        this['release_notes'] = releaseNotes;
    }
    public get releaseNotes(): string | undefined {
        return this['release_notes'];
    }
}