import { BatchDeleteVpcTagsRequestBody } from './BatchDeleteVpcTagsRequestBody';


export class BatchDeleteVpcTagsRequest {
    private 'vpc_id'?: string;
    public body?: BatchDeleteVpcTagsRequestBody;
    public constructor(vpcId?: string) { 
        this['vpc_id'] = vpcId;
    }
    public withVpcId(vpcId: string): BatchDeleteVpcTagsRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withBody(body: BatchDeleteVpcTagsRequestBody): BatchDeleteVpcTagsRequest {
        this['body'] = body;
        return this;
    }
}