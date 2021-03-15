

export class SimplifyDevice {
    private 'device_id'?: string | undefined;
    private 'node_id'?: string | undefined;
    private 'device_name'?: string | undefined;
    private 'product_id'?: string | undefined;
    public constructor() { 
    }
    public withDeviceId(deviceId: string): SimplifyDevice {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId() {
        return this['device_id'];
    }
    public withNodeId(nodeId: string): SimplifyDevice {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId() {
        return this['node_id'];
    }
    public withDeviceName(deviceName: string): SimplifyDevice {
        this['device_name'] = deviceName;
        return this;
    }
    public set deviceName(deviceName: string | undefined) {
        this['device_name'] = deviceName;
    }
    public get deviceName() {
        return this['device_name'];
    }
    public withProductId(productId: string): SimplifyDevice {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string | undefined) {
        this['product_id'] = productId;
    }
    public get productId() {
        return this['product_id'];
    }
}