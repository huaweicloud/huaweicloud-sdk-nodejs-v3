import { AuthInfoRes } from './AuthInfoRes';
import { TagV5DTO } from './TagV5DTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDeviceResponse extends SdkResponse {
    private 'app_id'?: string;
    private 'app_name'?: string;
    private 'device_id'?: string;
    private 'node_id'?: string;
    private 'gateway_id'?: string;
    private 'device_name'?: string;
    private 'node_type'?: string;
    public description?: string;
    private 'fw_version'?: string;
    private 'sw_version'?: string;
    private 'device_sdk_version'?: string;
    private 'auth_info'?: AuthInfoRes;
    private 'product_id'?: string;
    private 'product_name'?: string;
    public status?: string;
    private 'create_time'?: string;
    private 'connection_status_update_time'?: string;
    private 'active_time'?: string;
    public tags?: Array<TagV5DTO>;
    private 'extension_info'?: object;
    public constructor() { 
        super();
    }
    public withAppId(appId: string): ShowDeviceResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAppName(appName: string): ShowDeviceResponse {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withDeviceId(deviceId: string): ShowDeviceResponse {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withNodeId(nodeId: string): ShowDeviceResponse {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withGatewayId(gatewayId: string): ShowDeviceResponse {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): string | undefined {
        return this['gateway_id'];
    }
    public withDeviceName(deviceName: string): ShowDeviceResponse {
        this['device_name'] = deviceName;
        return this;
    }
    public set deviceName(deviceName: string  | undefined) {
        this['device_name'] = deviceName;
    }
    public get deviceName(): string | undefined {
        return this['device_name'];
    }
    public withNodeType(nodeType: string): ShowDeviceResponse {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): string | undefined {
        return this['node_type'];
    }
    public withDescription(description: string): ShowDeviceResponse {
        this['description'] = description;
        return this;
    }
    public withFwVersion(fwVersion: string): ShowDeviceResponse {
        this['fw_version'] = fwVersion;
        return this;
    }
    public set fwVersion(fwVersion: string  | undefined) {
        this['fw_version'] = fwVersion;
    }
    public get fwVersion(): string | undefined {
        return this['fw_version'];
    }
    public withSwVersion(swVersion: string): ShowDeviceResponse {
        this['sw_version'] = swVersion;
        return this;
    }
    public set swVersion(swVersion: string  | undefined) {
        this['sw_version'] = swVersion;
    }
    public get swVersion(): string | undefined {
        return this['sw_version'];
    }
    public withDeviceSdkVersion(deviceSdkVersion: string): ShowDeviceResponse {
        this['device_sdk_version'] = deviceSdkVersion;
        return this;
    }
    public set deviceSdkVersion(deviceSdkVersion: string  | undefined) {
        this['device_sdk_version'] = deviceSdkVersion;
    }
    public get deviceSdkVersion(): string | undefined {
        return this['device_sdk_version'];
    }
    public withAuthInfo(authInfo: AuthInfoRes): ShowDeviceResponse {
        this['auth_info'] = authInfo;
        return this;
    }
    public set authInfo(authInfo: AuthInfoRes  | undefined) {
        this['auth_info'] = authInfo;
    }
    public get authInfo(): AuthInfoRes | undefined {
        return this['auth_info'];
    }
    public withProductId(productId: string): ShowDeviceResponse {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withProductName(productName: string): ShowDeviceResponse {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string  | undefined) {
        this['product_name'] = productName;
    }
    public get productName(): string | undefined {
        return this['product_name'];
    }
    public withStatus(status: string): ShowDeviceResponse {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): ShowDeviceResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withConnectionStatusUpdateTime(connectionStatusUpdateTime: string): ShowDeviceResponse {
        this['connection_status_update_time'] = connectionStatusUpdateTime;
        return this;
    }
    public set connectionStatusUpdateTime(connectionStatusUpdateTime: string  | undefined) {
        this['connection_status_update_time'] = connectionStatusUpdateTime;
    }
    public get connectionStatusUpdateTime(): string | undefined {
        return this['connection_status_update_time'];
    }
    public withActiveTime(activeTime: string): ShowDeviceResponse {
        this['active_time'] = activeTime;
        return this;
    }
    public set activeTime(activeTime: string  | undefined) {
        this['active_time'] = activeTime;
    }
    public get activeTime(): string | undefined {
        return this['active_time'];
    }
    public withTags(tags: Array<TagV5DTO>): ShowDeviceResponse {
        this['tags'] = tags;
        return this;
    }
    public withExtensionInfo(extensionInfo: object): ShowDeviceResponse {
        this['extension_info'] = extensionInfo;
        return this;
    }
    public set extensionInfo(extensionInfo: object  | undefined) {
        this['extension_info'] = extensionInfo;
    }
    public get extensionInfo(): object | undefined {
        return this['extension_info'];
    }
}