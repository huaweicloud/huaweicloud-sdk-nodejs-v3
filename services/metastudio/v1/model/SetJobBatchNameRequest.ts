import { SetJobBatchNameReq } from './SetJobBatchNameReq';


export class SetJobBatchNameRequest {
    private 'X-App-UserId'?: string;
    public body?: SetJobBatchNameReq;
    public constructor() { 
    }
    public withXAppUserId(xAppUserId: string): SetJobBatchNameRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withBody(body: SetJobBatchNameReq): SetJobBatchNameRequest {
        this['body'] = body;
        return this;
    }
}