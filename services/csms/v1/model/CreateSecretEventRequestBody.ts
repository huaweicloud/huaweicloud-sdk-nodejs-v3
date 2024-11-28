import { Notification } from './Notification';


export class CreateSecretEventRequestBody {
    public name?: string;
    private 'event_types'?: Array<CreateSecretEventRequestBodyEventTypesEnum> | Array<string>;
    public state?: CreateSecretEventRequestBodyStateEnum | string;
    public notification?: Notification;
    public constructor(name?: string, eventTypes?: Array<string>, state?: string, notification?: Notification) { 
        this['name'] = name;
        this['event_types'] = eventTypes;
        this['state'] = state;
        this['notification'] = notification;
    }
    public withName(name: string): CreateSecretEventRequestBody {
        this['name'] = name;
        return this;
    }
    public withEventTypes(eventTypes: Array<CreateSecretEventRequestBodyEventTypesEnum> | Array<string>): CreateSecretEventRequestBody {
        this['event_types'] = eventTypes;
        return this;
    }
    public set eventTypes(eventTypes: Array<CreateSecretEventRequestBodyEventTypesEnum> | Array<string>  | undefined) {
        this['event_types'] = eventTypes;
    }
    public get eventTypes(): Array<CreateSecretEventRequestBodyEventTypesEnum> | Array<string> | undefined {
        return this['event_types'];
    }
    public withState(state: CreateSecretEventRequestBodyStateEnum | string): CreateSecretEventRequestBody {
        this['state'] = state;
        return this;
    }
    public withNotification(notification: Notification): CreateSecretEventRequestBody {
        this['notification'] = notification;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSecretEventRequestBodyEventTypesEnum {
    SECRET_VERSION_CREATED = 'SECRET_VERSION_CREATED',
    SECRET_VERSION_EXPIRED = 'SECRET_VERSION_EXPIRED',
    SECRET_ROTATED = 'SECRET_ROTATED',
    SECRET_DELETED = 'SECRET_DELETED',
    SECRET_ROTATED_FAILED = 'SECRET_ROTATED_FAILED'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateSecretEventRequestBodyStateEnum {
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED'
}
