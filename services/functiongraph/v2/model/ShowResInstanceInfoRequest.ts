import { ListEnterpriseResourceRequestBody } from './ListEnterpriseResourceRequestBody';


export class ShowResInstanceInfoRequest {
    private 'resource_type'?: string;
    public action?: string;
    public body?: ListEnterpriseResourceRequestBody;
    public constructor(resourceType?: string, action?: string) { 
        this['resource_type'] = resourceType;
        this['action'] = action;
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
    public withBody(body: ListEnterpriseResourceRequestBody): ShowResInstanceInfoRequest {
        this['body'] = body;
        return this;
    }
}