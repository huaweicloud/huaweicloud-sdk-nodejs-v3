import { DiskInfo } from './DiskInfo';
import { SystemInfo } from './SystemInfo';
import { TrafficInfo } from './TrafficInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceMonitorInfoResponse extends SdkResponse {
    private 'disk_infos'?: DiskInfo;
    private 'system_infos'?: Array<SystemInfo>;
    private 'traffic_infos'?: Array<TrafficInfo>;
    public constructor() { 
        super();
    }
    public withDiskInfos(diskInfos: DiskInfo): ShowInstanceMonitorInfoResponse {
        this['disk_infos'] = diskInfos;
        return this;
    }
    public set diskInfos(diskInfos: DiskInfo  | undefined) {
        this['disk_infos'] = diskInfos;
    }
    public get diskInfos(): DiskInfo | undefined {
        return this['disk_infos'];
    }
    public withSystemInfos(systemInfos: Array<SystemInfo>): ShowInstanceMonitorInfoResponse {
        this['system_infos'] = systemInfos;
        return this;
    }
    public set systemInfos(systemInfos: Array<SystemInfo>  | undefined) {
        this['system_infos'] = systemInfos;
    }
    public get systemInfos(): Array<SystemInfo> | undefined {
        return this['system_infos'];
    }
    public withTrafficInfos(trafficInfos: Array<TrafficInfo>): ShowInstanceMonitorInfoResponse {
        this['traffic_infos'] = trafficInfos;
        return this;
    }
    public set trafficInfos(trafficInfos: Array<TrafficInfo>  | undefined) {
        this['traffic_infos'] = trafficInfos;
    }
    public get trafficInfos(): Array<TrafficInfo> | undefined {
        return this['traffic_infos'];
    }
}