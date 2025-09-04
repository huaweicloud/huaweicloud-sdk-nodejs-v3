import { ResetUserProfileReq } from './ResetUserProfileReq';


export class ResetUserProfileRequest {
    public body?: ResetUserProfileReq;
    public constructor() { 
    }
    public withBody(body: ResetUserProfileReq): ResetUserProfileRequest {
        this['body'] = body;
        return this;
    }
}