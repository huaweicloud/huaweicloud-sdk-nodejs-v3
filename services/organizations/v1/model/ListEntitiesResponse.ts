import { EntityDto } from './EntityDto';
import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEntitiesResponse extends SdkResponse {
    public entities?: Array<EntityDto>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withEntities(entities: Array<EntityDto>): ListEntitiesResponse {
        this['entities'] = entities;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoDto): ListEntitiesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDto  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDto | undefined {
        return this['page_info'];
    }
}