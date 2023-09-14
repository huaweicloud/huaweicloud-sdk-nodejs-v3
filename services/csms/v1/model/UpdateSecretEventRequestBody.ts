import { Notification } from './Notification';


export class UpdateSecretEventRequestBody {
    public state?: UpdateSecretEventRequestBodyStateEnum | string;
    private 'event_types'?: Array<string>;
    public notification?: Notification;
    public constructor() { 
    }
    public withState(state: UpdateSecretEventRequestBodyStateEnum | string): UpdateSecretEventRequestBody {
        this['state'] = state;
        return this;
    }
    public withEventTypes(eventTypes: Array<string>): UpdateSecretEventRequestBody {
        this['event_types'] = eventTypes;
        return this;
    }
    public set eventTypes(eventTypes: Array<string>  | undefined) {
        this['event_types'] = eventTypes;
    }
    public get eventTypes(): Array<string> | undefined {
        return this['event_types'];
    }
    public withNotification(notification: Notification): UpdateSecretEventRequestBody {
        this['notification'] = notification;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateSecretEventRequestBodyStateEnum {
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED'
}
