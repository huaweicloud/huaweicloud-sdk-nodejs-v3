import { BatchCreateSubnetTagsRequestBody } from './BatchCreateSubnetTagsRequestBody';


export class BatchCreateSubnetTagsRequest {
    private 'subnet_id': string | undefined;
    public body?: BatchCreateSubnetTagsRequestBody;
    public constructor(subnetId?: any) { 
        this['subnet_id'] = subnetId;
    }
    public withSubnetId(subnetId: string): BatchCreateSubnetTagsRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withBody(body: BatchCreateSubnetTagsRequestBody): BatchCreateSubnetTagsRequest {
        this['body'] = body;
        return this;
    }
}