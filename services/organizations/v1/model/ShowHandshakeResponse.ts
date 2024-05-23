import { HandshakeDto } from './HandshakeDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHandshakeResponse extends SdkResponse {
    public handshake?: HandshakeDto;
    public constructor() { 
        super();
    }
    public withHandshake(handshake: HandshakeDto): ShowHandshakeResponse {
        this['handshake'] = handshake;
        return this;
    }
}