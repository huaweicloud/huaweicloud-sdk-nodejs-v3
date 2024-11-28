

export class ExcludePath {
    private 'path_name'?: string;
    private 'exclude_path_name'?: Array<string>;
    public constructor() { 
    }
    public withPathName(pathName: string): ExcludePath {
        this['path_name'] = pathName;
        return this;
    }
    public set pathName(pathName: string  | undefined) {
        this['path_name'] = pathName;
    }
    public get pathName(): string | undefined {
        return this['path_name'];
    }
    public withExcludePathName(excludePathName: Array<string>): ExcludePath {
        this['exclude_path_name'] = excludePathName;
        return this;
    }
    public set excludePathName(excludePathName: Array<string>  | undefined) {
        this['exclude_path_name'] = excludePathName;
    }
    public get excludePathName(): Array<string> | undefined {
        return this['exclude_path_name'];
    }
}