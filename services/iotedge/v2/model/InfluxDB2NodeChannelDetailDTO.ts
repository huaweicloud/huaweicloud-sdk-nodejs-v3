import { InfluxDB2ConnectionInfo } from './InfluxDB2ConnectionInfo';
import { InfluxDB2NodeChannelPushInfoRsp } from './InfluxDB2NodeChannelPushInfoRsp';


export class InfluxDB2NodeChannelDetailDTO {
    private 'connection_info'?: InfluxDB2ConnectionInfo;
    private 'push_info'?: InfluxDB2NodeChannelPushInfoRsp;
    public constructor(connectionInfo?: InfluxDB2ConnectionInfo, pushInfo?: InfluxDB2NodeChannelPushInfoRsp) { 
        this['connection_info'] = connectionInfo;
        this['push_info'] = pushInfo;
    }
    public withConnectionInfo(connectionInfo: InfluxDB2ConnectionInfo): InfluxDB2NodeChannelDetailDTO {
        this['connection_info'] = connectionInfo;
        return this;
    }
    public set connectionInfo(connectionInfo: InfluxDB2ConnectionInfo  | undefined) {
        this['connection_info'] = connectionInfo;
    }
    public get connectionInfo(): InfluxDB2ConnectionInfo | undefined {
        return this['connection_info'];
    }
    public withPushInfo(pushInfo: InfluxDB2NodeChannelPushInfoRsp): InfluxDB2NodeChannelDetailDTO {
        this['push_info'] = pushInfo;
        return this;
    }
    public set pushInfo(pushInfo: InfluxDB2NodeChannelPushInfoRsp  | undefined) {
        this['push_info'] = pushInfo;
    }
    public get pushInfo(): InfluxDB2NodeChannelPushInfoRsp | undefined {
        return this['push_info'];
    }
}