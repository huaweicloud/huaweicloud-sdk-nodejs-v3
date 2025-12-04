import { Phone } from './Phone';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCloudPhonesResponse extends SdkResponse {
    public phones?: Array<Phone>;
    private 'request_id'?: string;
    public count?: number;
    public constructor() { 
        super();
    }
    public withPhones(phones: Array<Phone>): ListCloudPhonesResponse {
        this['phones'] = phones;
        return this;
    }
    public withRequestId(requestId: string): ListCloudPhonesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withCount(count: number): ListCloudPhonesResponse {
        this['count'] = count;
        return this;
    }
}