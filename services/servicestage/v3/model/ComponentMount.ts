

export class ComponentMount {
    public path?: string;
    private 'sub_path'?: string;
    private 'read_only'?: boolean;
    public constructor(path?: string, subPath?: string, readOnly?: boolean) { 
        this['path'] = path;
        this['sub_path'] = subPath;
        this['read_only'] = readOnly;
    }
    public withPath(path: string): ComponentMount {
        this['path'] = path;
        return this;
    }
    public withSubPath(subPath: string): ComponentMount {
        this['sub_path'] = subPath;
        return this;
    }
    public set subPath(subPath: string  | undefined) {
        this['sub_path'] = subPath;
    }
    public get subPath(): string | undefined {
        return this['sub_path'];
    }
    public withReadOnly(readOnly: boolean): ComponentMount {
        this['read_only'] = readOnly;
        return this;
    }
    public set readOnly(readOnly: boolean  | undefined) {
        this['read_only'] = readOnly;
    }
    public get readOnly(): boolean | undefined {
        return this['read_only'];
    }
}