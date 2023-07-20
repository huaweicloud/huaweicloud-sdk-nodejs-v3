import { BatchDeleteScalingConfigOption } from './BatchDeleteScalingConfigOption';


export class BatchDeleteScalingConfigsRequest {
    public body?: BatchDeleteScalingConfigOption;
    public constructor() { 
    }
    public withBody(body: BatchDeleteScalingConfigOption): BatchDeleteScalingConfigsRequest {
        this['body'] = body;
        return this;
    }
}