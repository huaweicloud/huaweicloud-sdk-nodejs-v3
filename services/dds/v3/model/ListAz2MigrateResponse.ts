import { Az2Migrate } from './Az2Migrate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAz2MigrateResponse extends SdkResponse {
    private 'az_list'?: Array<Az2Migrate>;
    public constructor() { 
        super();
    }
    public withAzList(azList: Array<Az2Migrate>): ListAz2MigrateResponse {
        this['az_list'] = azList;
        return this;
    }
    public set azList(azList: Array<Az2Migrate>  | undefined) {
        this['az_list'] = azList;
    }
    public get azList(): Array<Az2Migrate> | undefined {
        return this['az_list'];
    }
}