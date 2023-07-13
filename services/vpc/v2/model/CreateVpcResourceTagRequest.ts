import { CreateVpcResourceTagRequestBody } from './CreateVpcResourceTagRequestBody';


export class CreateVpcResourceTagRequest {
    private 'vpc_id': string | undefined;
    public body?: CreateVpcResourceTagRequestBody;
    public constructor(vpcId?: any) { 
        this['vpc_id'] = vpcId;
    }
    public withVpcId(vpcId: string): CreateVpcResourceTagRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withBody(body: CreateVpcResourceTagRequestBody): CreateVpcResourceTagRequest {
        this['body'] = body;
        return this;
    }
}