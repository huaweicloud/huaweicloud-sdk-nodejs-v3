import { ProjectModule } from './ProjectModule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectModulesResponse extends SdkResponse {
    public total?: number;
    public modules?: Array<ProjectModule>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListProjectModulesResponse {
        this['total'] = total;
        return this;
    }
    public withModules(modules: Array<ProjectModule>): ListProjectModulesResponse {
        this['modules'] = modules;
        return this;
    }
}