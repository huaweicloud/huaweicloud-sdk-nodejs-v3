

export class AbuseScope {
    public type?: AbuseScopeTypeEnum | string;
    private 'user_identifier'?: string;
    public constructor() { 
    }
    public withType(type: AbuseScopeTypeEnum | string): AbuseScope {
        this['type'] = type;
        return this;
    }
    public withUserIdentifier(userIdentifier: string): AbuseScope {
        this['user_identifier'] = userIdentifier;
        return this;
    }
    public set userIdentifier(userIdentifier: string  | undefined) {
        this['user_identifier'] = userIdentifier;
    }
    public get userIdentifier(): string | undefined {
        return this['user_identifier'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AbuseScopeTypeEnum {
    ALL_USERS = 'all_users',
    SINGLE_USER = 'single_user'
}
