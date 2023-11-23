

export class ComponentMount {
    public path?: string;
    public subPath?: string;
    public readOnly?: boolean;
    public constructor(path?: string, readOnly?: boolean) { 
        this['path'] = path;
        this['readOnly'] = readOnly;
    }
    public withPath(path: string): ComponentMount {
        this['path'] = path;
        return this;
    }
    public withSubPath(subPath: string): ComponentMount {
        this['subPath'] = subPath;
        return this;
    }
    public withReadOnly(readOnly: boolean): ComponentMount {
        this['readOnly'] = readOnly;
        return this;
    }
}