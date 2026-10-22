

export class HostClusterRequest {
    public name?: string;
    public description?: string;
    private 'slave_cluster_id'?: string;
    private 'slave_resource_type'?: HostClusterRequestSlaveResourceTypeEnum | string;
    private 'ansible_type'?: number;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): HostClusterRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): HostClusterRequest {
        this['description'] = description;
        return this;
    }
    public withSlaveClusterId(slaveClusterId: string): HostClusterRequest {
        this['slave_cluster_id'] = slaveClusterId;
        return this;
    }
    public set slaveClusterId(slaveClusterId: string  | undefined) {
        this['slave_cluster_id'] = slaveClusterId;
    }
    public get slaveClusterId(): string | undefined {
        return this['slave_cluster_id'];
    }
    public withSlaveResourceType(slaveResourceType: HostClusterRequestSlaveResourceTypeEnum | string): HostClusterRequest {
        this['slave_resource_type'] = slaveResourceType;
        return this;
    }
    public set slaveResourceType(slaveResourceType: HostClusterRequestSlaveResourceTypeEnum | string  | undefined) {
        this['slave_resource_type'] = slaveResourceType;
    }
    public get slaveResourceType(): HostClusterRequestSlaveResourceTypeEnum | string | undefined {
        return this['slave_resource_type'];
    }
    public withAnsibleType(ansibleType: number): HostClusterRequest {
        this['ansible_type'] = ansibleType;
        return this;
    }
    public set ansibleType(ansibleType: number  | undefined) {
        this['ansible_type'] = ansibleType;
    }
    public get ansibleType(): number | undefined {
        return this['ansible_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HostClusterRequestSlaveResourceTypeEnum {
    SELF_HOSTED = 'self-hosted',
    EXCLUSIVE = 'exclusive'
}
