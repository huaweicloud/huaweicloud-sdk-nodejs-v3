import { RootDto } from './RootDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DisablePolicyTypeResponse extends SdkResponse {
    public root?: RootDto;
    public constructor() { 
        super();
    }
    public withRoot(root: RootDto): DisablePolicyTypeResponse {
        this['root'] = root;
        return this;
    }
}