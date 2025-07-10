import { AlarmToIncidentRequestBody } from './AlarmToIncidentRequestBody';


export class TransferAlarmToIncidentRequest {
    public body?: AlarmToIncidentRequestBody;
    public constructor() { 
    }
    public withBody(body: AlarmToIncidentRequestBody): TransferAlarmToIncidentRequest {
        this['body'] = body;
        return this;
    }
}