import { FullSqlSwitchResult } from './FullSqlSwitchResult';
import { SqlTypeRangeConfigResult } from './SqlTypeRangeConfigResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFullSqlSwitchesResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'full_sql_switchs'?: Array<FullSqlSwitchResult>;
    private 'allowed_sql_types'?: Array<SqlTypeRangeConfigResult>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListFullSqlSwitchesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withFullSqlSwitchs(fullSqlSwitchs: Array<FullSqlSwitchResult>): ListFullSqlSwitchesResponse {
        this['full_sql_switchs'] = fullSqlSwitchs;
        return this;
    }
    public set fullSqlSwitchs(fullSqlSwitchs: Array<FullSqlSwitchResult>  | undefined) {
        this['full_sql_switchs'] = fullSqlSwitchs;
    }
    public get fullSqlSwitchs(): Array<FullSqlSwitchResult> | undefined {
        return this['full_sql_switchs'];
    }
    public withAllowedSqlTypes(allowedSqlTypes: Array<SqlTypeRangeConfigResult>): ListFullSqlSwitchesResponse {
        this['allowed_sql_types'] = allowedSqlTypes;
        return this;
    }
    public set allowedSqlTypes(allowedSqlTypes: Array<SqlTypeRangeConfigResult>  | undefined) {
        this['allowed_sql_types'] = allowedSqlTypes;
    }
    public get allowedSqlTypes(): Array<SqlTypeRangeConfigResult> | undefined {
        return this['allowed_sql_types'];
    }
}