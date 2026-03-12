import { DryRunConfigDto } from './DryRunConfigDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDryRunConfigResponse extends SdkResponse {
    public root?: DryRunConfigDto;
    public constructor() { 
        super();
    }
    public withRoot(root: DryRunConfigDto): UpdateDryRunConfigResponse {
        this['root'] = root;
        return this;
    }
}