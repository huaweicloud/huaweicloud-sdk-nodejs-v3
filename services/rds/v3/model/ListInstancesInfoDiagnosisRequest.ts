

export class ListInstancesInfoDiagnosisRequest {
    public engine?: ListInstancesInfoDiagnosisRequestEngineEnum | string;
    public diagnosis?: ListInstancesInfoDiagnosisRequestDiagnosisEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor(engine?: string, diagnosis?: string) { 
        this['engine'] = engine;
        this['diagnosis'] = diagnosis;
    }
    public withEngine(engine: ListInstancesInfoDiagnosisRequestEngineEnum | string): ListInstancesInfoDiagnosisRequest {
        this['engine'] = engine;
        return this;
    }
    public withDiagnosis(diagnosis: ListInstancesInfoDiagnosisRequestDiagnosisEnum | string): ListInstancesInfoDiagnosisRequest {
        this['diagnosis'] = diagnosis;
        return this;
    }
    public withOffset(offset: number): ListInstancesInfoDiagnosisRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstancesInfoDiagnosisRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstancesInfoDiagnosisRequestEngineEnum {
    MYSQL = 'mysql',
    POSTGRESQL = 'postgresql',
    SQLSERVER = 'sqlserver'
}
/**
    * @export
    * @enum {string}
    */
export enum ListInstancesInfoDiagnosisRequestDiagnosisEnum {
    HIGH_PRESSURE = 'high_pressure',
    LOCK_WAIT = 'lock_wait',
    INSUFFICIENT_CAPACITY = 'insufficient_capacity',
    SLOW_SQL_FREQUENCY = 'slow_sql_frequency',
    DISK_PERFORMANCE_CAP = 'disk_performance_cap',
    MEM_OVERRUN = 'mem_overrun',
    AGE_EXCEED = 'age_exceed',
    CONNECTIONS_EXCEED = 'connections_exceed'
}
