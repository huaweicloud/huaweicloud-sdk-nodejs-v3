import { Storage } from './Storage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStorageTypesResponse extends SdkResponse {
    private 'storage_type'?: Array<Storage>;
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
}