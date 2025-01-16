import { PollingPolicyRequest } from './PollingPolicyRequest';


export class NotifyPolicyRequestBody {
    public protocol?: NotifyPolicyRequestBodyProtocolEnum | string;
    public polling?: Array<PollingPolicyRequest>;
    public constructor(protocol?: string, polling?: Array<PollingPolicyRequest>) { 
        this['protocol'] = protocol;
        this['polling'] = polling;
    }
    public withProtocol(protocol: NotifyPolicyRequestBodyProtocolEnum | string): NotifyPolicyRequestBody {
        this['protocol'] = protocol;
        return this;
    }
    public withPolling(polling: Array<PollingPolicyRequest>): NotifyPolicyRequestBody {
        this['polling'] = polling;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NotifyPolicyRequestBodyProtocolEnum {
    CALLNOTIFY = 'callnotify'
}
