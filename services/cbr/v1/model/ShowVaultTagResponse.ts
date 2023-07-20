import { SysTag } from './SysTag';
import { Tag } from './Tag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVaultTagResponse extends SdkResponse {
    public tags?: Array<Tag>;
    private 'sys_tags'?: Array<SysTag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<Tag>): ShowVaultTagResponse {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<SysTag>): ShowVaultTagResponse {
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