import { ResourceTagInfoBean } from './ResourceTagInfoBean';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditTagsResponse extends SdkResponse {
    public tags?: Array<ResourceTagInfoBean>;
    private 'sys_tags'?: Array<ResourceTagInfoBean>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<ResourceTagInfoBean>): ListAuditTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<ResourceTagInfoBean>): ListAuditTagsResponse {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<ResourceTagInfoBean>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<ResourceTagInfoBean> | undefined {
        return this['sys_tags'];
    }
}