import { KeyStatusInfo } from './KeyStatusInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class EnableKeyResponse extends SdkResponse {
    private 'key_info'?: KeyStatusInfo | undefined;
    public constructor() { 
        super();
    }
    public withKeyInfo(keyInfo: KeyStatusInfo): EnableKeyResponse {
        this['key_info'] = keyInfo;
        return this;
    }
    public set keyInfo(keyInfo: KeyStatusInfo | undefined) {
        this['key_info'] = keyInfo;
    }
    public get keyInfo() {
        return this['key_info'];
    }
}