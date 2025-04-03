import { GetUserResp } from './GetUserResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUsersResponse extends SdkResponse {
    public totalResults?: number;
    public itemsPerPage?: string;
    public startIndex?: string;
    public schemas?: Array<string>;
    private 'Resources'?: Array<GetUserResp>;
    public constructor() { 
        super();
    }
    public withTotalResults(totalResults: number): ListUsersResponse {
        this['totalResults'] = totalResults;
        return this;
    }
    public withItemsPerPage(itemsPerPage: string): ListUsersResponse {
        this['itemsPerPage'] = itemsPerPage;
        return this;
    }
    public withStartIndex(startIndex: string): ListUsersResponse {
        this['startIndex'] = startIndex;
        return this;
    }
    public withSchemas(schemas: Array<string>): ListUsersResponse {
        this['schemas'] = schemas;
        return this;
    }
    public withResources(resources: Array<GetUserResp>): ListUsersResponse {
        this['Resources'] = resources;
        return this;
    }
    public set resources(resources: Array<GetUserResp>  | undefined) {
        this['Resources'] = resources;
    }
    public get resources(): Array<GetUserResp> | undefined {
        return this['Resources'];
    }
}