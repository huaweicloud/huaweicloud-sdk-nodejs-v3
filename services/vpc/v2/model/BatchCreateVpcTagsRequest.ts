import { BatchCreateVpcTagsRequestBody } from './BatchCreateVpcTagsRequestBody';


export class BatchCreateVpcTagsRequest {
    private 'vpc_id'?: string;
    public body?: BatchCreateVpcTagsRequestBody;
    public constructor(vpcId?: string) { 
        this['vpc_id'] = vpcId;
    }
    public withVpcId(vpcId: string): BatchCreateVpcTagsRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withBody(body: BatchCreateVpcTagsRequestBody): BatchCreateVpcTagsRequest {
        this['body'] = body;
        return this;
    }
}