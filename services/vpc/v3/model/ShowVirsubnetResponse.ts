import { Virsubnet } from './Virsubnet';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVirsubnetResponse extends SdkResponse {
    private 'request_id'?: string;
    public virsubnet?: Virsubnet;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowVirsubnetResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withVirsubnet(virsubnet: Virsubnet): ShowVirsubnetResponse {
        this['virsubnet'] = virsubnet;
        return this;
    }
}