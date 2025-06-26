import { AuthorizationMail } from './AuthorizationMail';


export class ResendAuthorizationMailReq {
    public records?: Array<AuthorizationMail>;
    public constructor(records?: Array<AuthorizationMail>) { 
        this['records'] = records;
    }
    public withRecords(records: Array<AuthorizationMail>): ResendAuthorizationMailReq {
        this['records'] = records;
        return this;
    }
}