import { GlobalConnectionBandwidthSpecCode } from './GlobalConnectionBandwidthSpecCode';
import { ListResponseBody } from './ListResponseBody';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGlobalConnectionBandwidthSpecCodesResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    private 'spec_codes'?: Array<GlobalConnectionBandwidthSpecCode>;
    public constructor(requestId?: string, specCodes?: Array<GlobalConnectionBandwidthSpecCode>) { 
        super();
        this['request_id'] = requestId;
        this['spec_codes'] = specCodes;
    }
    public withRequestId(requestId: string): ListGlobalConnectionBandwidthSpecCodesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListGlobalConnectionBandwidthSpecCodesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withSpecCodes(specCodes: Array<GlobalConnectionBandwidthSpecCode>): ListGlobalConnectionBandwidthSpecCodesResponse {
        this['spec_codes'] = specCodes;
        return this;
    }
    public set specCodes(specCodes: Array<GlobalConnectionBandwidthSpecCode>  | undefined) {
        this['spec_codes'] = specCodes;
    }
    public get specCodes(): Array<GlobalConnectionBandwidthSpecCode> | undefined {
        return this['spec_codes'];
    }
}