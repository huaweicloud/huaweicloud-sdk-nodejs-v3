import { PulsarNodeChannelConnectionInfoResp } from './PulsarNodeChannelConnectionInfoResp';
import { PulsarNodeChannelPushInfoRsp } from './PulsarNodeChannelPushInfoRsp';


export class PulsarNodeChannelDetailDTO {
    private 'connection_info'?: PulsarNodeChannelConnectionInfoResp;
    private 'push_info'?: PulsarNodeChannelPushInfoRsp;
    public constructor() { 
    }
    public withConnectionInfo(connectionInfo: PulsarNodeChannelConnectionInfoResp): PulsarNodeChannelDetailDTO {
        this['connection_info'] = connectionInfo;
        return this;
    }
    public set connectionInfo(connectionInfo: PulsarNodeChannelConnectionInfoResp  | undefined) {
        this['connection_info'] = connectionInfo;
    }
    public get connectionInfo(): PulsarNodeChannelConnectionInfoResp | undefined {
        return this['connection_info'];
    }
    public withPushInfo(pushInfo: PulsarNodeChannelPushInfoRsp): PulsarNodeChannelDetailDTO {
        this['push_info'] = pushInfo;
        return this;
    }
    public set pushInfo(pushInfo: PulsarNodeChannelPushInfoRsp  | undefined) {
        this['push_info'] = pushInfo;
    }
    public get pushInfo(): PulsarNodeChannelPushInfoRsp | undefined {
        return this['push_info'];
    }
}