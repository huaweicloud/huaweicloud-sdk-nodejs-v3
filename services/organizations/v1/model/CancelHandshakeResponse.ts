import { HandshakeDto } from './HandshakeDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CancelHandshakeResponse extends SdkResponse {
    public handshake?: HandshakeDto;
    public constructor() { 
        super();
    }
    public withHandshake(handshake: HandshakeDto): CancelHandshakeResponse {
        this['handshake'] = handshake;
        return this;
    }
}