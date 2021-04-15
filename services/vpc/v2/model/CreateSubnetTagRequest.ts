import { CreateSubnetTagRequestBody } from './CreateSubnetTagRequestBody';


export class CreateSubnetTagRequest {
    private 'subnet_id': string | undefined;
    public body?: CreateSubnetTagRequestBody;
    public constructor(subnetId?: any) { 
        this['subnet_id'] = subnetId;
    }
    public withSubnetId(subnetId: string): CreateSubnetTagRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withBody(body: CreateSubnetTagRequestBody): CreateSubnetTagRequest {
        this['body'] = body;
        return this;
    }
}