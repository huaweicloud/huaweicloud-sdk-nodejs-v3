import { PageInfo } from './PageInfo';
import { ResourceAssociation } from './ResourceAssociation';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourceAssociationsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'resource_associations'?: Array<ResourceAssociation>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListResourceAssociationsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withResourceAssociations(resourceAssociations: Array<ResourceAssociation>): ListResourceAssociationsResponse {
        this['resource_associations'] = resourceAssociations;
        return this;
    }
    public set resourceAssociations(resourceAssociations: Array<ResourceAssociation>  | undefined) {
        this['resource_associations'] = resourceAssociations;
    }
    public get resourceAssociations(): Array<ResourceAssociation> | undefined {
        return this['resource_associations'];
    }
    public withPageInfo(pageInfo: PageInfo): ListResourceAssociationsResponse {
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