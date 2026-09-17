import { RapidGrowthTableInfo } from './RapidGrowthTableInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRapidGrowthTablesResponse extends SdkResponse {
    public tables?: Array<RapidGrowthTableInfo>;
    public threshold?: number;
    private 'last_diagnose_timestamp'?: number;
    private 'first2_last_timestamp'?: number;
    private 'second2_last_timestamp'?: number;
    public constructor() { 
        super();
    }
    public withTables(tables: Array<RapidGrowthTableInfo>): ListRapidGrowthTablesResponse {
        this['tables'] = tables;
        return this;
    }
    public withThreshold(threshold: number): ListRapidGrowthTablesResponse {
        this['threshold'] = threshold;
        return this;
    }
    public withLastDiagnoseTimestamp(lastDiagnoseTimestamp: number): ListRapidGrowthTablesResponse {
        this['last_diagnose_timestamp'] = lastDiagnoseTimestamp;
        return this;
    }
    public set lastDiagnoseTimestamp(lastDiagnoseTimestamp: number  | undefined) {
        this['last_diagnose_timestamp'] = lastDiagnoseTimestamp;
    }
    public get lastDiagnoseTimestamp(): number | undefined {
        return this['last_diagnose_timestamp'];
    }
    public withFirst2LastTimestamp(first2LastTimestamp: number): ListRapidGrowthTablesResponse {
        this['first2_last_timestamp'] = first2LastTimestamp;
        return this;
    }
    public set first2LastTimestamp(first2LastTimestamp: number  | undefined) {
        this['first2_last_timestamp'] = first2LastTimestamp;
    }
    public get first2LastTimestamp(): number | undefined {
        return this['first2_last_timestamp'];
    }
    public withSecond2LastTimestamp(second2LastTimestamp: number): ListRapidGrowthTablesResponse {
        this['second2_last_timestamp'] = second2LastTimestamp;
        return this;
    }
    public set second2LastTimestamp(second2LastTimestamp: number  | undefined) {
        this['second2_last_timestamp'] = second2LastTimestamp;
    }
    public get second2LastTimestamp(): number | undefined {
        return this['second2_last_timestamp'];
    }
}