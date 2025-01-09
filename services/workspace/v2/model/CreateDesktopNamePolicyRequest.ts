import { CreateDesktopNamePolicyReq } from './CreateDesktopNamePolicyReq';


export class CreateDesktopNamePolicyRequest {
    public body?: CreateDesktopNamePolicyReq;
    public constructor() { 
    }
    public withBody(body: CreateDesktopNamePolicyReq): CreateDesktopNamePolicyRequest {
        this['body'] = body;
        return this;
    }
}