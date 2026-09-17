import { MqttConnectionInfoResp } from './MqttConnectionInfoResp';
import { MqttPushInfoResp } from './MqttPushInfoResp';


export class MqttChannelDetailDTO {
    private 'connection_info'?: MqttConnectionInfoResp;
    private 'push_info'?: MqttPushInfoResp;
    public constructor() { 
    }
    public withConnectionInfo(connectionInfo: MqttConnectionInfoResp): MqttChannelDetailDTO {
        this['connection_info'] = connectionInfo;
        return this;
    }
    public set connectionInfo(connectionInfo: MqttConnectionInfoResp  | undefined) {
        this['connection_info'] = connectionInfo;
    }
    public get connectionInfo(): MqttConnectionInfoResp | undefined {
        return this['connection_info'];
    }
    public withPushInfo(pushInfo: MqttPushInfoResp): MqttChannelDetailDTO {
        this['push_info'] = pushInfo;
        return this;
    }
    public set pushInfo(pushInfo: MqttPushInfoResp  | undefined) {
        this['push_info'] = pushInfo;
    }
    public get pushInfo(): MqttPushInfoResp | undefined {
        return this['push_info'];
    }
}