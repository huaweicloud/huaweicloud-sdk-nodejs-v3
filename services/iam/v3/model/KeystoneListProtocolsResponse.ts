import { Links } from './Links';
import { ProtocolResult } from './ProtocolResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneListProtocolsResponse extends SdkResponse {
    public links?: Links;
    public protocols?: Array<ProtocolResult>;
    public constructor() { 
        super();
    }
    public withLinks(links: Links): KeystoneListProtocolsResponse {
        this['links'] = links;
        return this;
    }
    public withProtocols(protocols: Array<ProtocolResult>): KeystoneListProtocolsResponse {
        this['protocols'] = protocols;
        return this;
    }
}