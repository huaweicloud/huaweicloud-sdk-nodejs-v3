

export class PathRule {
    public path?: string;
    public constructor() { 
    }
    public withPath(path: string): PathRule {
        this['path'] = path;
        return this;
    }
}