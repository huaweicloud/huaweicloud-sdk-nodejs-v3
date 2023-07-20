

export class UploadGroupPackageReq {
    public paths?: Array<string>;
    public group?: string;
    public constructor(paths?: Array<string>, group?: string) { 
        this['paths'] = paths;
        this['group'] = group;
    }
    public withPaths(paths: Array<string>): UploadGroupPackageReq {
        this['paths'] = paths;
        return this;
    }
    public withGroup(group: string): UploadGroupPackageReq {
        this['group'] = group;
        return this;
    }
}