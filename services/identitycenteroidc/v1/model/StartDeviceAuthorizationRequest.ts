import { StartDeviceAuthorizationReqBody } from './StartDeviceAuthorizationReqBody';


export class StartDeviceAuthorizationRequest {
    public body?: StartDeviceAuthorizationReqBody;
    public constructor() { 
    }
    public withBody(body: StartDeviceAuthorizationReqBody): StartDeviceAuthorizationRequest {
        this['body'] = body;
        return this;
    }
}