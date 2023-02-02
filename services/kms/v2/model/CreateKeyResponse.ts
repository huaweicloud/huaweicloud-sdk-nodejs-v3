import { KeKInfo } from './KeKInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateKeyResponse extends SdkResponse {
    private 'key_info'?: KeKInfo | undefined;
    public constructor() { 
        super();
    }
    public withKeyInfo(keyInfo: KeKInfo): CreateKeyResponse {
        this['key_info'] = keyInfo;
        return this;
    }
    public set keyInfo(keyInfo: KeKInfo | undefined) {
        this['key_info'] = keyInfo;
    }
    public get keyInfo() {
        return this['key_info'];
    }
}