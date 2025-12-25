

export class CreateMavenRepoResult {
    public release?: string;
    public snapshot?: string;
    public constructor() { 
    }
    public withRelease(release: string): CreateMavenRepoResult {
        this['release'] = release;
        return this;
    }
    public withSnapshot(snapshot: string): CreateMavenRepoResult {
        this['snapshot'] = snapshot;
        return this;
    }
}