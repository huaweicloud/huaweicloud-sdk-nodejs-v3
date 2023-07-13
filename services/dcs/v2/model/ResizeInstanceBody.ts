import { BssParamEntity } from './BssParamEntity';


export class ResizeInstanceBody {
    private 'spec_code': string | undefined;
    private 'new_capacity': number | undefined;
    private 'bss_param'?: BssParamEntity | undefined;
    private 'reserved_ip'?: Array<string> | undefined;
    private 'change_type'?: ResizeInstanceBodyChangeTypeEnum | undefined;
    private 'available_zones'?: Array<string> | undefined;
    private 'node_list'?: Array<string> | undefined;
    private 'execute_immediately'?: boolean | undefined;
    public constructor(specCode?: any, newCapacity?: any) { 
        this['spec_code'] = specCode;
        this['new_capacity'] = newCapacity;
    }
    public withSpecCode(specCode: string): ResizeInstanceBody {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode() {
        return this['spec_code'];
    }
    public withNewCapacity(newCapacity: number): ResizeInstanceBody {
        this['new_capacity'] = newCapacity;
        return this;
    }
    public set newCapacity(newCapacity: number | undefined) {
        this['new_capacity'] = newCapacity;
    }
    public get newCapacity() {
        return this['new_capacity'];
    }
    public withBssParam(bssParam: BssParamEntity): ResizeInstanceBody {
        this['bss_param'] = bssParam;
        return this;
    }
    public set bssParam(bssParam: BssParamEntity | undefined) {
        this['bss_param'] = bssParam;
    }
    public get bssParam() {
        return this['bss_param'];
    }
    public withReservedIp(reservedIp: Array<string>): ResizeInstanceBody {
        this['reserved_ip'] = reservedIp;
        return this;
    }
    public set reservedIp(reservedIp: Array<string> | undefined) {
        this['reserved_ip'] = reservedIp;
    }
    public get reservedIp() {
        return this['reserved_ip'];
    }
    public withChangeType(changeType: ResizeInstanceBodyChangeTypeEnum): ResizeInstanceBody {
        this['change_type'] = changeType;
        return this;
    }
    public set changeType(changeType: ResizeInstanceBodyChangeTypeEnum | undefined) {
        this['change_type'] = changeType;
    }
    public get changeType() {
        return this['change_type'];
    }
    public withAvailableZones(availableZones: Array<string>): ResizeInstanceBody {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string> | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones() {
        return this['available_zones'];
    }
    public withNodeList(nodeList: Array<string>): ResizeInstanceBody {
        this['node_list'] = nodeList;
        return this;
    }
    public set nodeList(nodeList: Array<string> | undefined) {
        this['node_list'] = nodeList;
    }
    public get nodeList() {
        return this['node_list'];
    }
    public withExecuteImmediately(executeImmediately: boolean): ResizeInstanceBody {
        this['execute_immediately'] = executeImmediately;
        return this;
    }
    public set executeImmediately(executeImmediately: boolean | undefined) {
        this['execute_immediately'] = executeImmediately;
    }
    public get executeImmediately() {
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
