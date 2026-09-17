import { IoTDBConnectionInfo } from './IoTDBConnectionInfo';
import { IoTDBPushInfo } from './IoTDBPushInfo';


export class CreateIoTDBChannelDetail {
    private 'connection_info'?: IoTDBConnectionInfo;
    private 'push_info'?: IoTDBPushInfo;
    public constructor(connectionInfo?: IoTDBConnectionInfo, pushInfo?: IoTDBPushInfo) { 
        this['connection_info'] = connectionInfo;
        this['push_info'] = pushInfo;
    }
    public withConnectionInfo(connectionInfo: IoTDBConnectionInfo): CreateIoTDBChannelDetail {
        this['connection_info'] = connectionInfo;
        return this;
    }
    public set connectionInfo(connectionInfo: IoTDBConnectionInfo  | undefined) {
        this['connection_info'] = connectionInfo;
    }
    public get connectionInfo(): IoTDBConnectionInfo | undefined {
        return this['connection_info'];
    }
    public withPushInfo(pushInfo: IoTDBPushInfo): CreateIoTDBChannelDetail {
        this['push_info'] = pushInfo;
        return this;
    }
    public set pushInfo(pushInfo: IoTDBPushInfo  | undefined) {
        this['push_info'] = pushInfo;
    }
    public get pushInfo(): IoTDBPushInfo | undefined {
        return this['push_info'];
    }
}