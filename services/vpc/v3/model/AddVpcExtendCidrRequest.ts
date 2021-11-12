import { AddVpcExtendCidrRequestBody } from './AddVpcExtendCidrRequestBody';


export class AddVpcExtendCidrRequest {
    private 'vpc_id': string | undefined;
    public body?: AddVpcExtendCidrRequestBody;
    public constructor(vpcId?: any) { 
        this['vpc_id'] = vpcId;
    }
    public withVpcId(vpcId: string): AddVpcExtendCidrRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withBody(body: AddVpcExtendCidrRequestBody): AddVpcExtendCidrRequest {
        this['body'] = body;
        return this;
    }
}