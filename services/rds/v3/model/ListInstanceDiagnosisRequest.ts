

export class ListInstanceDiagnosisRequest {
    public engine?: ListInstanceDiagnosisRequestEngineEnum | string;
    public constructor(engine?: string) { 
        this['engine'] = engine;
    }
    public withEngine(engine: ListInstanceDiagnosisRequestEngineEnum | string): ListInstanceDiagnosisRequest {
        this['engine'] = engine;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstanceDiagnosisRequestEngineEnum {
    MYSQL = 'mysql',
    POSTGRESQL = 'postgresql',
    SQLSERVER = 'sqlserver'
}
