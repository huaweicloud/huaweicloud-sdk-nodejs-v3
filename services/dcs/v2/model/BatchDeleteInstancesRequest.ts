import { BatchDeleteBody } from './BatchDeleteBody';


export class BatchDeleteInstancesRequest {
    private 'all_failure'?: boolean;
    public body?: BatchDeleteBody;
    public constructor() { 
    }
    public withAllFailure(allFailure: boolean): BatchDeleteInstancesRequest {
        this['all_failure'] = allFailure;
        return this;
    }
    public set allFailure(allFailure: boolean  | undefined) {
        this['all_failure'] = allFailure;
    }
    public get allFailure(): boolean | undefined {
        return this['all_failure'];
    }
    public withBody(body: BatchDeleteBody): BatchDeleteInstancesRequest {
        this['body'] = body;
        return this;
    }
}