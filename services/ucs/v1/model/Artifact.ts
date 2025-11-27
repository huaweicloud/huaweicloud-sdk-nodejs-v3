

export class Artifact {
    public path?: string;
    public url?: string;
    public revision?: string;
    public digest?: string;
    public lastUpdateTime?: string;
    public size?: number;
    public constructor() { 
    }
    public withPath(path: string): Artifact {
        this['path'] = path;
        return this;
    }
    public withUrl(url: string): Artifact {
        this['url'] = url;
        return this;
    }
    public withRevision(revision: string): Artifact {
        this['revision'] = revision;
        return this;
    }
    public withDigest(digest: string): Artifact {
        this['digest'] = digest;
        return this;
    }
    public withLastUpdateTime(lastUpdateTime: string): Artifact {
        this['lastUpdateTime'] = lastUpdateTime;
        return this;
    }
    public withSize(size: number): Artifact {
        this['size'] = size;
        return this;
    }
}