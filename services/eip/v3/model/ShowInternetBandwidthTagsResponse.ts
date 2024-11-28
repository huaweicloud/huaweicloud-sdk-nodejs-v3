import { CreateTag } from './CreateTag';
import { SysTag } from './SysTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInternetBandwidthTagsResponse extends SdkResponse {
    private 'request_id'?: string;
    public tags?: Array<CreateTag>;
    private 'sys_tags'?: Array<SysTag>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowInternetBandwidthTagsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withTags(tags: Array<CreateTag>): ShowInternetBandwidthTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<SysTag>): ShowInternetBandwidthTagsResponse {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<SysTag>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<SysTag> | undefined {
        return this['sys_tags'];
    }
    public withXRequestId(xRequestId: string): ShowInternetBandwidthTagsResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}