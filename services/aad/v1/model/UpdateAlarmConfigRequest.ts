import { AlarmBody } from './AlarmBody';


export class UpdateAlarmConfigRequest {
    public body?: AlarmBody;
    public constructor() { 
    }
    public withBody(body: AlarmBody): UpdateAlarmConfigRequest {
        this['body'] = body;
        return this;
    }
}