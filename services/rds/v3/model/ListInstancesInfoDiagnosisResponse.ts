import { DiagnosisInstancesInfoResult } from './DiagnosisInstancesInfoResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstancesInfoDiagnosisResponse extends SdkResponse {
    public diagnosis?: ListInstancesInfoDiagnosisResponseDiagnosisEnum | string;
    private 'total_count'?: number;
    public instances?: Array<DiagnosisInstancesInfoResult>;
    public constructor() { 
        super();
    }
    public withDiagnosis(diagnosis: ListInstancesInfoDiagnosisResponseDiagnosisEnum | string): ListInstancesInfoDiagnosisResponse {
        this['diagnosis'] = diagnosis;
        return this;
    }
    public withTotalCount(totalCount: number): ListInstancesInfoDiagnosisResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withInstances(instances: Array<DiagnosisInstancesInfoResult>): ListInstancesInfoDiagnosisResponse {
        this['instances'] = instances;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstancesInfoDiagnosisResponseDiagnosisEnum {
    HIGH_PRESSURE = 'high_pressure',
    LOCK_WAIT = 'lock_wait',
    INSUFFICIENT_CAPACITY = 'insufficient_capacity',
    SLOW_SQL_FREQUENCY = 'slow_sql_frequency',
    DISK_PERFORMANCE_CAP = 'disk_performance_cap',
    MEM_OVERRUN = 'mem_overrun',
    AGE_EXCEED = 'age_exceed',
    CONNECTIONS_EXCEED = 'connections_exceed'
}
