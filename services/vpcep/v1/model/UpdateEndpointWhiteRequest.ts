import { UpdateEndpointWhiteRequestBody } from './UpdateEndpointWhiteRequestBody';


export class UpdateEndpointWhiteRequest {
    private 'vpc_endpoint_id': string | undefined;
    private 'Content-Type': string | undefined;
    public body?: UpdateEndpointWhiteRequestBody;
    public constructor(vpcEndpointId?: any, contentType?: any) { 
        this['vpc_endpoint_id'] = vpcEndpointId;
        this['Content-Type'] = contentType;
    }
    public withVpcEndpointId(vpcEndpointId: string): UpdateEndpointWhiteRequest {
        this['vpc_endpoint_id'] = vpcEndpointId;
        return this;
    }
    public set vpcEndpointId(vpcEndpointId: string | undefined) {
        this['vpc_endpoint_id'] = vpcEndpointId;
    }
    public get vpcEndpointId() {
        return this['vpc_endpoint_id'];
    }
    public withContentType(contentType: string): UpdateEndpointWhiteRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: UpdateEndpointWhiteRequestBody): UpdateEndpointWhiteRequest {
        this['body'] = body;
        return this;
    }
}