

export class ChangeFilePathWhiteDetailRequestInfo {
    private 'customized_path'?: Array<string>;
    public constructor() { 
    }
    public withCustomizedPath(customizedPath: Array<string>): ChangeFilePathWhiteDetailRequestInfo {
        this['customized_path'] = customizedPath;
        return this;
    }
    public set customizedPath(customizedPath: Array<string>  | undefined) {
        this['customized_path'] = customizedPath;
    }
    public get customizedPath(): Array<string> | undefined {
        return this['customized_path'];
    }
}