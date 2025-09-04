import { BasePathDTO } from './BasePathDTO';
import { DeviceDataRecord } from './DeviceDataRecord';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateEdgeNodeResponse extends SdkResponse {
    private 'edge_node_id'?: string;
    public name?: string;
    private 'instance_id'?: string;
    private 'space_id'?: string;
    private 'product_id'?: string;
    private 'product_name'?: string;
    public state?: string;
    public type?: string;
    private 'installer_version'?: string;
    private 'base_path'?: BasePathDTO;
    private 'resource_ids'?: Array<string>;
    public ips?: Array<string>;
    private 'create_time'?: string;
    private 'hardware_model'?: string;
    private 'device_data_format'?: string;
    private 'automatic_upgrade'?: string;
    private 'device_data_record'?: DeviceDataRecord;
    private 'metric_report'?: string;
    public constructor() { 
        super();
    }
    public withEdgeNodeId(edgeNodeId: string): CreateEdgeNodeResponse {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withName(name: string): CreateEdgeNodeResponse {
        this['name'] = name;
        return this;
    }
    public withInstanceId(instanceId: string): CreateEdgeNodeResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withSpaceId(spaceId: string): CreateEdgeNodeResponse {
        this['space_id'] = spaceId;
        return this;
    }
    public set spaceId(spaceId: string  | undefined) {
        this['space_id'] = spaceId;
    }
    public get spaceId(): string | undefined {
        return this['space_id'];
    }
    public withProductId(productId: string): CreateEdgeNodeResponse {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withProductName(productName: string): CreateEdgeNodeResponse {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string  | undefined) {
        this['product_name'] = productName;
    }
    public get productName(): string | undefined {
        return this['product_name'];
    }
    public withState(state: string): CreateEdgeNodeResponse {
        this['state'] = state;
        return this;
    }
    public withType(type: string): CreateEdgeNodeResponse {
        this['type'] = type;
        return this;
    }
    public withInstallerVersion(installerVersion: string): CreateEdgeNodeResponse {
        this['installer_version'] = installerVersion;
        return this;
    }
    public set installerVersion(installerVersion: string  | undefined) {
        this['installer_version'] = installerVersion;
    }
    public get installerVersion(): string | undefined {
        return this['installer_version'];
    }
    public withBasePath(basePath: BasePathDTO): CreateEdgeNodeResponse {
        this['base_path'] = basePath;
        return this;
    }
    public set basePath(basePath: BasePathDTO  | undefined) {
        this['base_path'] = basePath;
    }
    public get basePath(): BasePathDTO | undefined {
        return this['base_path'];
    }
    public withResourceIds(resourceIds: Array<string>): CreateEdgeNodeResponse {
        this['resource_ids'] = resourceIds;
        return this;
    }
    public set resourceIds(resourceIds: Array<string>  | undefined) {
        this['resource_ids'] = resourceIds;
    }
    public get resourceIds(): Array<string> | undefined {
        return this['resource_ids'];
    }
    public withIps(ips: Array<string>): CreateEdgeNodeResponse {
        this['ips'] = ips;
        return this;
    }
    public withCreateTime(createTime: string): CreateEdgeNodeResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withHardwareModel(hardwareModel: string): CreateEdgeNodeResponse {
        this['hardware_model'] = hardwareModel;
        return this;
    }
    public set hardwareModel(hardwareModel: string  | undefined) {
        this['hardware_model'] = hardwareModel;
    }
    public get hardwareModel(): string | undefined {
        return this['hardware_model'];
    }
    public withDeviceDataFormat(deviceDataFormat: string): CreateEdgeNodeResponse {
        this['device_data_format'] = deviceDataFormat;
        return this;
    }
    public set deviceDataFormat(deviceDataFormat: string  | undefined) {
        this['device_data_format'] = deviceDataFormat;
    }
    public get deviceDataFormat(): string | undefined {
        return this['device_data_format'];
    }
    public withAutomaticUpgrade(automaticUpgrade: string): CreateEdgeNodeResponse {
        this['automatic_upgrade'] = automaticUpgrade;
        return this;
    }
    public set automaticUpgrade(automaticUpgrade: string  | undefined) {
        this['automatic_upgrade'] = automaticUpgrade;
    }
    public get automaticUpgrade(): string | undefined {
        return this['automatic_upgrade'];
    }
    public withDeviceDataRecord(deviceDataRecord: DeviceDataRecord): CreateEdgeNodeResponse {
        this['device_data_record'] = deviceDataRecord;
        return this;
    }
    public set deviceDataRecord(deviceDataRecord: DeviceDataRecord  | undefined) {
        this['device_data_record'] = deviceDataRecord;
    }
    public get deviceDataRecord(): DeviceDataRecord | undefined {
        return this['device_data_record'];
    }
    public withMetricReport(metricReport: string): CreateEdgeNodeResponse {
        this['metric_report'] = metricReport;
        return this;
    }
    public set metricReport(metricReport: string  | undefined) {
        this['metric_report'] = metricReport;
    }
    public get metricReport(): string | undefined {
        return this['metric_report'];
    }
}