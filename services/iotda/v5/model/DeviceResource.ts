import { ParameterRef } from './ParameterRef';
import { TagRef } from './TagRef';


export class DeviceResource {
    private 'device_name'?: ParameterRef;
    private 'node_id'?: ParameterRef;
    private 'product_id'?: object;
    public tags?: Array<TagRef>;
    public constructor(nodeId?: ParameterRef, productId?: object) { 
        this['node_id'] = nodeId;
        this['product_id'] = productId;
    }
    public withDeviceName(deviceName: ParameterRef): DeviceResource {
        this['device_name'] = deviceName;
        return this;
    }
    public set deviceName(deviceName: ParameterRef  | undefined) {
        this['device_name'] = deviceName;
    }
    public get deviceName(): ParameterRef | undefined {
        return this['device_name'];
    }
    public withNodeId(nodeId: ParameterRef): DeviceResource {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: ParameterRef  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): ParameterRef | undefined {
        return this['node_id'];
    }
    public withProductId(productId: object): DeviceResource {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: object  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): object | undefined {
        return this['product_id'];
    }
    public withTags(tags: Array<TagRef>): DeviceResource {
        this['tags'] = tags;
        return this;
    }
}