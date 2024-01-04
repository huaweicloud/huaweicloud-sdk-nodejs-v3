import { CreateTrainingJobReq } from './CreateTrainingJobReq';


export class CreateTrainingAdvanceJobRequest {
    private 'X-App-UserId'?: string;
    public body?: CreateTrainingJobReq;
    public constructor() { 
    }
    public withXAppUserId(xAppUserId: string): CreateTrainingAdvanceJobRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withBody(body: CreateTrainingJobReq): CreateTrainingAdvanceJobRequest {
        this['body'] = body;
        return this;
    }
}