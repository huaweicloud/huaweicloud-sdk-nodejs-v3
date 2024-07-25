import { ResourceTagBody } from './ResourceTagBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCustomizeClusterTagsByProjectIdResponse extends SdkResponse {
    public tags?: Array<ResourceTagBody>;
    private 'sys_tags'?: Array<ResourceTagBody>;
    public action?: string;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<ResourceTagBody>): ShowCustomizeClusterTagsByProjectIdResponse {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<ResourceTagBody>): ShowCustomizeClusterTagsByProjectIdResponse {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<ResourceTagBody>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<ResourceTagBody> | undefined {
        return this['sys_tags'];
    }
    public withAction(action: string): ShowCustomizeClusterTagsByProjectIdResponse {
        this['action'] = action;
        return this;
    }
}