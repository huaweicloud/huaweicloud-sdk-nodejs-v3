import { Flavor } from './Flavor';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFlavorsResponse extends SdkResponse {
    public flavors?: Array<Flavor>;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withFlavors(flavors: Array<Flavor>): ListFlavorsResponse {
        this['flavors'] = flavors;
        return this;
    }
    public withRequestId(requestId: string): ListFlavorsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}