import { AccessConfigInfo } from './AccessConfigInfo';


export class UpdateAccessAddressBackupConfigReq {
    private 'access_config'?: Array<AccessConfigInfo>;
    public constructor() { 
    }
    public withAccessConfig(accessConfig: Array<AccessConfigInfo>): UpdateAccessAddressBackupConfigReq {
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