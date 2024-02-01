import { GlobalConnectionBandwidthLineLevel } from './GlobalConnectionBandwidthLineLevel';
import { ListResponseBody } from './ListResponseBody';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGlobalConnectionBandwidthLineLevelsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    private 'line_levels'?: Array<GlobalConnectionBandwidthLineLevel>;
    public constructor(requestId?: string, lineLevels?: Array<GlobalConnectionBandwidthLineLevel>) { 
        super();
        this['request_id'] = requestId;
        this['line_levels'] = lineLevels;
    }
    public withRequestId(requestId: string): ListGlobalConnectionBandwidthLineLevelsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListGlobalConnectionBandwidthLineLevelsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withLineLevels(lineLevels: Array<GlobalConnectionBandwidthLineLevel>): ListGlobalConnectionBandwidthLineLevelsResponse {
        this['line_levels'] = lineLevels;
        return this;
    }
    public set lineLevels(lineLevels: Array<GlobalConnectionBandwidthLineLevel>  | undefined) {
        this['line_levels'] = lineLevels;
    }
    public get lineLevels(): Array<GlobalConnectionBandwidthLineLevel> | undefined {
        return this['line_levels'];
    }
}