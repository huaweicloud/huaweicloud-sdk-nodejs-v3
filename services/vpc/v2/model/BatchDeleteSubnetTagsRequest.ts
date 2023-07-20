import { BatchDeleteSubnetTagsRequestBody } from './BatchDeleteSubnetTagsRequestBody';


export class BatchDeleteSubnetTagsRequest {
    private 'subnet_id'?: string;
    public body?: BatchDeleteSubnetTagsRequestBody;
    public constructor(subnetId?: string) { 
        this['subnet_id'] = subnetId;
    }
    public withSubnetId(subnetId: string): BatchDeleteSubnetTagsRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withBody(body: BatchDeleteSubnetTagsRequestBody): BatchDeleteSubnetTagsRequest {
        this['body'] = body;
        return this;
    }
}