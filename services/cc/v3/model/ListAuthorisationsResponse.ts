import { Authorisation } from './Authorisation';
import { ListResponseBody } from './ListResponseBody';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuthorisationsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    public authorisations?: Array<Authorisation>;
    public constructor(requestId?: string, authorisations?: Array<Authorisation>) { 
        super();
        this['request_id'] = requestId;
        this['authorisations'] = authorisations;
    }
    public withRequestId(requestId: string): ListAuthorisationsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListAuthorisationsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withAuthorisations(authorisations: Array<Authorisation>): ListAuthorisationsResponse {
        this['authorisations'] = authorisations;
        return this;
    }
}