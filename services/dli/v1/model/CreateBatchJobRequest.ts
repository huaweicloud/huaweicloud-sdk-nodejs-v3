import { BatchJobInfo } from './BatchJobInfo';


export class CreateBatchJobRequest {
    private 'USER-ID'?: string;
    public body?: BatchJobInfo;
    public constructor() { 
    }
    public withUserId(userId: string): CreateBatchJobRequest {
        this['USER-ID'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['USER-ID'] = userId;
    }
    public get userId(): string | undefined {
        return this['USER-ID'];
    }
    public withBody(body: BatchJobInfo): CreateBatchJobRequest {
        this['body'] = body;
        return this;
    }
}