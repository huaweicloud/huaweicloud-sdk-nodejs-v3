import { KeyDetails } from './KeyDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListKeyDetailResponse extends SdkResponse {
    private 'key_info'?: KeyDetails | undefined;
    public constructor() { 
        super();
    }
    public withKeyInfo(keyInfo: KeyDetails): ListKeyDetailResponse {
        this['key_info'] = keyInfo;
        return this;
    }
    public set keyInfo(keyInfo: KeyDetails | undefined) {
        this['key_info'] = keyInfo;
    }
    public get keyInfo() {
        return this['key_info'];
    }
}