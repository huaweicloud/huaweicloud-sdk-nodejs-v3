

export class SessionPersistence {
    public type: SessionPersistenceTypeEnum;
    private 'cookie_name'?: string | undefined;
    private 'persistence_timeout'?: number | undefined;
    public constructor(type?: any) { 
        this['type'] = type;
    }
    public withType(type: SessionPersistenceTypeEnum): SessionPersistence {
        this['type'] = type;
        return this;
    }
    public withCookieName(cookieName: string): SessionPersistence {
        this['cookie_name'] = cookieName;
        return this;
    }
    public set cookieName(cookieName: string | undefined) {
        this['cookie_name'] = cookieName;
    }
    public get cookieName() {
        return this['cookie_name'];
    }
    public withPersistenceTimeout(persistenceTimeout: number): SessionPersistence {
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
export enum SessionPersistenceTypeEnum {
    SOURCE_IP = 'SOURCE_IP',
    HTTP_COOKIE = 'HTTP_COOKIE',
    APP_COOKIE = 'APP_COOKIE'
}
