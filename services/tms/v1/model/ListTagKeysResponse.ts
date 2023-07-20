import { PageInfoTagKeys } from './PageInfoTagKeys';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTagKeysResponse extends SdkResponse {
    public keys?: Array<string>;
    private 'page_info'?: PageInfoTagKeys;
    public constructor() { 
        super();
    }
    public withKeys(keys: Array<string>): ListTagKeysResponse {
        this['keys'] = keys;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoTagKeys): ListTagKeysResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoTagKeys  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoTagKeys | undefined {
        return this['page_info'];
    }
}