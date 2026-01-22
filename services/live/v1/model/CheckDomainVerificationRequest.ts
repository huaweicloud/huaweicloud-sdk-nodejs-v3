import { CheckDomainVerificationInfo } from './CheckDomainVerificationInfo';


export class CheckDomainVerificationRequest {
    public body?: CheckDomainVerificationInfo;
    public constructor() { 
    }
    public withBody(body: CheckDomainVerificationInfo): CheckDomainVerificationRequest {
        this['body'] = body;
        return this;
    }
}