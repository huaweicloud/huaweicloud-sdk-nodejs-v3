

export class FsDirReq {
    public path?: string;
    public constructor(path?: string) { 
        this['path'] = path;
    }
    public withPath(path: string): FsDirReq {
        this['path'] = path;
        return this;
    }
}