import { KeystoneUpdateProjectResult } from './KeystoneUpdateProjectResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneUpdateProjectResponse extends SdkResponse {
    public project?: KeystoneUpdateProjectResult;
    public constructor() { 
        super();
    }
    public withProject(project: KeystoneUpdateProjectResult): KeystoneUpdateProjectResponse {
        this['project'] = project;
        return this;
    }
}