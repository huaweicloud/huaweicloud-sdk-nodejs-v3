import { UpdateEndpointPolicyRequestBody } from './UpdateEndpointPolicyRequestBody';


export class UpdateEndpointPolicyRequest {
    private 'vpc_endpoint_id': string | undefined;
    private 'Content-Type'?: string | undefined;
    public body?: UpdateEndpointPolicyRequestBody;
    public constructor(vpcEndpointId?: any) { 
        this['vpc_endpoint_id'] = vpcEndpointId;
    }
    public withVpcEndpointId(vpcEndpointId: string): UpdateEndpointPolicyRequest {
        this['vpc_endpoint_id'] = vpcEndpointId;
        return this;
    }
    public set vpcEndpointId(vpcEndpointId: string | undefined) {
        this['vpc_endpoint_id'] = vpcEndpointId;
    }
    public get vpcEndpointId() {
        return this['vpc_endpoint_id'];
    }
    public withContentType(contentType: string): UpdateEndpointPolicyRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: UpdateEndpointPolicyRequestBody): UpdateEndpointPolicyRequest {
        this['body'] = body;
        return this;
    }
}