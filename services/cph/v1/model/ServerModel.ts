import { ServerModelExtendSpec } from './ServerModelExtendSpec';


export class ServerModel {
    private 'server_model_name'?: string;
    private 'server_type'?: string;
    public cpu?: number;
    public memory?: number;
    private 'extend_spec'?: ServerModelExtendSpec;
    private 'disk_max_num'?: number;
    private 'product_type'?: number;
    private 'free_size'?: number;
    public constructor() { 
    }
    public withServerModelName(serverModelName: string): ServerModel {
        this['server_model_name'] = serverModelName;
        return this;
    }
    public set serverModelName(serverModelName: string  | undefined) {
        this['server_model_name'] = serverModelName;
    }
    public get serverModelName(): string | undefined {
        return this['server_model_name'];
    }
    public withServerType(serverType: string): ServerModel {
        this['server_type'] = serverType;
        return this;
    }
    public set serverType(serverType: string  | undefined) {
        this['server_type'] = serverType;
    }
    public get serverType(): string | undefined {
        return this['server_type'];
    }
    public withCpu(cpu: number): ServerModel {
        this['cpu'] = cpu;
        return this;
    }
    public withMemory(memory: number): ServerModel {
        this['memory'] = memory;
        return this;
    }
    public withExtendSpec(extendSpec: ServerModelExtendSpec): ServerModel {
        this['extend_spec'] = extendSpec;
        return this;
    }
    public set extendSpec(extendSpec: ServerModelExtendSpec  | undefined) {
        this['extend_spec'] = extendSpec;
    }
    public get extendSpec(): ServerModelExtendSpec | undefined {
        return this['extend_spec'];
    }
    public withDiskMaxNum(diskMaxNum: number): ServerModel {
        this['disk_max_num'] = diskMaxNum;
        return this;
    }
    public set diskMaxNum(diskMaxNum: number  | undefined) {
        this['disk_max_num'] = diskMaxNum;
    }
    public get diskMaxNum(): number | undefined {
        return this['disk_max_num'];
    }
    public withProductType(productType: number): ServerModel {
        this['product_type'] = productType;
        return this;
    }
    public set productType(productType: number  | undefined) {
        this['product_type'] = productType;
    }
    public get productType(): number | undefined {
        return this['product_type'];
    }
    public withFreeSize(freeSize: number): ServerModel {
        this['free_size'] = freeSize;
        return this;
    }
    public set freeSize(freeSize: number  | undefined) {
        this['free_size'] = freeSize;
    }
    public get freeSize(): number | undefined {
        return this['free_size'];
    }
}