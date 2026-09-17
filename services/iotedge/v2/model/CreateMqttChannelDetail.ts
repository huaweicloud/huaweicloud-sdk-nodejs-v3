import { ItMqttConnectionInfo } from './ItMqttConnectionInfo';
import { MqttPushInfo } from './MqttPushInfo';


export class CreateMqttChannelDetail {
    private 'connection_info'?: ItMqttConnectionInfo;
    private 'push_info'?: MqttPushInfo;
    public constructor(connectionInfo?: ItMqttConnectionInfo, pushInfo?: MqttPushInfo) { 
        this['connection_info'] = connectionInfo;
        this['push_info'] = pushInfo;
    }
    public withConnectionInfo(connectionInfo: ItMqttConnectionInfo): CreateMqttChannelDetail {
        this['connection_info'] = connectionInfo;
        return this;
    }
    public set connectionInfo(connectionInfo: ItMqttConnectionInfo  | undefined) {
        this['connection_info'] = connectionInfo;
    }
    public get connectionInfo(): ItMqttConnectionInfo | undefined {
        return this['connection_info'];
    }
    public withPushInfo(pushInfo: MqttPushInfo): CreateMqttChannelDetail {
        this['push_info'] = pushInfo;
        return this;
    }
    public set pushInfo(pushInfo: MqttPushInfo  | undefined) {
        this['push_info'] = pushInfo;
    }
    public get pushInfo(): MqttPushInfo | undefined {
        return this['push_info'];
    }
}