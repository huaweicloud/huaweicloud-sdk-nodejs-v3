import { PageResourceListParam } from './PageResourceListParam';


export class ListResourceUnderNodeRequest {
    private 'rf_resource_type'?: string;
    public type?: string;
    public body?: PageResourceListParam;
    public constructor(rfResourceType?: string, type?: string) { 
        this['rf_resource_type'] = rfResourceType;
        this['type'] = type;
    }
    public withRfResourceType(rfResourceType: string): ListResourceUnderNodeRequest {
        this['rf_resource_type'] = rfResourceType;
        return this;
    }
    public set rfResourceType(rfResourceType: string  | undefined) {
        this['rf_resource_type'] = rfResourceType;
    }
    public get rfResourceType(): string | undefined {
        return this['rf_resource_type'];
    }
    public withType(type: string): ListResourceUnderNodeRequest {
        this['type'] = type;
        return this;
    }
    public withBody(body: PageResourceListParam): ListResourceUnderNodeRequest {
        this['body'] = body;
        return this;
    }
}