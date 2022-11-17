import { BatchDeleteBody } from './BatchDeleteBody';


export class BatchDeleteInstancesRequest {
    private 'all_failure'?: boolean | undefined;
    public body?: BatchDeleteBody;
    public constructor() { 
    }
    public withAllFailure(allFailure: boolean): BatchDeleteInstancesRequest {
        this['all_failure'] = allFailure;
        return this;
    }
    public set allFailure(allFailure: boolean | undefined) {
        this['all_failure'] = allFailure;
    }
    public get allFailure() {
        return this['all_failure'];
    }
    public withBody(body: BatchDeleteBody): BatchDeleteInstancesRequest {
        this['body'] = body;
        return this;
    }
}