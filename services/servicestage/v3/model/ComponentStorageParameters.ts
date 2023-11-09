

export class ComponentStorageParameters {
    public path?: string;
    public name?: string;
    private 'default_mode'?: number;
    public medium?: string;
    public constructor() { 
    }
    public withPath(path: string): ComponentStorageParameters {
        this['path'] = path;
        return this;
    }
    public withName(name: string): ComponentStorageParameters {
        this['name'] = name;
        return this;
    }
    public withDefaultMode(defaultMode: number): ComponentStorageParameters {
        this['default_mode'] = defaultMode;
        return this;
    }
    public set defaultMode(defaultMode: number  | undefined) {
        this['default_mode'] = defaultMode;
    }
    public get defaultMode(): number | undefined {
        return this['default_mode'];
    }
    public withMedium(medium: string): ComponentStorageParameters {
        this['medium'] = medium;
        return this;
    }
}