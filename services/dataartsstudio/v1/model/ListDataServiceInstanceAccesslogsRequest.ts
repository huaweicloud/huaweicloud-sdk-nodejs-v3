

export class ListDataServiceInstanceAccesslogsRequest {
    public workspace?: string;
    private 'Content-Type'?: string;
    private 'instance_id'?: string;
    private 'is_api'?: boolean;
    public constructor(workspace?: string, instanceId?: string) { 
        this['workspace'] = workspace;
        this['instance_id'] = instanceId;
    }
    public withWorkspace(workspace: string): ListDataServiceInstanceAccesslogsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withContentType(contentType: string): ListDataServiceInstanceAccesslogsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withInstanceId(instanceId: string): ListDataServiceInstanceAccesslogsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withIsApi(isApi: boolean): ListDataServiceInstanceAccesslogsRequest {
        this['is_api'] = isApi;
        return this;
    }
    public set isApi(isApi: boolean  | undefined) {
        this['is_api'] = isApi;
    }
    public get isApi(): boolean | undefined {
        return this['is_api'];
    }
}