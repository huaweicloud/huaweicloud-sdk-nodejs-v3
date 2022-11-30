import { RemoveVpcExtendCidrRequestBody } from './RemoveVpcExtendCidrRequestBody';


export class RemoveVpcExtendCidrRequest {
    private 'vpc_id': string | undefined;
    public body?: RemoveVpcExtendCidrRequestBody;
    public constructor(vpcId?: any) { 
        this['vpc_id'] = vpcId;
    }
    public withVpcId(vpcId: string): RemoveVpcExtendCidrRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withBody(body: RemoveVpcExtendCidrRequestBody): RemoveVpcExtendCidrRequest {
        this['body'] = body;
        return this;
    }
}