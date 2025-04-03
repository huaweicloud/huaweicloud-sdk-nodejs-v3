import { GetGroupResp } from './GetGroupResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGroupsResponse extends SdkResponse {
    public totalResults?: number;
    public itemsPerPage?: number;
    public startIndex?: string;
    public schemas?: Array<string>;
    private 'Resources'?: Array<GetGroupResp>;
    public constructor() { 
        super();
    }
    public withTotalResults(totalResults: number): ListGroupsResponse {
        this['totalResults'] = totalResults;
        return this;
    }
    public withItemsPerPage(itemsPerPage: number): ListGroupsResponse {
        this['itemsPerPage'] = itemsPerPage;
        return this;
    }
    public withStartIndex(startIndex: string): ListGroupsResponse {
        this['startIndex'] = startIndex;
        return this;
    }
    public withSchemas(schemas: Array<string>): ListGroupsResponse {
        this['schemas'] = schemas;
        return this;
    }
    public withResources(resources: Array<GetGroupResp>): ListGroupsResponse {
        this['Resources'] = resources;
        return this;
    }
    public set resources(resources: Array<GetGroupResp>  | undefined) {
        this['Resources'] = resources;
    }
    public get resources(): Array<GetGroupResp> | undefined {
        return this['Resources'];
    }
}