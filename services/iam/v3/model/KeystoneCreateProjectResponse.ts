import { AuthProjectResult } from './AuthProjectResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneCreateProjectResponse extends SdkResponse {
    public project?: AuthProjectResult;
    public constructor() { 
        super();
    }
    public withProject(project: AuthProjectResult): KeystoneCreateProjectResponse {
        this['project'] = project;
        return this;
    }
}