import { TmsTag } from './TmsTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowServerGroupTagResponse extends SdkResponse {
    public tags?: Array<TmsTag>;
    private 'sys_tags'?: Array<TmsTag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TmsTag>): ShowServerGroupTagResponse {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<TmsTag>): ShowServerGroupTagResponse {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<TmsTag>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<TmsTag> | undefined {
        return this['sys_tags'];
    }
}