import { KeystoneGroupResultWithLinksSelf } from './KeystoneGroupResultWithLinksSelf';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneUpdateGroupResponse extends SdkResponse {
    public group?: KeystoneGroupResultWithLinksSelf;
    public constructor() { 
        super();
    }
    public withGroup(group: KeystoneGroupResultWithLinksSelf): KeystoneUpdateGroupResponse {
        this['group'] = group;
        return this;
    }
}