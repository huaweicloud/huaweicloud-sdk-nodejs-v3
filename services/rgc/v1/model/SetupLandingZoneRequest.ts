import { SetupLandingZoneReqBody } from './SetupLandingZoneReqBody';


export class SetupLandingZoneRequest {
    public body?: SetupLandingZoneReqBody;
    public constructor() { 
    }
    public withBody(body: SetupLandingZoneReqBody): SetupLandingZoneRequest {
        this['body'] = body;
        return this;
    }
}