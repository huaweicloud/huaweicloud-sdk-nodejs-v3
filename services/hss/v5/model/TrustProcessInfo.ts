

export class TrustProcessInfo {
    public path?: string;
    public hash?: string;
    public constructor() { 
    }
    public withPath(path: string): TrustProcessInfo {
        this['path'] = path;
        return this;
    }
    public withHash(hash: string): TrustProcessInfo {
        this['hash'] = hash;
        return this;
    }
}