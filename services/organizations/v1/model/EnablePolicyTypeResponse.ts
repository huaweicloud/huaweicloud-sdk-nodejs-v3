import { RootDto } from './RootDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class EnablePolicyTypeResponse extends SdkResponse {
    public root?: RootDto;
    public constructor() { 
        super();
    }
    public withRoot(root: RootDto): EnablePolicyTypeResponse {
        this['root'] = root;
        return this;
    }
}