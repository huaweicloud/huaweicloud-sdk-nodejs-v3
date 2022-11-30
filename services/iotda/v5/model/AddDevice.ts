import { AuthInfo } from './AuthInfo';
import { InitialDesired } from './InitialDesired';


export class AddDevice {
    private 'device_id'?: string | undefined;
    private 'node_id': string | undefined;
    private 'device_name'?: string | undefined;
    private 'product_id': string | undefined;
    private 'auth_info'?: AuthInfo | undefined;
    public description?: string;
    private 'gateway_id'?: string | undefined;
    private 'app_id'?: string | undefined;
    private 'extension_info'?: object | undefined;
    public shadow?: Array<InitialDesired>;
    public constructor(nodeId?: any, productId?: any) { 
        this['node_id'] = nodeId;
        this['product_id'] = productId;
    }
    public withDeviceId(deviceId: string): AddDevice {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId() {
        return this['device_id'];
    }
    public withNodeId(nodeId: string): AddDevice {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId() {
        return this['node_id'];
    }
    public withDeviceName(deviceName: string): AddDevice {
        this['device_name'] = deviceName;
        return this;
    }
    public set deviceName(deviceName: string | undefined) {
        this['device_name'] = deviceName;
    }
    public get deviceName() {
        return this['device_name'];
    }
    public withProductId(productId: string): AddDevice {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string | undefined) {
        this['product_id'] = productId;
    }
    public get productId() {
        return this['product_id'];
    }
    public withAuthInfo(authInfo: AuthInfo): AddDevice {
        this['auth_info'] = authInfo;
        return this;
    }
    public set authInfo(authInfo: AuthInfo | undefined) {
        this['auth_info'] = authInfo;
    }
    public get authInfo() {
        return this['auth_info'];
    }
    public withDescription(description: string): AddDevice {
        this['description'] = description;
        return this;
    }
    public withGatewayId(gatewayId: string): AddDevice {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId() {
        return this['gateway_id'];
    }
    public withAppId(appId: string): AddDevice {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withExtensionInfo(extensionInfo: object): AddDevice {
        this['extension_info'] = extensionInfo;
        return this;
    }
    public set extensionInfo(extensionInfo: object | undefined) {
        this['extension_info'] = extensionInfo;
    }
    public get extensionInfo() {
        return this['extension_info'];
    }
    public withShadow(shadow: Array<InitialDesired>): AddDevice {
        this['shadow'] = shadow;
        return this;
    }
}