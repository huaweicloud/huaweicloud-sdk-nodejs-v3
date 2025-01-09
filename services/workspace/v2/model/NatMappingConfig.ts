import { Tag } from './Tag';


export class NatMappingConfig {
    private 'nat_map_type'?: NatMappingConfigNatMapTypeEnum | string;
    private 'nat_map_value'?: string;
    private 'nat_ip'?: string;
    private 'nat_port'?: string;
    private 'vag_ip'?: string;
    private 'vag_port'?: string;
    private 'access_filter_type'?: number;
    private 'enterprise_project_id'?: string;
    public tags?: Array<Tag>;
    public constructor() { 
    }
    public withNatMapType(natMapType: NatMappingConfigNatMapTypeEnum | string): NatMappingConfig {
        this['nat_map_type'] = natMapType;
        return this;
    }
    public set natMapType(natMapType: NatMappingConfigNatMapTypeEnum | string  | undefined) {
        this['nat_map_type'] = natMapType;
    }
    public get natMapType(): NatMappingConfigNatMapTypeEnum | string | undefined {
        return this['nat_map_type'];
    }
    public withNatMapValue(natMapValue: string): NatMappingConfig {
        this['nat_map_value'] = natMapValue;
        return this;
    }
    public set natMapValue(natMapValue: string  | undefined) {
        this['nat_map_value'] = natMapValue;
    }
    public get natMapValue(): string | undefined {
        return this['nat_map_value'];
    }
    public withNatIp(natIp: string): NatMappingConfig {
        this['nat_ip'] = natIp;
        return this;
    }
    public set natIp(natIp: string  | undefined) {
        this['nat_ip'] = natIp;
    }
    public get natIp(): string | undefined {
        return this['nat_ip'];
    }
    public withNatPort(natPort: string): NatMappingConfig {
        this['nat_port'] = natPort;
        return this;
    }
    public set natPort(natPort: string  | undefined) {
        this['nat_port'] = natPort;
    }
    public get natPort(): string | undefined {
        return this['nat_port'];
    }
    public withVagIp(vagIp: string): NatMappingConfig {
        this['vag_ip'] = vagIp;
        return this;
    }
    public set vagIp(vagIp: string  | undefined) {
        this['vag_ip'] = vagIp;
    }
    public get vagIp(): string | undefined {
        return this['vag_ip'];
    }
    public withVagPort(vagPort: string): NatMappingConfig {
        this['vag_port'] = vagPort;
        return this;
    }
    public set vagPort(vagPort: string  | undefined) {
        this['vag_port'] = vagPort;
    }
    public get vagPort(): string | undefined {
        return this['vag_port'];
    }
    public withAccessFilterType(accessFilterType: number): NatMappingConfig {
        this['access_filter_type'] = accessFilterType;
        return this;
    }
    public set accessFilterType(accessFilterType: number  | undefined) {
        this['access_filter_type'] = accessFilterType;
    }
    public get accessFilterType(): number | undefined {
        return this['access_filter_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): NatMappingConfig {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<Tag>): NatMappingConfig {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NatMappingConfigNatMapTypeEnum {
    PORT = 'PORT',
    HOST = 'HOST'
}
