import { ProtocolResult } from './ProtocolResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneShowProtocolResponse extends SdkResponse {
    public protocol?: ProtocolResult;
    public constructor() { 
        super();
    }
    public withProtocol(protocol: ProtocolResult): KeystoneShowProtocolResponse {
        this['protocol'] = protocol;
        return this;
    }
}