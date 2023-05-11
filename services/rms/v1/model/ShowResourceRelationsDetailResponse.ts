import { PageInfo } from './PageInfo';
import { ResourceRelation } from './ResourceRelation';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowResourceRelationsDetailResponse extends SdkResponse {
    public relations?: Array<ResourceRelation>;
    private 'page_info'?: PageInfo | undefined;
    public constructor() { 
        super();
    }
    public withRelations(relations: Array<ResourceRelation>): ShowResourceRelationsDetailResponse {
        this['relations'] = relations;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ShowResourceRelationsDetailResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
}