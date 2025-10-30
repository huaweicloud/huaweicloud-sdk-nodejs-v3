import { ChangeExtendedWeakPasswordRequestInfo } from './ChangeExtendedWeakPasswordRequestInfo';


export class ChangeExtendedWeakPasswordRequest {
    public region?: string;
    public body?: ChangeExtendedWeakPasswordRequestInfo;
    public constructor() { 
    }
    public withRegion(region: string): ChangeExtendedWeakPasswordRequest {
        this['region'] = region;
        return this;
    }
    public withBody(body: ChangeExtendedWeakPasswordRequestInfo): ChangeExtendedWeakPasswordRequest {
        this['body'] = body;
        return this;
    }
}