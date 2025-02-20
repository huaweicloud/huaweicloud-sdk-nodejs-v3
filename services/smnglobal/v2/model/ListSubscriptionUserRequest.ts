

export class ListSubscriptionUserRequest {
    public name?: string;
    public protocol?: ListSubscriptionUserRequestProtocolEnum | string;
    public status?: ListSubscriptionUserRequestStatusEnum | string;
    public group?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withName(name: string): ListSubscriptionUserRequest {
        this['name'] = name;
        return this;
    }
    public withProtocol(protocol: ListSubscriptionUserRequestProtocolEnum | string): ListSubscriptionUserRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withStatus(status: ListSubscriptionUserRequestStatusEnum | string): ListSubscriptionUserRequest {
        this['status'] = status;
        return this;
    }
    public withGroup(group: string): ListSubscriptionUserRequest {
        this['group'] = group;
        return this;
    }
    public withOffset(offset: number): ListSubscriptionUserRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSubscriptionUserRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSubscriptionUserRequestProtocolEnum {
    HTTP = 'http',
    HTTPS = 'https',
    SMS = 'sms',
    EMAIL = 'email'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSubscriptionUserRequestStatusEnum {
    UNCONFIRMED = 'UNCONFIRMED',
    CONFIRMED = 'CONFIRMED',
    CANCELLED = 'CANCELLED'
}
