import { ObsObject } from './ObsObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListObsBucketObjectsResponse extends SdkResponse {
    public count?: number;
    public objects?: Array<ObsObject>;
    private 'X-request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListObsBucketObjectsResponse {
        this['count'] = count;
        return this;
    }
    public withObjects(objects: Array<ObsObject>): ListObsBucketObjectsResponse {
        this['objects'] = objects;
        return this;
    }
    public withXRequestId(xRequestId: string): ListObsBucketObjectsResponse {
        this['X-request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-Id'];
    }
}