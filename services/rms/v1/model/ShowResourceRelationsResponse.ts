import { PageInfo } from './PageInfo';
import { ResourceRelation } from './ResourceRelation';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowResourceRelationsResponse extends SdkResponse {
    public relations?: Array<ResourceRelation>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withRelations(relations: Array<ResourceRelation>): ShowResourceRelationsResponse {
        this['relations'] = relations;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ShowResourceRelationsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}