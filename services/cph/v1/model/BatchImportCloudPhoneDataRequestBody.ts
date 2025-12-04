import { RestoreInfo } from './RestoreInfo';


export class BatchImportCloudPhoneDataRequestBody {
    private 'restore_infos'?: Array<RestoreInfo>;
    public constructor(restoreInfos?: Array<RestoreInfo>) { 
        this['restore_infos'] = restoreInfos;
    }
    public withRestoreInfos(restoreInfos: Array<RestoreInfo>): BatchImportCloudPhoneDataRequestBody {
        this['restore_infos'] = restoreInfos;
        return this;
    }
    public set restoreInfos(restoreInfos: Array<RestoreInfo>  | undefined) {
        this['restore_infos'] = restoreInfos;
    }
    public get restoreInfos(): Array<RestoreInfo> | undefined {
        return this['restore_infos'];
    }
}