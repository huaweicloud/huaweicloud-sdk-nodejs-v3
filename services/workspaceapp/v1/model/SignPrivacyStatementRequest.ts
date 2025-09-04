import { SignPrivacyStatementReq } from './SignPrivacyStatementReq';


export class SignPrivacyStatementRequest {
    public body?: SignPrivacyStatementReq;
    public constructor() { 
    }
    public withBody(body: SignPrivacyStatementReq): SignPrivacyStatementRequest {
        this['body'] = body;
        return this;
    }
}