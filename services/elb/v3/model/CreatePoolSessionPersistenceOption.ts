

export class CreatePoolSessionPersistenceOption {
    private 'cookie_name'?: string | undefined;
    public type: CreatePoolSessionPersistenceOptionTypeEnum;
    private 'persistence_timeout'?: number | undefined;
    public constructor(type?: any) { 
        this['type'] = type;
    }
    public withCookieName(cookieName: string): CreatePoolSessionPersistenceOption {
        this['cookie_name'] = cookieName;
        return this;
    }
    public set cookieName(cookieName: string | undefined) {
        this['cookie_name'] = cookieName;
    }
    public get cookieName() {
        return this['cookie_name'];
    }
    public withType(type: CreatePoolSessionPersistenceOptionTypeEnum): CreatePoolSessionPersistenceOption {
        this['type'] = type;
        return this;
    }
    public withPersistenceTimeout(persistenceTimeout: number): CreatePoolSessionPersistenceOption {
        this['persistence_timeout'] = persistenceTimeout;
        return this;
    }
    public set persistenceTimeout(persistenceTimeout: number | undefined) {
        this['persistence_timeout'] = persistenceTimeout;
    }
    public get persistenceTimeout() {
        return this['persistence_timeout'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreatePoolSessionPersistenceOptionTypeEnum {
    SOURCE_IP = 'SOURCE_IP',
    HTTP_COOKIE = 'HTTP_COOKIE',
    APP_COOKIE = 'APP_COOKIE'
}
