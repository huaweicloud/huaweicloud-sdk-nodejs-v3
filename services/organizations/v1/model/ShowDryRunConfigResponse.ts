import { DryRunConfigDto } from './DryRunConfigDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDryRunConfigResponse extends SdkResponse {
    public root?: DryRunConfigDto;
    public constructor() { 
        super();
    }
    public withRoot(root: DryRunConfigDto): ShowDryRunConfigResponse {
        this['root'] = root;
        return this;
    }
}