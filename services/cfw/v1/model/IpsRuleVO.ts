

export class IpsRuleVO {
    private 'affected_application'?: string;
    private 'create_time'?: string;
    private 'default_status'?: IpsRuleVODefaultStatusEnum | string;
    private 'ips_cve'?: string;
    private 'ips_group'?: IpsRuleVOIpsGroupEnum | string;
    private 'ips_id'?: string;
    private 'ips_level'?: IpsRuleVOIpsLevelEnum | string;
    private 'ips_name'?: string;
    private 'ips_rules_type'?: string;
    private 'ips_status'?: IpsRuleVOIpsStatusEnum | string;
    public constructor() { 
    }
    public withAffectedApplication(affectedApplication: string): IpsRuleVO {
        this['affected_application'] = affectedApplication;
        return this;
    }
    public set affectedApplication(affectedApplication: string  | undefined) {
        this['affected_application'] = affectedApplication;
    }
    public get affectedApplication(): string | undefined {
        return this['affected_application'];
    }
    public withCreateTime(createTime: string): IpsRuleVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withDefaultStatus(defaultStatus: IpsRuleVODefaultStatusEnum | string): IpsRuleVO {
        this['default_status'] = defaultStatus;
        return this;
    }
    public set defaultStatus(defaultStatus: IpsRuleVODefaultStatusEnum | string  | undefined) {
        this['default_status'] = defaultStatus;
    }
    public get defaultStatus(): IpsRuleVODefaultStatusEnum | string | undefined {
        return this['default_status'];
    }
    public withIpsCve(ipsCve: string): IpsRuleVO {
        this['ips_cve'] = ipsCve;
        return this;
    }
    public set ipsCve(ipsCve: string  | undefined) {
        this['ips_cve'] = ipsCve;
    }
    public get ipsCve(): string | undefined {
        return this['ips_cve'];
    }
    public withIpsGroup(ipsGroup: IpsRuleVOIpsGroupEnum | string): IpsRuleVO {
        this['ips_group'] = ipsGroup;
        return this;
    }
    public set ipsGroup(ipsGroup: IpsRuleVOIpsGroupEnum | string  | undefined) {
        this['ips_group'] = ipsGroup;
    }
    public get ipsGroup(): IpsRuleVOIpsGroupEnum | string | undefined {
        return this['ips_group'];
    }
    public withIpsId(ipsId: string): IpsRuleVO {
        this['ips_id'] = ipsId;
        return this;
    }
    public set ipsId(ipsId: string  | undefined) {
        this['ips_id'] = ipsId;
    }
    public get ipsId(): string | undefined {
        return this['ips_id'];
    }
    public withIpsLevel(ipsLevel: IpsRuleVOIpsLevelEnum | string): IpsRuleVO {
        this['ips_level'] = ipsLevel;
        return this;
    }
    public set ipsLevel(ipsLevel: IpsRuleVOIpsLevelEnum | string  | undefined) {
        this['ips_level'] = ipsLevel;
    }
    public get ipsLevel(): IpsRuleVOIpsLevelEnum | string | undefined {
        return this['ips_level'];
    }
    public withIpsName(ipsName: string): IpsRuleVO {
        this['ips_name'] = ipsName;
        return this;
    }
    public set ipsName(ipsName: string  | undefined) {
        this['ips_name'] = ipsName;
    }
    public get ipsName(): string | undefined {
        return this['ips_name'];
    }
    public withIpsRulesType(ipsRulesType: string): IpsRuleVO {
        this['ips_rules_type'] = ipsRulesType;
        return this;
    }
    public set ipsRulesType(ipsRulesType: string  | undefined) {
        this['ips_rules_type'] = ipsRulesType;
    }
    public get ipsRulesType(): string | undefined {
        return this['ips_rules_type'];
    }
    public withIpsStatus(ipsStatus: IpsRuleVOIpsStatusEnum | string): IpsRuleVO {
        this['ips_status'] = ipsStatus;
        return this;
    }
    public set ipsStatus(ipsStatus: IpsRuleVOIpsStatusEnum | string  | undefined) {
        this['ips_status'] = ipsStatus;
    }
    public get ipsStatus(): IpsRuleVOIpsStatusEnum | string | undefined {
        return this['ips_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum IpsRuleVODefaultStatusEnum {
    OBSERVE = 'OBSERVE',
    ENABLE = 'ENABLE',
    CLOSE = 'CLOSE',
    DEFAULT = 'DEFAULT',
    ALL_DEFAULT = 'ALL_DEFAULT'
}
/**
    * @export
    * @enum {string}
    */
export enum IpsRuleVOIpsGroupEnum {
    OBSERVE = 'OBSERVE',
    STRICTLY = 'STRICTLY',
    MEDIUM = 'MEDIUM',
    LOW = 'LOW'
}
/**
    * @export
    * @enum {string}
    */
export enum IpsRuleVOIpsLevelEnum {
    FATAL = 'FATAL',
    HIGH = 'HIGH',
    MEDIUM = 'MEDIUM',
    LOW = 'LOW',
    UNKNOWNS = 'UNKNOWNS'
}
/**
    * @export
    * @enum {string}
    */
export enum IpsRuleVOIpsStatusEnum {
    OBSERVE = 'OBSERVE',
    ENABLE = 'ENABLE',
    CLOSE = 'CLOSE',
    DEFAULT = 'DEFAULT',
    ALL_DEFAULT = 'ALL_DEFAULT'
}
