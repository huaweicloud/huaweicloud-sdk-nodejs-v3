import { InfluxDB2ConnectionInfo } from './InfluxDB2ConnectionInfo';
import { InfluxDB2PushInfo } from './InfluxDB2PushInfo';


export class CreateInfluxDB2ChannelDetail {
    private 'connection_info'?: InfluxDB2ConnectionInfo;
    private 'push_info'?: InfluxDB2PushInfo;
    public constructor(connectionInfo?: InfluxDB2ConnectionInfo, pushInfo?: InfluxDB2PushInfo) { 
        this['connection_info'] = connectionInfo;
        this['push_info'] = pushInfo;
    }
    public withConnectionInfo(connectionInfo: InfluxDB2ConnectionInfo): CreateInfluxDB2ChannelDetail {
        this['connection_info'] = connectionInfo;
        return this;
    }
    public set connectionInfo(connectionInfo: InfluxDB2ConnectionInfo  | undefined) {
        this['connection_info'] = connectionInfo;
    }
    public get connectionInfo(): InfluxDB2ConnectionInfo | undefined {
        return this['connection_info'];
    }
    public withPushInfo(pushInfo: InfluxDB2PushInfo): CreateInfluxDB2ChannelDetail {
        this['push_info'] = pushInfo;
        return this;
    }
    public set pushInfo(pushInfo: InfluxDB2PushInfo  | undefined) {
        this['push_info'] = pushInfo;
    }
    public get pushInfo(): InfluxDB2PushInfo | undefined {
        return this['push_info'];
    }
}