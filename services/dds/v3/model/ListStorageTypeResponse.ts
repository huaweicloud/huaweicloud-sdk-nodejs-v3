import { DssPoolInfo } from './DssPoolInfo';
import { Storage } from './Storage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStorageTypeResponse extends SdkResponse {
    private 'storage_type'?: Array<Storage>;
    private 'dss_pool_info'?: Array<DssPoolInfo>;
    public constructor() { 
        super();
    }
    public withStorageType(storageType: Array<Storage>): ListStorageTypeResponse {
        this['storage_type'] = storageType;
        return this;
    }
    public set storageType(storageType: Array<Storage>  | undefined) {
        this['storage_type'] = storageType;
    }
    public get storageType(): Array<Storage> | undefined {
        return this['storage_type'];
    }
    public withDssPoolInfo(dssPoolInfo: Array<DssPoolInfo>): ListStorageTypeResponse {
        this['dss_pool_info'] = dssPoolInfo;
        return this;
    }
    public set dssPoolInfo(dssPoolInfo: Array<DssPoolInfo>  | undefined) {
        this['dss_pool_info'] = dssPoolInfo;
    }
    public get dssPoolInfo(): Array<DssPoolInfo> | undefined {
        return this['dss_pool_info'];
    }
}