import { KeystoneGroupResultWithLinksSelf } from './KeystoneGroupResultWithLinksSelf';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneCreateGroupResponse extends SdkResponse {
    public group?: KeystoneGroupResultWithLinksSelf;
    public constructor() { 
        super();
    }
    public withGroup(group: KeystoneGroupResultWithLinksSelf): KeystoneCreateGroupResponse {
        this['group'] = group;
        return this;
    }
}