import { BatchDeleteRequest } from './BatchDeleteRequest';


export class BatchDeleteAiAppsRequest {
    private 'keep_policy'?: boolean;
    public body?: BatchDeleteRequest;
    public constructor(keepPolicy?: boolean) { 
        this['keep_policy'] = keepPolicy;
    }
    public withKeepPolicy(keepPolicy: boolean): BatchDeleteAiAppsRequest {
        this['keep_policy'] = keepPolicy;
        return this;
    }
    public set keepPolicy(keepPolicy: boolean  | undefined) {
        this['keep_policy'] = keepPolicy;
    }
    public get keepPolicy(): boolean | undefined {
        return this['keep_policy'];
    }
    public withBody(body: BatchDeleteRequest): BatchDeleteAiAppsRequest {
        this['body'] = body;
        return this;
    }
}