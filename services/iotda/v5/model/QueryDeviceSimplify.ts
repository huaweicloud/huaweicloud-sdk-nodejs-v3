import { TagV5DTO } from './TagV5DTO';


export class QueryDeviceSimplify {
    private 'app_id'?: string | undefined;
    private 'app_name'?: string | undefined;
    private 'device_id'?: string | undefined;
    private 'node_id'?: string | undefined;
    private 'gateway_id'?: string | undefined;
    private 'device_name'?: string | undefined;
    private 'node_type'?: string | undefined;
    public description?: string;
    private 'fw_version'?: string | undefined;
    private 'sw_version'?: string | undefined;
    private 'product_id'?: string | undefined;
    private 'product_name'?: string | undefined;
    public status?: string;
    public tags?: Array<TagV5DTO>;
    public constructor() { 
    }
    public withAppId(appId: string): QueryDeviceSimplify {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withAppName(appName: string): QueryDeviceSimplify {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string | undefined) {
        this['app_name'] = appName;
    }
    public get appName() {
        return this['app_name'];
    }
    public withDeviceId(deviceId: string): QueryDeviceSimplify {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId() {
        return this['device_id'];
    }
    public withNodeId(nodeId: string): QueryDeviceSimplify {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId() {
        return this['node_id'];
    }
    public withGatewayId(gatewayId: string): QueryDeviceSimplify {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId() {
        return this['gateway_id'];
    }
    public withDeviceName(deviceName: string): QueryDeviceSimplify {
        this['device_name'] = deviceName;
        return this;
    }
    public set deviceName(deviceName: string | undefined) {
        this['device_name'] = deviceName;
    }
    public get deviceName() {
        return this['device_name'];
    }
    public withNodeType(nodeType: string): QueryDeviceSimplify {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: string | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType() {
        return this['node_type'];
    }
    public withDescription(description: string): QueryDeviceSimplify {
        this['description'] = description;
        return this;
    }
    public withFwVersion(fwVersion: string): QueryDeviceSimplify {
        this['fw_version'] = fwVersion;
        return this;
    }
    public set fwVersion(fwVersion: string | undefined) {
        this['fw_version'] = fwVersion;
    }
    public get fwVersion() {
        return this['fw_version'];
    }
    public withSwVersion(swVersion: string): QueryDeviceSimplify {
        this['sw_version'] = swVersion;
        return this;
    }
    public set swVersion(swVersion: string | undefined) {
        this['sw_version'] = swVersion;
    }
    public get swVersion() {
        return this['sw_version'];
    }
    public withProductId(productId: string): QueryDeviceSimplify {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string | undefined) {
        this['product_id'] = productId;
    }
    public get productId() {
        return this['product_id'];
    }
    public withProductName(productName: string): QueryDeviceSimplify {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string | undefined) {
        this['product_name'] = productName;
    }
    public get productName() {
        return this['product_name'];
    }
    public withStatus(status: string): QueryDeviceSimplify {
        this['status'] = status;
        return this;
    }
    public withTags(tags: Array<TagV5DTO>): QueryDeviceSimplify {
        this['tags'] = tags;
        return this;
    }
}