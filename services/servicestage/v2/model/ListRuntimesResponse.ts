import { RuntimeTypeView } from './RuntimeTypeView';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRuntimesResponse extends SdkResponse {
    public runtimes?: Array<RuntimeTypeView>;
    public constructor() { 
        super();
    }
    public withRuntimes(runtimes: Array<RuntimeTypeView>): ListRuntimesResponse {
        this['runtimes'] = runtimes;
        return this;
    }
}