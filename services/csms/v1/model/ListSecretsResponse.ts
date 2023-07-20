import { PageInfo } from './PageInfo';
import { Secret } from './Secret';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecretsResponse extends SdkResponse {
    public secrets?: Array<Secret>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withSecrets(secrets: Array<Secret>): ListSecretsResponse {
        this['secrets'] = secrets;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListSecretsResponse {
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