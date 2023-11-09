import { PlaybookInstanceInfo } from './PlaybookInstanceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPlaybookInstancesResponse extends SdkResponse {
    public count?: number;
    public instances?: Array<PlaybookInstanceInfo>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListPlaybookInstancesResponse {
        this['count'] = count;
        return this;
    }
    public withInstances(instances: Array<PlaybookInstanceInfo>): ListPlaybookInstancesResponse {
        this['instances'] = instances;
        return this;
    }
    public withXRequestId(xRequestId: string): ListPlaybookInstancesResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}