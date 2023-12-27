

export class PathMap {
    public path?: string;
    public constructor(path?: string) { 
        this['path'] = path;
    }
    public withPath(path: string): PathMap {
        this['path'] = path;
        return this;
    }
}