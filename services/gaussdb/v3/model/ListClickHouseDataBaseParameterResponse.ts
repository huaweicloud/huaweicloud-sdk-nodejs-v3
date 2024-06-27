import { ChDatabaseParameterInfo } from './ChDatabaseParameterInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClickHouseDataBaseParameterResponse extends SdkResponse {
    private 'db_parameters'?: Array<ChDatabaseParameterInfo>;
    public constructor() { 
        super();
    }
    public withDbParameters(dbParameters: Array<ChDatabaseParameterInfo>): ListClickHouseDataBaseParameterResponse {
        this['db_parameters'] = dbParameters;
        return this;
    }
    public set dbParameters(dbParameters: Array<ChDatabaseParameterInfo>  | undefined) {
        this['db_parameters'] = dbParameters;
    }
    public get dbParameters(): Array<ChDatabaseParameterInfo> | undefined {
        return this['db_parameters'];
    }
}