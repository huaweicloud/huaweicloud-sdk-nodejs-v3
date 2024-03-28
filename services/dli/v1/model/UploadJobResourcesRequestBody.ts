import { Tag } from './Tag';


export class UploadJobResourcesRequestBody {
    public paths?: Array<string>;
    public kind?: string;
    public group?: string;
    private 'is_async'?: boolean;
    public tags?: Array<Tag>;
    public constructor(paths?: Array<string>, kind?: string, group?: string) { 
        this['paths'] = paths;
        this['kind'] = kind;
        this['group'] = group;
    }
    public withPaths(paths: Array<string>): UploadJobResourcesRequestBody {
        this['paths'] = paths;
        return this;
    }
    public withKind(kind: string): UploadJobResourcesRequestBody {
        this['kind'] = kind;
        return this;
    }
    public withGroup(group: string): UploadJobResourcesRequestBody {
        this['group'] = group;
        return this;
    }
    public withIsAsync(isAsync: boolean): UploadJobResourcesRequestBody {
        this['is_async'] = isAsync;
        return this;
    }
    public set isAsync(isAsync: boolean  | undefined) {
        this['is_async'] = isAsync;
    }
    public get isAsync(): boolean | undefined {
        return this['is_async'];
    }
    public withTags(tags: Array<Tag>): UploadJobResourcesRequestBody {
        this['tags'] = tags;
        return this;
    }
}