import { IoTDBConnectionInfoResp } from './IoTDBConnectionInfoResp';
import { IoTDBNodeChannelPushInfoResp } from './IoTDBNodeChannelPushInfoResp';


export class IoTDBNodeChannelDetailDTO {
    private 'connection_info'?: IoTDBConnectionInfoResp;
    private 'push_info'?: IoTDBNodeChannelPushInfoResp;
    public constructor() { 
    }
    public withConnectionInfo(connectionInfo: IoTDBConnectionInfoResp): IoTDBNodeChannelDetailDTO {
        this['connection_info'] = connectionInfo;
        return this;
    }
    public set connectionInfo(connectionInfo: IoTDBConnectionInfoResp  | undefined) {
        this['connection_info'] = connectionInfo;
    }
    public get connectionInfo(): IoTDBConnectionInfoResp | undefined {
        return this['connection_info'];
    }
    public withPushInfo(pushInfo: IoTDBNodeChannelPushInfoResp): IoTDBNodeChannelDetailDTO {
        this['push_info'] = pushInfo;
        return this;
    }
    public set pushInfo(pushInfo: IoTDBNodeChannelPushInfoResp  | undefined) {
        this['push_info'] = pushInfo;
    }
    public get pushInfo(): IoTDBNodeChannelPushInfoResp | undefined {
        return this['push_info'];
    }
}