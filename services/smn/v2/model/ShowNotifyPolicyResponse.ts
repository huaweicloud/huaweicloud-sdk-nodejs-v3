import { PollingPolicyResponse } from './PollingPolicyResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNotifyPolicyResponse extends SdkResponse {
    private 'request_id'?: string;
    public id?: string;
    public protocol?: ShowNotifyPolicyResponseProtocolEnum | string;
    public polling?: Array<PollingPolicyResponse>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowNotifyPolicyResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withId(id: string): ShowNotifyPolicyResponse {
        this['id'] = id;
        return this;
    }
    public withProtocol(protocol: ShowNotifyPolicyResponseProtocolEnum | string): ShowNotifyPolicyResponse {
        this['protocol'] = protocol;
        return this;
    }
    public withPolling(polling: Array<PollingPolicyResponse>): ShowNotifyPolicyResponse {
        this['polling'] = polling;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowNotifyPolicyResponseProtocolEnum {
    CALLNOTIFY = 'callnotify'
}
