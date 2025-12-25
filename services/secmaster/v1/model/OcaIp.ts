import { OcaIpDataCenter } from './OcaIpDataCenter';
import { OcaIpExtendProperties } from './OcaIpExtendProperties';
import { OcaIpNetwork } from './OcaIpNetwork';


export class OcaIp {
    public value?: string;
    public version?: string;
    public network?: OcaIpNetwork;
    public remark?: string;
    public name?: string;
    private 'relative_value'?: string;
    private 'server_room'?: string;
    private 'server_rack'?: string;
    private 'data_center'?: OcaIpDataCenter;
    private 'mac_addr'?: string;
    public important?: string;
    private 'extend_properties'?: OcaIpExtendProperties;
    public constructor(value?: string, version?: string, network?: OcaIpNetwork, serverRoom?: string, serverRack?: string, dataCenter?: OcaIpDataCenter) { 
        this['value'] = value;
        this['version'] = version;
        this['network'] = network;
        this['server_room'] = serverRoom;
        this['server_rack'] = serverRack;
        this['data_center'] = dataCenter;
    }
    public withValue(value: string): OcaIp {
        this['value'] = value;
        return this;
    }
    public withVersion(version: string): OcaIp {
        this['version'] = version;
        return this;
    }
    public withNetwork(network: OcaIpNetwork): OcaIp {
        this['network'] = network;
        return this;
    }
    public withRemark(remark: string): OcaIp {
        this['remark'] = remark;
        return this;
    }
    public withName(name: string): OcaIp {
        this['name'] = name;
        return this;
    }
    public withRelativeValue(relativeValue: string): OcaIp {
        this['relative_value'] = relativeValue;
        return this;
    }
    public set relativeValue(relativeValue: string  | undefined) {
        this['relative_value'] = relativeValue;
    }
    public get relativeValue(): string | undefined {
        return this['relative_value'];
    }
    public withServerRoom(serverRoom: string): OcaIp {
        this['server_room'] = serverRoom;
        return this;
    }
    public set serverRoom(serverRoom: string  | undefined) {
        this['server_room'] = serverRoom;
    }
    public get serverRoom(): string | undefined {
        return this['server_room'];
    }
    public withServerRack(serverRack: string): OcaIp {
        this['server_rack'] = serverRack;
        return this;
    }
    public set serverRack(serverRack: string  | undefined) {
        this['server_rack'] = serverRack;
    }
    public get serverRack(): string | undefined {
        return this['server_rack'];
    }
    public withDataCenter(dataCenter: OcaIpDataCenter): OcaIp {
        this['data_center'] = dataCenter;
        return this;
    }
    public set dataCenter(dataCenter: OcaIpDataCenter  | undefined) {
        this['data_center'] = dataCenter;
    }
    public get dataCenter(): OcaIpDataCenter | undefined {
        return this['data_center'];
    }
    public withMacAddr(macAddr: string): OcaIp {
        this['mac_addr'] = macAddr;
        return this;
    }
    public set macAddr(macAddr: string  | undefined) {
        this['mac_addr'] = macAddr;
    }
    public get macAddr(): string | undefined {
        return this['mac_addr'];
    }
    public withImportant(important: string): OcaIp {
        this['important'] = important;
        return this;
    }
    public withExtendProperties(extendProperties: OcaIpExtendProperties): OcaIp {
        this['extend_properties'] = extendProperties;
        return this;
    }
    public set extendProperties(extendProperties: OcaIpExtendProperties  | undefined) {
        this['extend_properties'] = extendProperties;
    }
    public get extendProperties(): OcaIpExtendProperties | undefined {
        return this['extend_properties'];
    }
}