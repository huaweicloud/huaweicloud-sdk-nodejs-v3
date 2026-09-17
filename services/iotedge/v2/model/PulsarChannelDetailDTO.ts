import { PulsarConnectionInfoResp } from './PulsarConnectionInfoResp';
import { PulsarPushInfoResp } from './PulsarPushInfoResp';


export class PulsarChannelDetailDTO {
    private 'connection_info'?: PulsarConnectionInfoResp;
    private 'push_info'?: PulsarPushInfoResp;
    public constructor() { 
    }
    public withConnectionInfo(connectionInfo: PulsarConnectionInfoResp): PulsarChannelDetailDTO {
        this['connection_info'] = connectionInfo;
        return this;
    }
    public set connectionInfo(connectionInfo: PulsarConnectionInfoResp  | undefined) {
        this['connection_info'] = connectionInfo;
    }
    public get connectionInfo(): PulsarConnectionInfoResp | undefined {
        return this['connection_info'];
    }
    public withPushInfo(pushInfo: PulsarPushInfoResp): PulsarChannelDetailDTO {
        this['push_info'] = pushInfo;
        return this;
    }
    public set pushInfo(pushInfo: PulsarPushInfoResp  | undefined) {
        this['push_info'] = pushInfo;
    }
    public get pushInfo(): PulsarPushInfoResp | undefined {
        return this['push_info'];
    }
}