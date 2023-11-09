

export class StorageParameter {
    public path?: string;
    public name?: string;
    public defaultMode?: number;
    public medium?: string;
    public constructor() { 
    }
    public withPath(path: string): StorageParameter {
        this['path'] = path;
        return this;
    }
    public withName(name: string): StorageParameter {
        this['name'] = name;
        return this;
    }
    public withDefaultMode(defaultMode: number): StorageParameter {
        this['defaultMode'] = defaultMode;
        return this;
    }
    public withMedium(medium: string): StorageParameter {
        this['medium'] = medium;
        return this;
    }
}