

export class ClusterNodeInfo {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'sub_status'?: string;
    public spec?: string;
    private 'inst_create_type'?: string;
    private 'alias_name'?: string;
    private 'az_code'?: string;
    public constructor() { 
    }
    public withId(id: string): ClusterNodeInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ClusterNodeInfo {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ClusterNodeInfo {
        this['status'] = status;
        return this;
    }
    public withSubStatus(subStatus: string): ClusterNodeInfo {
        this['sub_status'] = subStatus;
        return this;
    }
    public set subStatus(subStatus: string  | undefined) {
        this['sub_status'] = subStatus;
    }
    public get subStatus(): string | undefined {
        return this['sub_status'];
    }
    public withSpec(spec: string): ClusterNodeInfo {
        this['spec'] = spec;
        return this;
    }
    public withInstCreateType(instCreateType: string): ClusterNodeInfo {
        this['inst_create_type'] = instCreateType;
        return this;
    }
    public set instCreateType(instCreateType: string  | undefined) {
        this['inst_create_type'] = instCreateType;
    }
    public get instCreateType(): string | undefined {
        return this['inst_create_type'];
    }
    public withAliasName(aliasName: string): ClusterNodeInfo {
        this['alias_name'] = aliasName;
        return this;
    }
    public set aliasName(aliasName: string  | undefined) {
        this['alias_name'] = aliasName;
    }
    public get aliasName(): string | undefined {
        return this['alias_name'];
    }
    public withAzCode(azCode: string): ClusterNodeInfo {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string  | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode(): string | undefined {
        return this['az_code'];
    }
}