import { AccessKeyMetadata } from './AccessKeyMetadata';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAccessKeysV5Response extends SdkResponse {
    private 'access_keys'?: Array<AccessKeyMetadata>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withAccessKeys(accessKeys: Array<AccessKeyMetadata>): ListAccessKeysV5Response {
        this['access_keys'] = accessKeys;
        return this;
    }
    public set accessKeys(accessKeys: Array<AccessKeyMetadata>  | undefined) {
        this['access_keys'] = accessKeys;
    }
    public get accessKeys(): Array<AccessKeyMetadata> | undefined {
        return this['access_keys'];
    }
    public withPageInfo(pageInfo: PageInfo): ListAccessKeysV5Response {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}