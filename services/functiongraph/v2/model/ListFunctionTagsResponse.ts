import { KvItem } from './KvItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFunctionTagsResponse extends SdkResponse {
    public tags?: Array<KvItem>;
    private 'sys_tags'?: Array<KvItem>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<KvItem>): ListFunctionTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<KvItem>): ListFunctionTagsResponse {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<KvItem>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<KvItem> | undefined {
        return this['sys_tags'];
    }
}