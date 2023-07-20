import { UpdateEndpointPolicyRequestBody } from './UpdateEndpointPolicyRequestBody';


export class UpdateEndpointPolicyRequest {
    private 'vpc_endpoint_id'?: string;
    private 'Content-Type'?: string;
    public body?: UpdateEndpointPolicyRequestBody;
    public constructor(vpcEndpointId?: string) { 
        this['vpc_endpoint_id'] = vpcEndpointId;
    }
    public withVpcEndpointId(vpcEndpointId: string): UpdateEndpointPolicyRequest {
        this['vpc_endpoint_id'] = vpcEndpointId;
        return this;
    }
    public set vpcEndpointId(vpcEndpointId: string  | undefined) {
        this['vpc_endpoint_id'] = vpcEndpointId;
    }
    public get vpcEndpointId(): string | undefined {
        return this['vpc_endpoint_id'];
    }
    public withContentType(contentType: string): UpdateEndpointPolicyRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: UpdateEndpointPolicyRequestBody): UpdateEndpointPolicyRequest {
        this['body'] = body;
        return this;
    }
}