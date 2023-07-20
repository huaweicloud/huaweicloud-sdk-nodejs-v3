import { DssPoolInfo } from './DssPoolInfo';
import { Storage } from './Storage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStorageTypesResponse extends SdkResponse {
    private 'storage_type'?: Array<Storage>;
    private 'dsspool_info'?: Array<DssPoolInfo>;
    public constructor() { 
        super();
    }
    public withStorageType(storageType: Array<Storage>): ListStorageTypesResponse {
        this['storage_type'] = storageType;
        return this;
    }
    public set storageType(storageType: Array<Storage>  | undefined) {
        this['storage_type'] = storageType;
    }
    public get storageType(): Array<Storage> | undefined {
        return this['storage_type'];
    }
    public withDsspoolInfo(dsspoolInfo: Array<DssPoolInfo>): ListStorageTypesResponse {
        this['dsspool_info'] = dsspoolInfo;
        return this;
    }
    public set dsspoolInfo(dsspoolInfo: Array<DssPoolInfo>  | undefined) {
        this['dsspool_info'] = dsspoolInfo;
    }
    public get dsspoolInfo(): Array<DssPoolInfo> | undefined {
        return this['dsspool_info'];
    }
}