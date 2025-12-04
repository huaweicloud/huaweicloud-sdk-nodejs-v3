import { StorageInfo } from './StorageInfo';


export class BatchExportCloudPhoneDataRequestBody {
    private 'storage_infos'?: Array<StorageInfo>;
    public constructor(storageInfos?: Array<StorageInfo>) { 
        this['storage_infos'] = storageInfos;
    }
    public withStorageInfos(storageInfos: Array<StorageInfo>): BatchExportCloudPhoneDataRequestBody {
        this['storage_infos'] = storageInfos;
        return this;
    }
    public set storageInfos(storageInfos: Array<StorageInfo>  | undefined) {
        this['storage_infos'] = storageInfos;
    }
    public get storageInfos(): Array<StorageInfo> | undefined {
        return this['storage_infos'];
    }
}