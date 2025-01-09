import { Datapoints } from './Datapoints';
import { MonitorUserOnlineInfo } from './MonitorUserOnlineInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDesktopMonitorDataResponse extends SdkResponse {
    private 'user_online_info'?: Array<MonitorUserOnlineInfo>;
    private 'online_status'?: number;
    private 'cpu_info'?: Array<Datapoints>;
    private 'memory_info'?: Array<Datapoints>;
    private 'disk_util_inband'?: Array<Datapoints>;
    private 'disk_read_bytes_rate'?: Array<Datapoints>;
    private 'disk_write_bytes_rate'?: Array<Datapoints>;
    private 'disk_read_requests_rate'?: Array<Datapoints>;
    private 'disk_write_requests_rate'?: Array<Datapoints>;
    private 'network_incoming_bytes_rate_inband'?: Array<Datapoints>;
    private 'network_outgoing_bytes_rate_inband'?: Array<Datapoints>;
    private 'network_incoming_bytes_aggregate_rate'?: Array<Datapoints>;
    private 'network_outgoing_bytes_aggregate_rate'?: Array<Datapoints>;
    private 'network_vm_connections'?: Array<Datapoints>;
    public constructor() { 
        super();
    }
    public withUserOnlineInfo(userOnlineInfo: Array<MonitorUserOnlineInfo>): ShowDesktopMonitorDataResponse {
        this['user_online_info'] = userOnlineInfo;
        return this;
    }
    public set userOnlineInfo(userOnlineInfo: Array<MonitorUserOnlineInfo>  | undefined) {
        this['user_online_info'] = userOnlineInfo;
    }
    public get userOnlineInfo(): Array<MonitorUserOnlineInfo> | undefined {
        return this['user_online_info'];
    }
    public withOnlineStatus(onlineStatus: number): ShowDesktopMonitorDataResponse {
        this['online_status'] = onlineStatus;
        return this;
    }
    public set onlineStatus(onlineStatus: number  | undefined) {
        this['online_status'] = onlineStatus;
    }
    public get onlineStatus(): number | undefined {
        return this['online_status'];
    }
    public withCpuInfo(cpuInfo: Array<Datapoints>): ShowDesktopMonitorDataResponse {
        this['cpu_info'] = cpuInfo;
        return this;
    }
    public set cpuInfo(cpuInfo: Array<Datapoints>  | undefined) {
        this['cpu_info'] = cpuInfo;
    }
    public get cpuInfo(): Array<Datapoints> | undefined {
        return this['cpu_info'];
    }
    public withMemoryInfo(memoryInfo: Array<Datapoints>): ShowDesktopMonitorDataResponse {
        this['memory_info'] = memoryInfo;
        return this;
    }
    public set memoryInfo(memoryInfo: Array<Datapoints>  | undefined) {
        this['memory_info'] = memoryInfo;
    }
    public get memoryInfo(): Array<Datapoints> | undefined {
        return this['memory_info'];
    }
    public withDiskUtilInband(diskUtilInband: Array<Datapoints>): ShowDesktopMonitorDataResponse {
        this['disk_util_inband'] = diskUtilInband;
        return this;
    }
    public set diskUtilInband(diskUtilInband: Array<Datapoints>  | undefined) {
        this['disk_util_inband'] = diskUtilInband;
    }
    public get diskUtilInband(): Array<Datapoints> | undefined {
        return this['disk_util_inband'];
    }
    public withDiskReadBytesRate(diskReadBytesRate: Array<Datapoints>): ShowDesktopMonitorDataResponse {
        this['disk_read_bytes_rate'] = diskReadBytesRate;
        return this;
    }
    public set diskReadBytesRate(diskReadBytesRate: Array<Datapoints>  | undefined) {
        this['disk_read_bytes_rate'] = diskReadBytesRate;
    }
    public get diskReadBytesRate(): Array<Datapoints> | undefined {
        return this['disk_read_bytes_rate'];
    }
    public withDiskWriteBytesRate(diskWriteBytesRate: Array<Datapoints>): ShowDesktopMonitorDataResponse {
        this['disk_write_bytes_rate'] = diskWriteBytesRate;
        return this;
    }
    public set diskWriteBytesRate(diskWriteBytesRate: Array<Datapoints>  | undefined) {
        this['disk_write_bytes_rate'] = diskWriteBytesRate;
    }
    public get diskWriteBytesRate(): Array<Datapoints> | undefined {
        return this['disk_write_bytes_rate'];
    }
    public withDiskReadRequestsRate(diskReadRequestsRate: Array<Datapoints>): ShowDesktopMonitorDataResponse {
        this['disk_read_requests_rate'] = diskReadRequestsRate;
        return this;
    }
    public set diskReadRequestsRate(diskReadRequestsRate: Array<Datapoints>  | undefined) {
        this['disk_read_requests_rate'] = diskReadRequestsRate;
    }
    public get diskReadRequestsRate(): Array<Datapoints> | undefined {
        return this['disk_read_requests_rate'];
    }
    public withDiskWriteRequestsRate(diskWriteRequestsRate: Array<Datapoints>): ShowDesktopMonitorDataResponse {
        this['disk_write_requests_rate'] = diskWriteRequestsRate;
        return this;
    }
    public set diskWriteRequestsRate(diskWriteRequestsRate: Array<Datapoints>  | undefined) {
        this['disk_write_requests_rate'] = diskWriteRequestsRate;
    }
    public get diskWriteRequestsRate(): Array<Datapoints> | undefined {
        return this['disk_write_requests_rate'];
    }
    public withNetworkIncomingBytesRateInband(networkIncomingBytesRateInband: Array<Datapoints>): ShowDesktopMonitorDataResponse {
        this['network_incoming_bytes_rate_inband'] = networkIncomingBytesRateInband;
        return this;
    }
    public set networkIncomingBytesRateInband(networkIncomingBytesRateInband: Array<Datapoints>  | undefined) {
        this['network_incoming_bytes_rate_inband'] = networkIncomingBytesRateInband;
    }
    public get networkIncomingBytesRateInband(): Array<Datapoints> | undefined {
        return this['network_incoming_bytes_rate_inband'];
    }
    public withNetworkOutgoingBytesRateInband(networkOutgoingBytesRateInband: Array<Datapoints>): ShowDesktopMonitorDataResponse {
        this['network_outgoing_bytes_rate_inband'] = networkOutgoingBytesRateInband;
        return this;
    }
    public set networkOutgoingBytesRateInband(networkOutgoingBytesRateInband: Array<Datapoints>  | undefined) {
        this['network_outgoing_bytes_rate_inband'] = networkOutgoingBytesRateInband;
    }
    public get networkOutgoingBytesRateInband(): Array<Datapoints> | undefined {
        return this['network_outgoing_bytes_rate_inband'];
    }
    public withNetworkIncomingBytesAggregateRate(networkIncomingBytesAggregateRate: Array<Datapoints>): ShowDesktopMonitorDataResponse {
        this['network_incoming_bytes_aggregate_rate'] = networkIncomingBytesAggregateRate;
        return this;
    }
    public set networkIncomingBytesAggregateRate(networkIncomingBytesAggregateRate: Array<Datapoints>  | undefined) {
        this['network_incoming_bytes_aggregate_rate'] = networkIncomingBytesAggregateRate;
    }
    public get networkIncomingBytesAggregateRate(): Array<Datapoints> | undefined {
        return this['network_incoming_bytes_aggregate_rate'];
    }
    public withNetworkOutgoingBytesAggregateRate(networkOutgoingBytesAggregateRate: Array<Datapoints>): ShowDesktopMonitorDataResponse {
        this['network_outgoing_bytes_aggregate_rate'] = networkOutgoingBytesAggregateRate;
        return this;
    }
    public set networkOutgoingBytesAggregateRate(networkOutgoingBytesAggregateRate: Array<Datapoints>  | undefined) {
        this['network_outgoing_bytes_aggregate_rate'] = networkOutgoingBytesAggregateRate;
    }
    public get networkOutgoingBytesAggregateRate(): Array<Datapoints> | undefined {
        return this['network_outgoing_bytes_aggregate_rate'];
    }
    public withNetworkVmConnections(networkVmConnections: Array<Datapoints>): ShowDesktopMonitorDataResponse {
        this['network_vm_connections'] = networkVmConnections;
        return this;
    }
    public set networkVmConnections(networkVmConnections: Array<Datapoints>  | undefined) {
        this['network_vm_connections'] = networkVmConnections;
    }
    public get networkVmConnections(): Array<Datapoints> | undefined {
        return this['network_vm_connections'];
    }
}