import { MqttNodeChannelConnectionInfoResp } from './MqttNodeChannelConnectionInfoResp';
import { MqttNodeChannelPushInfoRsp } from './MqttNodeChannelPushInfoRsp';


export class MqttNodeChannelDetailDTO {
    private 'connection_info'?: MqttNodeChannelConnectionInfoResp;
    private 'push_info'?: MqttNodeChannelPushInfoRsp;
    public constructor() { 
    }
    public withConnectionInfo(connectionInfo: MqttNodeChannelConnectionInfoResp): MqttNodeChannelDetailDTO {
        this['connection_info'] = connectionInfo;
        return this;
    }
    public set connectionInfo(connectionInfo: MqttNodeChannelConnectionInfoResp  | undefined) {
        this['connection_info'] = connectionInfo;
    }
    public get connectionInfo(): MqttNodeChannelConnectionInfoResp | undefined {
        return this['connection_info'];
    }
    public withPushInfo(pushInfo: MqttNodeChannelPushInfoRsp): MqttNodeChannelDetailDTO {
        this['push_info'] = pushInfo;
        return this;
    }
    public set pushInfo(pushInfo: MqttNodeChannelPushInfoRsp  | undefined) {
        this['push_info'] = pushInfo;
    }
    public get pushInfo(): MqttNodeChannelPushInfoRsp | undefined {
        return this['push_info'];
    }
}