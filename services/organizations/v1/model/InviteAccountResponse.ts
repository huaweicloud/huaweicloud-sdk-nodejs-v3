import { HandshakeDto } from './HandshakeDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class InviteAccountResponse extends SdkResponse {
    public handshake?: HandshakeDto;
    public constructor() { 
        super();
    }
    public withHandshake(handshake: HandshakeDto): InviteAccountResponse {
        this['handshake'] = handshake;
        return this;
    }
}