import { DisAssociateAppsRequestBody } from './DisAssociateAppsRequestBody';


export class DisassociateAppsRequest {
    public body?: DisAssociateAppsRequestBody;
    public constructor() { 
    }
    public withBody(body: DisAssociateAppsRequestBody): DisassociateAppsRequest {
        this['body'] = body;
        return this;
    }
}