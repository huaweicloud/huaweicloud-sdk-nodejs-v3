import { KeyDescriptionInfo } from './KeyDescriptionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateKeyDescriptionResponse extends SdkResponse {
    private 'key_info'?: KeyDescriptionInfo | undefined;
    public constructor() { 
        super();
    }
    public withKeyInfo(keyInfo: KeyDescriptionInfo): UpdateKeyDescriptionResponse {
        this['key_info'] = keyInfo;
        return this;
    }
    public set keyInfo(keyInfo: KeyDescriptionInfo | undefined) {
        this['key_info'] = keyInfo;
    }
    public get keyInfo() {
        return this['key_info'];
    }
}