import { HandshakeDto } from './HandshakeDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AcceptHandshakeResponse extends SdkResponse {
    public handshake?: HandshakeDto;
    public constructor() { 
        super();
    }
    public withHandshake(handshake: HandshakeDto): AcceptHandshakeResponse {
        this['handshake'] = handshake;
        return this;
    }
}