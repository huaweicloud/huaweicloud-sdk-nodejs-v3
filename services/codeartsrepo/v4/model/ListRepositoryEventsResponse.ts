import { RepositoryPushEventDto } from './RepositoryPushEventDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRepositoryEventsResponse extends SdkResponse {
    public body?: Array<RepositoryPushEventDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<RepositoryPushEventDto>): ListRepositoryEventsResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListRepositoryEventsResponse {
        this['X-Total'] = xTotal;
        return this;
    }
    public set xTotal(xTotal: string  | undefined) {
        this['X-Total'] = xTotal;
    }
    public get xTotal(): string | undefined {
        return this['X-Total'];
    }
}