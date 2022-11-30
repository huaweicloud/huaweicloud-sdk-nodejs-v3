import { BatchCreateVpcTagsRequestBody } from './BatchCreateVpcTagsRequestBody';


export class BatchCreateVpcTagsRequest {
    private 'vpc_id': string | undefined;
    public body?: BatchCreateVpcTagsRequestBody;
    public constructor(vpcId?: any) { 
        this['vpc_id'] = vpcId;
    }
    public withVpcId(vpcId: string): BatchCreateVpcTagsRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withBody(body: BatchCreateVpcTagsRequestBody): BatchCreateVpcTagsRequest {
        this['body'] = body;
        return this;
    }
}