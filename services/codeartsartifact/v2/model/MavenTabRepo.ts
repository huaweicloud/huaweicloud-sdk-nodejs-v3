

export class MavenTabRepo {
    public release?: string;
    public snapshot?: string;
    public constructor() { 
    }
    public withRelease(release: string): MavenTabRepo {
        this['release'] = release;
        return this;
    }
    public withSnapshot(snapshot: string): MavenTabRepo {
        this['snapshot'] = snapshot;
        return this;
    }
}