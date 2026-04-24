import { ScreenRecordsConfigResultReq } from './ScreenRecordsConfigResultReq';


export class UpdateScreenRecordsTrafficLimitConfigRequest {
    public body?: ScreenRecordsConfigResultReq;
    public constructor() { 
    }
    public withBody(body: ScreenRecordsConfigResultReq): UpdateScreenRecordsTrafficLimitConfigRequest {
        this['body'] = body;
        return this;
    }
}