import { DatabaseSmallVersion } from './DatabaseSmallVersion';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSmallVersionResponse extends SdkResponse {
    private 'data_stores'?: Array<DatabaseSmallVersion>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withDataStores(dataStores: Array<DatabaseSmallVersion>): ListSmallVersionResponse {
        this['data_stores'] = dataStores;
        return this;
    }
    public set dataStores(dataStores: Array<DatabaseSmallVersion>  | undefined) {
        this['data_stores'] = dataStores;
    }
    public get dataStores(): Array<DatabaseSmallVersion> | undefined {
        return this['data_stores'];
    }
    public withCount(count: number): ListSmallVersionResponse {
        this['count'] = count;
        return this;
    }
}