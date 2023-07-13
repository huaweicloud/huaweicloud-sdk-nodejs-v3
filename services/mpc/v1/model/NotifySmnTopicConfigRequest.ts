import { NotificationConfigReq } from './NotificationConfigReq';


export class NotifySmnTopicConfigRequest {
    public body?: NotificationConfigReq;
    public constructor() { 
    }
    public withBody(body: NotificationConfigReq): NotifySmnTopicConfigRequest {
        this['body'] = body;
        return this;
    }
}