import { EnvNodeModel } from './EnvNodeModel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppEnvsResponse extends SdkResponse {
    public envs?: Array<EnvNodeModel>;
    public constructor() { 
        super();
    }
    public withEnvs(envs: Array<EnvNodeModel>): ListAppEnvsResponse {
        this['envs'] = envs;
        return this;
    }
}