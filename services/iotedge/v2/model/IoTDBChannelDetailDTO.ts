import { IoTDBConnectionInfoResp } from './IoTDBConnectionInfoResp';
import { IoTDBPushInfoResp } from './IoTDBPushInfoResp';


export class IoTDBChannelDetailDTO {
    private 'connection_info'?: IoTDBConnectionInfoResp;
    private 'push_info'?: IoTDBPushInfoResp;
    public constructor() { 
    }
    public withConnectionInfo(connectionInfo: IoTDBConnectionInfoResp): IoTDBChannelDetailDTO {
        this['connection_info'] = connectionInfo;
        return this;
    }
    public set connectionInfo(connectionInfo: IoTDBConnectionInfoResp  | undefined) {
        this['connection_info'] = connectionInfo;
    }
    public get connectionInfo(): IoTDBConnectionInfoResp | undefined {
        return this['connection_info'];
    }
    public withPushInfo(pushInfo: IoTDBPushInfoResp): IoTDBChannelDetailDTO {
        this['push_info'] = pushInfo;
        return this;
    }
    public set pushInfo(pushInfo: IoTDBPushInfoResp  | undefined) {
        this['push_info'] = pushInfo;
    }
    public get pushInfo(): IoTDBPushInfoResp | undefined {
        return this['push_info'];
    }
}