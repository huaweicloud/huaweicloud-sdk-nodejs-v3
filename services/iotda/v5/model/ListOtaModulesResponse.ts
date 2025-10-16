import { OtaModuleInfo } from './OtaModuleInfo';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOtaModulesResponse extends SdkResponse {
    public modules?: Array<OtaModuleInfo>;
    public page?: PageInfo;
    public constructor() { 
        super();
    }
    public withModules(modules: Array<OtaModuleInfo>): ListOtaModulesResponse {
        this['modules'] = modules;
        return this;
    }
    public withPage(page: PageInfo): ListOtaModulesResponse {
        this['page'] = page;
        return this;
    }
}