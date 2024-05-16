import { PageInfo } from './PageInfo';
import { ResourceShareAssociation } from './ResourceShareAssociation';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchResourceShareAssociationsResponse extends SdkResponse {
    private 'resource_share_associations'?: Array<ResourceShareAssociation>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withResourceShareAssociations(resourceShareAssociations: Array<ResourceShareAssociation>): SearchResourceShareAssociationsResponse {
        this['resource_share_associations'] = resourceShareAssociations;
        return this;
    }
    public set resourceShareAssociations(resourceShareAssociations: Array<ResourceShareAssociation>  | undefined) {
        this['resource_share_associations'] = resourceShareAssociations;
    }
    public get resourceShareAssociations(): Array<ResourceShareAssociation> | undefined {
        return this['resource_share_associations'];
    }
    public withPageInfo(pageInfo: PageInfo): SearchResourceShareAssociationsResponse {
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