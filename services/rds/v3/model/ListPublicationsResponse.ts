import { QueryPublicationInfo } from './QueryPublicationInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPublicationsResponse extends SdkResponse {
    public publications?: Array<QueryPublicationInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withPublications(publications: Array<QueryPublicationInfo>): ListPublicationsResponse {
        this['publications'] = publications;
        return this;
    }
    public withTotalCount(totalCount: number): ListPublicationsResponse {
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