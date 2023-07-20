import { AuthInfo } from './AuthInfo';
import { InitialDesired } from './InitialDesired';


export class AddDevice {
    private 'device_id'?: string;
    private 'node_id'?: string;
    private 'device_name'?: string;
    private 'product_id'?: string;
    private 'auth_info'?: AuthInfo;
    public description?: string;
    private 'gateway_id'?: string;
    private 'app_id'?: string;
    private 'extension_info'?: object;
    public shadow?: Array<InitialDesired>;
    public constructor(nodeId?: string, productId?: string) { 
        this['node_id'] = nodeId;
        this['product_id'] = productId;
    }
    public withDeviceId(deviceId: string): AddDevice {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withNodeId(nodeId: string): AddDevice {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withDeviceName(deviceName: string): AddDevice {
        this['device_name'] = deviceName;
        return this;
    }
    public set deviceName(deviceName: string  | undefined) {
        this['device_name'] = deviceName;
    }
    public get deviceName(): string | undefined {
        return this['device_name'];
    }
    public withProductId(productId: string): AddDevice {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withAuthInfo(authInfo: AuthInfo): AddDevice {
        this['auth_info'] = authInfo;
        return this;
    }
    public set authInfo(authInfo: AuthInfo  | undefined) {
        this['auth_info'] = authInfo;
    }
    public get authInfo(): AuthInfo | undefined {
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
    public set gatewayId(gatewayId: string  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): string | undefined {
        return this['gateway_id'];
    }
    public withAppId(appId: string): AddDevice {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withExtensionInfo(extensionInfo: object): AddDevice {
        this['extension_info'] = extensionInfo;
        return this;
    }
    public set extensionInfo(extensionInfo: object  | undefined) {
        this['extension_info'] = extensionInfo;
    }
    public get extensionInfo(): object | undefined {
        return this['extension_info'];
    }
    public withShadow(shadow: Array<InitialDesired>): AddDevice {
        this['shadow'] = shadow;
        return this;
    }
}