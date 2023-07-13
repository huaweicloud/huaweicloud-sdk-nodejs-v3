

export class Notification {
    private 'event_name'?: string | undefined;
    public status?: NotificationStatusEnum;
    public topic?: string;
    private 'msg_type'?: number | undefined;
    public constructor() { 
    }
    public withEventName(eventName: string): Notification {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName() {
        return this['event_name'];
    }
    public withStatus(status: NotificationStatusEnum): Notification {
        this['status'] = status;
        return this;
    }
    public withTopic(topic: string): Notification {
        this['topic'] = topic;
        return this;
    }
    public withMsgType(msgType: number): Notification {
        this['msg_type'] = msgType;
        return this;
    }
    public set msgType(msgType: number | undefined) {
        this['msg_type'] = msgType;
    }
    public get msgType() {
        return this['msg_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NotificationStatusEnum {
    ON = 'on',
    OFF = 'off'
}
