import { BasePage } from './BasePage';
import { EnvInfo } from './EnvInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEnvironmentsV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    public envs?: Array<EnvInfo>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListEnvironmentsV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListEnvironmentsV2Response {
        this['total'] = total;
        return this;
    }
    public withEnvs(envs: Array<EnvInfo>): ListEnvironmentsV2Response {
        this['envs'] = envs;
        return this;
    }
}