import { InstanceDatabaseVersionInfo } from './InstanceDatabaseVersionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceDatabaseVersionResponse extends SdkResponse {
    public datastore?: InstanceDatabaseVersionInfo;
    private 'upgrade_flag'?: boolean;
    public constructor() { 
        super();
    }
    public withDatastore(datastore: InstanceDatabaseVersionInfo): ShowInstanceDatabaseVersionResponse {
        this['datastore'] = datastore;
        return this;
    }
    public withUpgradeFlag(upgradeFlag: boolean): ShowInstanceDatabaseVersionResponse {
        this['upgrade_flag'] = upgradeFlag;
        return this;
    }
    public set upgradeFlag(upgradeFlag: boolean  | undefined) {
        this['upgrade_flag'] = upgradeFlag;
    }
    public get upgradeFlag(): boolean | undefined {
        return this['upgrade_flag'];
    }
}