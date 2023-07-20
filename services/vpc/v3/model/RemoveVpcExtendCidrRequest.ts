import { RemoveVpcExtendCidrRequestBody } from './RemoveVpcExtendCidrRequestBody';


export class RemoveVpcExtendCidrRequest {
    private 'vpc_id'?: string;
    public body?: RemoveVpcExtendCidrRequestBody;
    public constructor(vpcId?: string) { 
        this['vpc_id'] = vpcId;
    }
    public withVpcId(vpcId: string): RemoveVpcExtendCidrRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withBody(body: RemoveVpcExtendCidrRequestBody): RemoveVpcExtendCidrRequest {
        this['body'] = body;
        return this;
    }
}