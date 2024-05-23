import { HandshakeDto } from './HandshakeDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeclineHandshakeResponse extends SdkResponse {
    public handshake?: HandshakeDto;
    public constructor() { 
        super();
    }
    public withHandshake(handshake: HandshakeDto): DeclineHandshakeResponse {
        this['handshake'] = handshake;
        return this;
    }
}