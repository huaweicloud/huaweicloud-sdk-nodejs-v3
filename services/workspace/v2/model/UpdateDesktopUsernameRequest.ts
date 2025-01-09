import { UpdateDesktopUsernameReq } from './UpdateDesktopUsernameReq';


export class UpdateDesktopUsernameRequest {
    public body?: UpdateDesktopUsernameReq;
    public constructor() { 
    }
    public withBody(body: UpdateDesktopUsernameReq): UpdateDesktopUsernameRequest {
        this['body'] = body;
        return this;
    }
}