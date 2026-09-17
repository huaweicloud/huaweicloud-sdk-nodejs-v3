import { UpdateMqttNodeChannelConnectionInfo } from './UpdateMqttNodeChannelConnectionInfo';
import { UpdateMqttNodeChannelPushInfoDTO } from './UpdateMqttNodeChannelPushInfoDTO';


export class UpdateMqttNodeChannelDetail {
    private 'connection_info'?: UpdateMqttNodeChannelConnectionInfo;
    private 'push_info'?: UpdateMqttNodeChannelPushInfoDTO;
    public constructor() { 
    }
    public withConnectionInfo(connectionInfo: UpdateMqttNodeChannelConnectionInfo): UpdateMqttNodeChannelDetail {
        this['connection_info'] = connectionInfo;
        return this;
    }
    public set connectionInfo(connectionInfo: UpdateMqttNodeChannelConnectionInfo  | undefined) {
        this['connection_info'] = connectionInfo;
    }
    public get connectionInfo(): UpdateMqttNodeChannelConnectionInfo | undefined {
        return this['connection_info'];
    }
    public withPushInfo(pushInfo: UpdateMqttNodeChannelPushInfoDTO): UpdateMqttNodeChannelDetail {
        this['push_info'] = pushInfo;
        return this;
    }
    public set pushInfo(pushInfo: UpdateMqttNodeChannelPushInfoDTO  | undefined) {
        this['push_info'] = pushInfo;
    }
    public get pushInfo(): UpdateMqttNodeChannelPushInfoDTO | undefined {
        return this['push_info'];
    }
}