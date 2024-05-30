import { SysTag } from './SysTag';
import { TagEntity } from './TagEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClouddcnSubnetsTagsResponse extends SdkResponse {
    private 'request_id'?: string;
    public tags?: Array<TagEntity>;
    private 'sys_tags'?: Array<SysTag>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowClouddcnSubnetsTagsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withTags(tags: Array<TagEntity>): ShowClouddcnSubnetsTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<SysTag>): ShowClouddcnSubnetsTagsResponse {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<SysTag>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<SysTag> | undefined {
        return this['sys_tags'];
    }
}