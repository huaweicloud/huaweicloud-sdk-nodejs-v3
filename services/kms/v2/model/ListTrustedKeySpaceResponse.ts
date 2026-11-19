import { ListAccessPointResponseBodyPageInfo } from './ListAccessPointResponseBodyPageInfo';
import { ListTrustedKeySpaceResponseBodyKeyspaces } from './ListTrustedKeySpaceResponseBodyKeyspaces';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTrustedKeySpaceResponse extends SdkResponse {
    private 'page_info'?: ListAccessPointResponseBodyPageInfo;
    public keyspaces?: Array<ListTrustedKeySpaceResponseBodyKeyspaces>;
    public constructor() { 
        super();
    }
    public withPageInfo(pageInfo: ListAccessPointResponseBodyPageInfo): ListTrustedKeySpaceResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: ListAccessPointResponseBodyPageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): ListAccessPointResponseBodyPageInfo | undefined {
        return this['page_info'];
    }
    public withKeyspaces(keyspaces: Array<ListTrustedKeySpaceResponseBodyKeyspaces>): ListTrustedKeySpaceResponse {
        this['keyspaces'] = keyspaces;
        return this;
    }
}