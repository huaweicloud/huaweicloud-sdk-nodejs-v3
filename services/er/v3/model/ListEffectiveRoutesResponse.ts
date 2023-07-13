import { EffectiveRoute } from './EffectiveRoute';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEffectiveRoutesResponse extends SdkResponse {
    public routes?: Array<EffectiveRoute>;
    private 'request_id'?: string | undefined;
    private 'page_info'?: PageInfo | undefined;
    public constructor() { 
        super();
    }
    public withRoutes(routes: Array<EffectiveRoute>): ListEffectiveRoutesResponse {
        this['routes'] = routes;
        return this;
    }
    public withRequestId(requestId: string): ListEffectiveRoutesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListEffectiveRoutesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
}