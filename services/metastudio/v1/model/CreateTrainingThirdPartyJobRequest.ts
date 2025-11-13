import { CreateTrainingJobReq } from './CreateTrainingJobReq';


export class CreateTrainingThirdPartyJobRequest {
    private 'X-App-UserId'?: string;
    public body?: CreateTrainingJobReq;
    public constructor() { 
    }
    public withXAppUserId(xAppUserId: string): CreateTrainingThirdPartyJobRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withBody(body: CreateTrainingJobReq): CreateTrainingThirdPartyJobRequest {
        this['body'] = body;
        return this;
    }
}