import { PrivateModuleSummary } from './PrivateModuleSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPrivateModulesResponse extends SdkResponse {
    public modules?: Array<PrivateModuleSummary>;
    public constructor() { 
        super();
    }
    public withModules(modules: Array<PrivateModuleSummary>): ListPrivateModulesResponse {
        this['modules'] = modules;
        return this;
    }
}