import { AccessConfigInfo } from './AccessConfigInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAccessAddressBackupConfigResponse extends SdkResponse {
    private 'access_config'?: Array<AccessConfigInfo>;
    public constructor() { 
        super();
    }
    public withAccessConfig(accessConfig: Array<AccessConfigInfo>): ListAccessAddressBackupConfigResponse {
        this['access_config'] = accessConfig;
        return this;
    }
    public set accessConfig(accessConfig: Array<AccessConfigInfo>  | undefined) {
        this['access_config'] = accessConfig;
    }
    public get accessConfig(): Array<AccessConfigInfo> | undefined {
        return this['access_config'];
    }
}