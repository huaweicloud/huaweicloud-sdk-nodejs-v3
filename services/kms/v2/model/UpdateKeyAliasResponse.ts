import { KeyAliasInfo } from './KeyAliasInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateKeyAliasResponse extends SdkResponse {
    private 'key_info'?: KeyAliasInfo;
    public constructor() { 
        super();
    }
    public withKeyInfo(keyInfo: KeyAliasInfo): UpdateKeyAliasResponse {
        this['key_info'] = keyInfo;
        return this;
    }
    public set keyInfo(keyInfo: KeyAliasInfo  | undefined) {
        this['key_info'] = keyInfo;
    }
    public get keyInfo(): KeyAliasInfo | undefined {
        return this['key_info'];
    }
}