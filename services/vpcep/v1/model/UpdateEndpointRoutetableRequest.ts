import { UpdateEndpointRoutetableRequestBody } from './UpdateEndpointRoutetableRequestBody';


export class UpdateEndpointRoutetableRequest {
    private 'vpc_endpoint_id'?: string;
    private 'Content-Type'?: string;
    public body?: UpdateEndpointRoutetableRequestBody;
    public constructor(vpcEndpointId?: string) { 
        this['vpc_endpoint_id'] = vpcEndpointId;
    }
    public withVpcEndpointId(vpcEndpointId: string): UpdateEndpointRoutetableRequest {
        this['vpc_endpoint_id'] = vpcEndpointId;
        return this;
    }
    public set vpcEndpointId(vpcEndpointId: string  | undefined) {
        this['vpc_endpoint_id'] = vpcEndpointId;
    }
    public get vpcEndpointId(): string | undefined {
        return this['vpc_endpoint_id'];
    }
    public withContentType(contentType: string): UpdateEndpointRoutetableRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: UpdateEndpointRoutetableRequestBody): UpdateEndpointRoutetableRequest {
        this['body'] = body;
        return this;
    }
}