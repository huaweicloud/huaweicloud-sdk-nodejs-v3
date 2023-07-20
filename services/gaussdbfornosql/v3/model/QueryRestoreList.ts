

export class QueryRestoreList {
    private 'instance_id'?: string;
    private 'instance_mode'?: string;
    private 'engine_name'?: string;
    private 'engine_version'?: string;
    private 'vpc_id'?: string;
    private 'subnet_ids'?: Array<string>;
    private 'security_group_ids'?: Array<string>;
    public constructor(instanceId?: string, instanceMode?: string, engineName?: string, engineVersion?: string, vpcId?: string, subnetIds?: Array<string>, securityGroupIds?: Array<string>) { 
        this['instance_id'] = instanceId;
        this['instance_mode'] = instanceMode;
        this['engine_name'] = engineName;
        this['engine_version'] = engineVersion;
        this['vpc_id'] = vpcId;
        this['subnet_ids'] = subnetIds;
        this['security_group_ids'] = securityGroupIds;
    }
    public withInstanceId(instanceId: string): QueryRestoreList {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceMode(instanceMode: string): QueryRestoreList {
        this['instance_mode'] = instanceMode;
        return this;
    }
    public set instanceMode(instanceMode: string  | undefined) {
        this['instance_mode'] = instanceMode;
    }
    public get instanceMode(): string | undefined {
        return this['instance_mode'];
    }
    public withEngineName(engineName: string): QueryRestoreList {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withEngineVersion(engineVersion: string): QueryRestoreList {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withVpcId(vpcId: string): QueryRestoreList {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetIds(subnetIds: Array<string>): QueryRestoreList {
        this['subnet_ids'] = subnetIds;
        return this;
    }
    public set subnetIds(subnetIds: Array<string>  | undefined) {
        this['subnet_ids'] = subnetIds;
    }
    public get subnetIds(): Array<string> | undefined {
        return this['subnet_ids'];
    }
    public withSecurityGroupIds(securityGroupIds: Array<string>): QueryRestoreList {
        this['security_group_ids'] = securityGroupIds;
        return this;
    }
    public set securityGroupIds(securityGroupIds: Array<string>  | undefined) {
        this['security_group_ids'] = securityGroupIds;
    }
    public get securityGroupIds(): Array<string> | undefined {
        return this['security_group_ids'];
    }
}