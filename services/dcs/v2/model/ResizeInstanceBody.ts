import { BssParamEntity } from './BssParamEntity';


export class ResizeInstanceBody {
    private 'spec_code'?: string;
    private 'new_capacity'?: number;
    private 'bss_param'?: BssParamEntity;
    private 'reserved_ip'?: Array<string>;
    private 'change_type'?: ResizeInstanceBodyChangeTypeEnum | string;
    private 'available_zones'?: Array<string>;
    private 'node_list'?: Array<string>;
    private 'execute_immediately'?: boolean;
    public constructor(specCode?: string, newCapacity?: number) { 
        this['spec_code'] = specCode;
        this['new_capacity'] = newCapacity;
    }
    public withSpecCode(specCode: string): ResizeInstanceBody {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withNewCapacity(newCapacity: number): ResizeInstanceBody {
        this['new_capacity'] = newCapacity;
        return this;
    }
    public set newCapacity(newCapacity: number  | undefined) {
        this['new_capacity'] = newCapacity;
    }
    public get newCapacity(): number | undefined {
        return this['new_capacity'];
    }
    public withBssParam(bssParam: BssParamEntity): ResizeInstanceBody {
        this['bss_param'] = bssParam;
        return this;
    }
    public set bssParam(bssParam: BssParamEntity  | undefined) {
        this['bss_param'] = bssParam;
    }
    public get bssParam(): BssParamEntity | undefined {
        return this['bss_param'];
    }
    public withReservedIp(reservedIp: Array<string>): ResizeInstanceBody {
        this['reserved_ip'] = reservedIp;
        return this;
    }
    public set reservedIp(reservedIp: Array<string>  | undefined) {
        this['reserved_ip'] = reservedIp;
    }
    public get reservedIp(): Array<string> | undefined {
        return this['reserved_ip'];
    }
    public withChangeType(changeType: ResizeInstanceBodyChangeTypeEnum | string): ResizeInstanceBody {
        this['change_type'] = changeType;
        return this;
    }
    public set changeType(changeType: ResizeInstanceBodyChangeTypeEnum | string  | undefined) {
        this['change_type'] = changeType;
    }
    public get changeType(): ResizeInstanceBodyChangeTypeEnum | string | undefined {
        return this['change_type'];
    }
    public withAvailableZones(availableZones: Array<string>): ResizeInstanceBody {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string>  | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones(): Array<string> | undefined {
        return this['available_zones'];
    }
    public withNodeList(nodeList: Array<string>): ResizeInstanceBody {
        this['node_list'] = nodeList;
        return this;
    }
    public set nodeList(nodeList: Array<string>  | undefined) {
        this['node_list'] = nodeList;
    }
    public get nodeList(): Array<string> | undefined {
        return this['node_list'];
    }
    public withExecuteImmediately(executeImmediately: boolean): ResizeInstanceBody {
        this['execute_immediately'] = executeImmediately;
        return this;
    }
    public set executeImmediately(executeImmediately: boolean  | undefined) {
        this['execute_immediately'] = executeImmediately;
    }
    public get executeImmediately(): boolean | undefined {
        return this['execute_immediately'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResizeInstanceBodyChangeTypeEnum {
    CREATEREPLICATION = 'createReplication',
    DELETEREPLICATION = 'deleteReplication'
}
