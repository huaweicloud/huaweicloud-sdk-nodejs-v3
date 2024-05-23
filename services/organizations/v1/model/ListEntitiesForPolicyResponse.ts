import { EntityDto } from './EntityDto';
import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEntitiesForPolicyResponse extends SdkResponse {
    private 'attached_entities'?: Array<EntityDto>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withAttachedEntities(attachedEntities: Array<EntityDto>): ListEntitiesForPolicyResponse {
        this['attached_entities'] = attachedEntities;
        return this;
    }
    public set attachedEntities(attachedEntities: Array<EntityDto>  | undefined) {
        this['attached_entities'] = attachedEntities;
    }
    public get attachedEntities(): Array<EntityDto> | undefined {
        return this['attached_entities'];
    }
    public withPageInfo(pageInfo: PageInfoDto): ListEntitiesForPolicyResponse {
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