

export class VersionList {
    private 'release_version'?: string;
    private 'release_note'?: string;
    private 'update_time'?: number;
    public constructor() { 
    }
    public withReleaseVersion(releaseVersion: string): VersionList {
        this['release_version'] = releaseVersion;
        return this;
    }
    public set releaseVersion(releaseVersion: string  | undefined) {
        this['release_version'] = releaseVersion;
    }
    public get releaseVersion(): string | undefined {
        return this['release_version'];
    }
    public withReleaseNote(releaseNote: string): VersionList {
        this['release_note'] = releaseNote;
        return this;
    }
    public set releaseNote(releaseNote: string  | undefined) {
        this['release_note'] = releaseNote;
    }
    public get releaseNote(): string | undefined {
        return this['release_note'];
    }
    public withUpdateTime(updateTime: number): VersionList {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}