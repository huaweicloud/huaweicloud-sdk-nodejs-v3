import { RespDedicatedHost } from './RespDedicatedHost';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDedicatedHostResponse extends SdkResponse {
    private 'dedicated_host'?: RespDedicatedHost;
    public constructor() { 
        super();
    }
    public withDedicatedHost(dedicatedHost: RespDedicatedHost): ShowDedicatedHostResponse {
        this['dedicated_host'] = dedicatedHost;
        return this;
    }
    public set dedicatedHost(dedicatedHost: RespDedicatedHost  | undefined) {
        this['dedicated_host'] = dedicatedHost;
    }
    public get dedicatedHost(): RespDedicatedHost | undefined {
        return this['dedicated_host'];
    }
}