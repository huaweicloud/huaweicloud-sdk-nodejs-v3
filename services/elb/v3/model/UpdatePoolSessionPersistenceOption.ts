

export class UpdatePoolSessionPersistenceOption {
    private 'cookie_name'?: string;
    public type?: UpdatePoolSessionPersistenceOptionTypeEnum | string;
    private 'persistence_timeout'?: number;
    public constructor() { 
    }
    public withCookieName(cookieName: string): UpdatePoolSessionPersistenceOption {
        this['cookie_name'] = cookieName;
        return this;
    }
    public set cookieName(cookieName: string  | undefined) {
        this['cookie_name'] = cookieName;
    }
    public get cookieName(): string | undefined {
        return this['cookie_name'];
    }
    public withType(type: UpdatePoolSessionPersistenceOptionTypeEnum | string): UpdatePoolSessionPersistenceOption {
        this['type'] = type;
        return this;
    }
    public withPersistenceTimeout(persistenceTimeout: number): UpdatePoolSessionPersistenceOption {
        this['persistence_timeout'] = persistenceTimeout;
        return this;
    }
    public set persistenceTimeout(persistenceTimeout: number  | undefined) {
        this['persistence_timeout'] = persistenceTimeout;
    }
    public get persistenceTimeout(): number | undefined {
        return this['persistence_timeout'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdatePoolSessionPersistenceOptionTypeEnum {
    SOURCE_IP = 'SOURCE_IP',
    HTTP_COOKIE = 'HTTP_COOKIE',
    APP_COOKIE = 'APP_COOKIE'
}
