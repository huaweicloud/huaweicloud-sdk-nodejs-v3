import { ProtocolResult } from './ProtocolResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneCreateProtocolResponse extends SdkResponse {
    public protocol?: ProtocolResult;
    public constructor() { 
        super();
    }
    public withProtocol(protocol: ProtocolResult): KeystoneCreateProtocolResponse {
        this['protocol'] = protocol;
        return this;
    }
}