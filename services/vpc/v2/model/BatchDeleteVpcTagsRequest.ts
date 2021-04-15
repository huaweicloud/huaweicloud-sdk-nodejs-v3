import { BatchDeleteVpcTagsRequestBody } from './BatchDeleteVpcTagsRequestBody';


export class BatchDeleteVpcTagsRequest {
    private 'vpc_id': string | undefined;
    public body?: BatchDeleteVpcTagsRequestBody;
    public constructor(vpcId?: any) { 
        this['vpc_id'] = vpcId;
    }
    public withVpcId(vpcId: string): BatchDeleteVpcTagsRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withBody(body: BatchDeleteVpcTagsRequestBody): BatchDeleteVpcTagsRequest {
        this['body'] = body;
        return this;
    }
}