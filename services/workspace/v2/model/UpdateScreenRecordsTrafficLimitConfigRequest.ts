import { UpdateScreenRecordsTrafficLimitConfigRequestBody } from './UpdateScreenRecordsTrafficLimitConfigRequestBody';


export class UpdateScreenRecordsTrafficLimitConfigRequest {
    public body?: UpdateScreenRecordsTrafficLimitConfigRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateScreenRecordsTrafficLimitConfigRequestBody): UpdateScreenRecordsTrafficLimitConfigRequest {
        this['body'] = body;
        return this;
    }
}