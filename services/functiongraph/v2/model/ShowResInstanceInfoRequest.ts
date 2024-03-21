import { ListEnterpriseResourceRequestBody } from './ListEnterpriseResourceRequestBody';


export class ShowResInstanceInfoRequest {
    private 'resource_type'?: string;
    public action?: string;
    private 'Content-Type'?: string;
    public body?: ListEnterpriseResourceRequestBody;
    public constructor(resourceType?: string, action?: string, contentType?: string) { 
        this['resource_type'] = resourceType;
        this['action'] = action;
        this['Content-Type'] = contentType;
    }
    public withResourceType(resourceType: string): ShowResInstanceInfoRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withAction(action: string): ShowResInstanceInfoRequest {
        this['action'] = action;
        return this;
    }
    public withContentType(contentType: string): ShowResInstanceInfoRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: ListEnterpriseResourceRequestBody): ShowResInstanceInfoRequest {
        this['body'] = body;
        return this;
    }
}