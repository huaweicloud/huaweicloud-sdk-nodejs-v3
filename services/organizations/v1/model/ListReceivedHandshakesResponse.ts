import { HandshakeDto } from './HandshakeDto';
import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListReceivedHandshakesResponse extends SdkResponse {
    public handshakes?: Array<HandshakeDto>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withHandshakes(handshakes: Array<HandshakeDto>): ListReceivedHandshakesResponse {
        this['handshakes'] = handshakes;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoDto): ListReceivedHandshakesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDto  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDto | undefined {
        return this['page_info'];
    }
}