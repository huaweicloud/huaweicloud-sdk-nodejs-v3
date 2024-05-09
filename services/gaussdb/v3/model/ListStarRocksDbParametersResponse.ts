import { DbParameter } from './DbParameter';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStarRocksDbParametersResponse extends SdkResponse {
    private 'db_parameters'?: Array<DbParameter>;
    public constructor() { 
        super();
    }
    public withDbParameters(dbParameters: Array<DbParameter>): ListStarRocksDbParametersResponse {
        this['db_parameters'] = dbParameters;
        return this;
    }
    public set dbParameters(dbParameters: Array<DbParameter>  | undefined) {
        this['db_parameters'] = dbParameters;
    }
    public get dbParameters(): Array<DbParameter> | undefined {
        return this['db_parameters'];
    }
}