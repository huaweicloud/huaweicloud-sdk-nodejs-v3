import { SendNotificationsReq } from './SendNotificationsReq';


export class SendNotificationsRequest {
    public body?: SendNotificationsReq;
    public constructor() { 
    }
    public withBody(body: SendNotificationsReq): SendNotificationsRequest {
        this['body'] = body;
        return this;
    }
}