

export class CollectInstanceStatisticRequest {
    private 'X-Language'?: string;
    public engine?: CollectInstanceStatisticRequestEngineEnum | string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): CollectInstanceStatisticRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withEngine(engine: CollectInstanceStatisticRequestEngineEnum | string): CollectInstanceStatisticRequest {
        this['engine'] = engine;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CollectInstanceStatisticRequestEngineEnum {
    MYSQL = 'mysql',
    POSTGRESQL = 'postgresql',
    SQLSERVER = 'sqlserver'
}
