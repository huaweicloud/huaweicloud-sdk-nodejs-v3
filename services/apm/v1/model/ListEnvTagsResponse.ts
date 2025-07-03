import { CmdbTagEntity } from './CmdbTagEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEnvTagsResponse extends SdkResponse {
    private 'env_tags'?: Array<CmdbTagEntity>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withEnvTags(envTags: Array<CmdbTagEntity>): ListEnvTagsResponse {
        this['env_tags'] = envTags;
        return this;
    }
    public set envTags(envTags: Array<CmdbTagEntity>  | undefined) {
        this['env_tags'] = envTags;
    }
    public get envTags(): Array<CmdbTagEntity> | undefined {
        return this['env_tags'];
    }
    public withTotalCount(totalCount: number): ListEnvTagsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}