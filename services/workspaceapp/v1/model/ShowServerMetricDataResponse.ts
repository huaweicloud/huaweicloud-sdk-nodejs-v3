import { DataPoints } from './DataPoints';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowServerMetricDataResponse extends SdkResponse {
    private 'cpu_info'?: Array<DataPoints>;
    private 'memory_info'?: Array<DataPoints>;
    private 'disk_util_inband'?: Array<DataPoints>;
    private 'disk_read_bytes_rate'?: Array<DataPoints>;
    private 'disk_write_bytes_rate'?: Array<DataPoints>;
    private 'disk_read_requests_rate'?: Array<DataPoints>;
    private 'disk_write_requests_rate'?: Array<DataPoints>;
    private 'network_incoming_bytes_rate_inband'?: Array<DataPoints>;
    private 'network_outgoing_bytes_rate_inband'?: Array<DataPoints>;
    private 'network_incoming_bytes_aggregate_rate'?: Array<DataPoints>;
    private 'network_outgoing_bytes_aggregate_rate'?: Array<DataPoints>;
    private 'network_vm_connections'?: Array<DataPoints>;
    public constructor() { 
        super();
    }
    public withCpuInfo(cpuInfo: Array<DataPoints>): ShowServerMetricDataResponse {
        this['cpu_info'] = cpuInfo;
        return this;
    }
    public set cpuInfo(cpuInfo: Array<DataPoints>  | undefined) {
        this['cpu_info'] = cpuInfo;
    }
    public get cpuInfo(): Array<DataPoints> | undefined {
        return this['cpu_info'];
    }
    public withMemoryInfo(memoryInfo: Array<DataPoints>): ShowServerMetricDataResponse {
        this['memory_info'] = memoryInfo;
        return this;
    }
    public set memoryInfo(memoryInfo: Array<DataPoints>  | undefined) {
        this['memory_info'] = memoryInfo;
    }
    public get memoryInfo(): Array<DataPoints> | undefined {
        return this['memory_info'];
    }
    public withDiskUtilInband(diskUtilInband: Array<DataPoints>): ShowServerMetricDataResponse {
        this['disk_util_inband'] = diskUtilInband;
        return this;
    }
    public set diskUtilInband(diskUtilInband: Array<DataPoints>  | undefined) {
        this['disk_util_inband'] = diskUtilInband;
    }
    public get diskUtilInband(): Array<DataPoints> | undefined {
        return this['disk_util_inband'];
    }
    public withDiskReadBytesRate(diskReadBytesRate: Array<DataPoints>): ShowServerMetricDataResponse {
        this['disk_read_bytes_rate'] = diskReadBytesRate;
        return this;
    }
    public set diskReadBytesRate(diskReadBytesRate: Array<DataPoints>  | undefined) {
        this['disk_read_bytes_rate'] = diskReadBytesRate;
    }
    public get diskReadBytesRate(): Array<DataPoints> | undefined {
        return this['disk_read_bytes_rate'];
    }
    public withDiskWriteBytesRate(diskWriteBytesRate: Array<DataPoints>): ShowServerMetricDataResponse {
        this['disk_write_bytes_rate'] = diskWriteBytesRate;
        return this;
    }
    public set diskWriteBytesRate(diskWriteBytesRate: Array<DataPoints>  | undefined) {
        this['disk_write_bytes_rate'] = diskWriteBytesRate;
    }
    public get diskWriteBytesRate(): Array<DataPoints> | undefined {
        return this['disk_write_bytes_rate'];
    }
    public withDiskReadRequestsRate(diskReadRequestsRate: Array<DataPoints>): ShowServerMetricDataResponse {
        this['disk_read_requests_rate'] = diskReadRequestsRate;
        return this;
    }
    public set diskReadRequestsRate(diskReadRequestsRate: Array<DataPoints>  | undefined) {
        this['disk_read_requests_rate'] = diskReadRequestsRate;
    }
    public get diskReadRequestsRate(): Array<DataPoints> | undefined {
        return this['disk_read_requests_rate'];
    }
    public withDiskWriteRequestsRate(diskWriteRequestsRate: Array<DataPoints>): ShowServerMetricDataResponse {
        this['disk_write_requests_rate'] = diskWriteRequestsRate;
        return this;
    }
    public set diskWriteRequestsRate(diskWriteRequestsRate: Array<DataPoints>  | undefined) {
        this['disk_write_requests_rate'] = diskWriteRequestsRate;
    }
    public get diskWriteRequestsRate(): Array<DataPoints> | undefined {
        return this['disk_write_requests_rate'];
    }
    public withNetworkIncomingBytesRateInband(networkIncomingBytesRateInband: Array<DataPoints>): ShowServerMetricDataResponse {
        this['network_incoming_bytes_rate_inband'] = networkIncomingBytesRateInband;
        return this;
    }
    public set networkIncomingBytesRateInband(networkIncomingBytesRateInband: Array<DataPoints>  | undefined) {
        this['network_incoming_bytes_rate_inband'] = networkIncomingBytesRateInband;
    }
    public get networkIncomingBytesRateInband(): Array<DataPoints> | undefined {
        return this['network_incoming_bytes_rate_inband'];
    }
    public withNetworkOutgoingBytesRateInband(networkOutgoingBytesRateInband: Array<DataPoints>): ShowServerMetricDataResponse {
        this['network_outgoing_bytes_rate_inband'] = networkOutgoingBytesRateInband;
        return this;
    }
    public set networkOutgoingBytesRateInband(networkOutgoingBytesRateInband: Array<DataPoints>  | undefined) {
        this['network_outgoing_bytes_rate_inband'] = networkOutgoingBytesRateInband;
    }
    public get networkOutgoingBytesRateInband(): Array<DataPoints> | undefined {
        return this['network_outgoing_bytes_rate_inband'];
    }
    public withNetworkIncomingBytesAggregateRate(networkIncomingBytesAggregateRate: Array<DataPoints>): ShowServerMetricDataResponse {
        this['network_incoming_bytes_aggregate_rate'] = networkIncomingBytesAggregateRate;
        return this;
    }
    public set networkIncomingBytesAggregateRate(networkIncomingBytesAggregateRate: Array<DataPoints>  | undefined) {
        this['network_incoming_bytes_aggregate_rate'] = networkIncomingBytesAggregateRate;
    }
    public get networkIncomingBytesAggregateRate(): Array<DataPoints> | undefined {
        return this['network_incoming_bytes_aggregate_rate'];
    }
    public withNetworkOutgoingBytesAggregateRate(networkOutgoingBytesAggregateRate: Array<DataPoints>): ShowServerMetricDataResponse {
        this['network_outgoing_bytes_aggregate_rate'] = networkOutgoingBytesAggregateRate;
        return this;
    }
    public set networkOutgoingBytesAggregateRate(networkOutgoingBytesAggregateRate: Array<DataPoints>  | undefined) {
        this['network_outgoing_bytes_aggregate_rate'] = networkOutgoingBytesAggregateRate;
    }
    public get networkOutgoingBytesAggregateRate(): Array<DataPoints> | undefined {
        return this['network_outgoing_bytes_aggregate_rate'];
    }
    public withNetworkVmConnections(networkVmConnections: Array<DataPoints>): ShowServerMetricDataResponse {
        this['network_vm_connections'] = networkVmConnections;
        return this;
    }
    public set networkVmConnections(networkVmConnections: Array<DataPoints>  | undefined) {
        this['network_vm_connections'] = networkVmConnections;
    }
    public get networkVmConnections(): Array<DataPoints> | undefined {
        return this['network_vm_connections'];
    }
}