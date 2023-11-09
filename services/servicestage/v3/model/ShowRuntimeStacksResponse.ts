import { RuntimeStackView } from './RuntimeStackView';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRuntimeStacksResponse extends SdkResponse {
    public runtimestacks?: Array<RuntimeStackView>;
    public constructor() { 
        super();
    }
    public withRuntimestacks(runtimestacks: Array<RuntimeStackView>): ShowRuntimeStacksResponse {
        this['runtimestacks'] = runtimestacks;
        return this;
    }
}