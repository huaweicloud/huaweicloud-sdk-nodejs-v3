import { Notifications } from './Notifications';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNotifiedHistoriesResponse extends SdkResponse {
    private 'event_sn'?: string;
    public notifications?: Array<Notifications>;
    public constructor() { 
        super();
    }
    public withEventSn(eventSn: string): ListNotifiedHistoriesResponse {
        this['event_sn'] = eventSn;
        return this;
    }
    public set eventSn(eventSn: string  | undefined) {
        this['event_sn'] = eventSn;
    }
    public get eventSn(): string | undefined {
        return this['event_sn'];
    }
    public withNotifications(notifications: Array<Notifications>): ListNotifiedHistoriesResponse {
        this['notifications'] = notifications;
        return this;
    }
}