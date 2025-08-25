import { AssociateAppsRequestBody } from './AssociateAppsRequestBody';


export class AssociateAppsRequest {
    public body?: AssociateAppsRequestBody;
    public constructor() { 
    }
    public withBody(body: AssociateAppsRequestBody): AssociateAppsRequest {
        this['body'] = body;
        return this;
    }
}