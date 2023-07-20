import { TmsTagEntity } from './TmsTagEntity';


export class UploadPackageGroupReq {
    public paths?: Array<string>;
    public kind?: string;
    public group?: string;
    private 'is_async'?: boolean;
    public tags?: Array<TmsTagEntity>;
    public constructor(paths?: Array<string>, kind?: string, group?: string) { 
        this['paths'] = paths;
        this['kind'] = kind;
        this['group'] = group;
    }
    public withPaths(paths: Array<string>): UploadPackageGroupReq {
        this['paths'] = paths;
        return this;
    }
    public withKind(kind: string): UploadPackageGroupReq {
        this['kind'] = kind;
        return this;
    }
    public withGroup(group: string): UploadPackageGroupReq {
        this['group'] = group;
        return this;
    }
    public withIsAsync(isAsync: boolean): UploadPackageGroupReq {
        this['is_async'] = isAsync;
        return this;
    }
    public set isAsync(isAsync: boolean  | undefined) {
        this['is_async'] = isAsync;
    }
    public get isAsync(): boolean | undefined {
        return this['is_async'];
    }
    public withTags(tags: Array<TmsTagEntity>): UploadPackageGroupReq {
        this['tags'] = tags;
        return this;
    }
}