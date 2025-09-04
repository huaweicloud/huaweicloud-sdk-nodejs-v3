import { EdgeDeviceAuthInfo } from './EdgeDeviceAuthInfo';


export class AddDeviceRequestBody {
    private 'node_id'?: string;
    private 'device_name'?: string;
    private 'product_id'?: string;
    private 'auth_info'?: EdgeDeviceAuthInfo;
    public description?: string;
    private 'gateway_id'?: string;
    private 'space_id'?: string;
    private 'extension_info'?: object;
    public config?: object;
    public constructor(nodeId?: string, productId?: string) { 
        this['node_id'] = nodeId;
        this['product_id'] = productId;
    }
    public withNodeId(nodeId: string): AddDeviceRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withDeviceName(deviceName: string): AddDeviceRequestBody {
        this['device_name'] = deviceName;
        return this;
    }
    public set deviceName(deviceName: string  | undefined) {
        this['device_name'] = deviceName;
    }
    public get deviceName(): string | undefined {
        return this['device_name'];
    }
    public withProductId(productId: string): AddDeviceRequestBody {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withAuthInfo(authInfo: EdgeDeviceAuthInfo): AddDeviceRequestBody {
        this['auth_info'] = authInfo;
        return this;
    }
    public set authInfo(authInfo: EdgeDeviceAuthInfo  | undefined) {
        this['auth_info'] = authInfo;
    }
    public get authInfo(): EdgeDeviceAuthInfo | undefined {
        return this['auth_info'];
    }
    public withDescription(description: string): AddDeviceRequestBody {
        this['description'] = description;
        return this;
    }
    public withGatewayId(gatewayId: string): AddDeviceRequestBody {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): string | undefined {
        return this['gateway_id'];
    }
    public withSpaceId(spaceId: string): AddDeviceRequestBody {
        this['space_id'] = spaceId;
        return this;
    }
    public set spaceId(spaceId: string  | undefined) {
        this['space_id'] = spaceId;
    }
    public get spaceId(): string | undefined {
        return this['space_id'];
    }
    public withExtensionInfo(extensionInfo: object): AddDeviceRequestBody {
        this['extension_info'] = extensionInfo;
        return this;
    }
    public set extensionInfo(extensionInfo: object  | undefined) {
        this['extension_info'] = extensionInfo;
    }
    public get extensionInfo(): object | undefined {
        return this['extension_info'];
    }
    public withConfig(config: object): AddDeviceRequestBody {
        this['config'] = config;
        return this;
    }
}