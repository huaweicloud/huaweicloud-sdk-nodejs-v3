import { AssociateRespDetail } from './AssociateRespDetail';


export class AssociateIpdIssuesResp {
    public status?: string;
    public message?: string;
    public result?: { [key: string]: Array<AssociateRespDetail>; };
    public constructor() { 
    }
    public withStatus(status: string): AssociateIpdIssuesResp {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): AssociateIpdIssuesResp {
        this['message'] = message;
        return this;
    }
    public withResult(result: { [key: string]: Array<AssociateRespDetail>; }): AssociateIpdIssuesResp {
        this['result'] = result;
        return this;
    }
}