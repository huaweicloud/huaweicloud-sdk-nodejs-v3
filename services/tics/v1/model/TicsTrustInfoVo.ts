

export class TicsTrustInfoVo {
    private 'create_time'?: Date;
    private 'ha_mode'?: TicsTrustInfoVoHaModeEnum | string;
    private 'ne_deploy_type'?: TicsTrustInfoVoNeDeployTypeEnum | string;
    private 'ne_node_type'?: TicsTrustInfoVoNeNodeTypeEnum | string;
    private 'ne_status'?: TicsTrustInfoVoNeStatusEnum | string;
    private 'node_id'?: string;
    private 'node_name'?: string;
    private 'partner_alias'?: string;
    private 'update_time'?: Date;
    public constructor() { 
    }
    public withCreateTime(createTime: Date): TicsTrustInfoVo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withHaMode(haMode: TicsTrustInfoVoHaModeEnum | string): TicsTrustInfoVo {
        this['ha_mode'] = haMode;
        return this;
    }
    public set haMode(haMode: TicsTrustInfoVoHaModeEnum | string  | undefined) {
        this['ha_mode'] = haMode;
    }
    public get haMode(): TicsTrustInfoVoHaModeEnum | string | undefined {
        return this['ha_mode'];
    }
    public withNeDeployType(neDeployType: TicsTrustInfoVoNeDeployTypeEnum | string): TicsTrustInfoVo {
        this['ne_deploy_type'] = neDeployType;
        return this;
    }
    public set neDeployType(neDeployType: TicsTrustInfoVoNeDeployTypeEnum | string  | undefined) {
        this['ne_deploy_type'] = neDeployType;
    }
    public get neDeployType(): TicsTrustInfoVoNeDeployTypeEnum | string | undefined {
        return this['ne_deploy_type'];
    }
    public withNeNodeType(neNodeType: TicsTrustInfoVoNeNodeTypeEnum | string): TicsTrustInfoVo {
        this['ne_node_type'] = neNodeType;
        return this;
    }
    public set neNodeType(neNodeType: TicsTrustInfoVoNeNodeTypeEnum | string  | undefined) {
        this['ne_node_type'] = neNodeType;
    }
    public get neNodeType(): TicsTrustInfoVoNeNodeTypeEnum | string | undefined {
        return this['ne_node_type'];
    }
    public withNeStatus(neStatus: TicsTrustInfoVoNeStatusEnum | string): TicsTrustInfoVo {
        this['ne_status'] = neStatus;
        return this;
    }
    public set neStatus(neStatus: TicsTrustInfoVoNeStatusEnum | string  | undefined) {
        this['ne_status'] = neStatus;
    }
    public get neStatus(): TicsTrustInfoVoNeStatusEnum | string | undefined {
        return this['ne_status'];
    }
    public withNodeId(nodeId: string): TicsTrustInfoVo {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeName(nodeName: string): TicsTrustInfoVo {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withPartnerAlias(partnerAlias: string): TicsTrustInfoVo {
        this['partner_alias'] = partnerAlias;
        return this;
    }
    public set partnerAlias(partnerAlias: string  | undefined) {
        this['partner_alias'] = partnerAlias;
    }
    public get partnerAlias(): string | undefined {
        return this['partner_alias'];
    }
    public withUpdateTime(updateTime: Date): TicsTrustInfoVo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TicsTrustInfoVoHaModeEnum {
    ACTIVE = 'ACTIVE',
    STANDBY = 'STANDBY'
}
/**
    * @export
    * @enum {string}
    */
export enum TicsTrustInfoVoNeDeployTypeEnum {
    CCE = 'CCE',
    IEF = 'IEF'
}
/**
    * @export
    * @enum {string}
    */
export enum TicsTrustInfoVoNeNodeTypeEnum {
    AGENT = 'AGENT',
    AGG = 'AGG',
    AGG_MANAGER = 'AGG_MANAGER',
    SERVER = 'SERVER'
}
/**
    * @export
    * @enum {string}
    */
export enum TicsTrustInfoVoNeStatusEnum {
    FAULT = 'FAULT',
    INIT = 'INIT',
    OFFLINE = 'OFFLINE',
    ONLINE = 'ONLINE',
    TRUST = 'TRUST',
    TRUSTING = 'TRUSTING',
    UNKNOWN = 'UNKNOWN'
}
