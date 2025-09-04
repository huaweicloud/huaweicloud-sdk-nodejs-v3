import { UploadCacheFileRequestBody } from './UploadCacheFileRequestBody';


export class UploadCacheFileRequest {
    private 'project_id'?: string;
    public override?: boolean;
    private 'parent_type'?: string;
    private 'parent_uri'?: string;
    public body?: UploadCacheFileRequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): UploadCacheFileRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withOverride(override: boolean): UploadCacheFileRequest {
        this['override'] = override;
        return this;
    }
    public withParentType(parentType: string): UploadCacheFileRequest {
        this['parent_type'] = parentType;
        return this;
    }
    public set parentType(parentType: string  | undefined) {
        this['parent_type'] = parentType;
    }
    public get parentType(): string | undefined {
        return this['parent_type'];
    }
    public withParentUri(parentUri: string): UploadCacheFileRequest {
        this['parent_uri'] = parentUri;
        return this;
    }
    public set parentUri(parentUri: string  | undefined) {
        this['parent_uri'] = parentUri;
    }
    public get parentUri(): string | undefined {
        return this['parent_uri'];
    }
    public withBody(body: UploadCacheFileRequestBody): UploadCacheFileRequest {
        this['body'] = body;
        return this;
    }
}