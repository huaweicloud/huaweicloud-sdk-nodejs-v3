import { KeystoneGroupResult } from './KeystoneGroupResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneShowGroupResponse extends SdkResponse {
    public group?: KeystoneGroupResult;
    public constructor() { 
        super();
    }
    public withGroup(group: KeystoneGroupResult): KeystoneShowGroupResponse {
        this['group'] = group;
        return this;
    }
}