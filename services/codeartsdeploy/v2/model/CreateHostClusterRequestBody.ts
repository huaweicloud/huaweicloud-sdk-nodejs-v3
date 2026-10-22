

export class CreateHostClusterRequestBody {
    public name?: string;
    private 'project_id'?: string;
    public os?: CreateHostClusterRequestBodyOsEnum | string;
    private 'slave_cluster_id'?: string;
    private 'slave_resource_type'?: CreateHostClusterRequestBodySlaveResourceTypeEnum | string;
    private 'ansible_type'?: number;
    public description?: string;
    private 'is_proxy_mode'?: number;
    public constructor(name?: string, projectId?: string, os?: string, isProxyMode?: number) { 
        this['name'] = name;
        this['project_id'] = projectId;
        this['os'] = os;
        this['is_proxy_mode'] = isProxyMode;
    }
    public withName(name: string): CreateHostClusterRequestBody {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): CreateHostClusterRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withOs(os: CreateHostClusterRequestBodyOsEnum | string): CreateHostClusterRequestBody {
        this['os'] = os;
        return this;
    }
    public withSlaveClusterId(slaveClusterId: string): CreateHostClusterRequestBody {
        this['slave_cluster_id'] = slaveClusterId;
        return this;
    }
    public set slaveClusterId(slaveClusterId: string  | undefined) {
        this['slave_cluster_id'] = slaveClusterId;
    }
    public get slaveClusterId(): string | undefined {
        return this['slave_cluster_id'];
    }
    public withSlaveResourceType(slaveResourceType: CreateHostClusterRequestBodySlaveResourceTypeEnum | string): CreateHostClusterRequestBody {
        this['slave_resource_type'] = slaveResourceType;
        return this;
    }
    public set slaveResourceType(slaveResourceType: CreateHostClusterRequestBodySlaveResourceTypeEnum | string  | undefined) {
        this['slave_resource_type'] = slaveResourceType;
    }
    public get slaveResourceType(): CreateHostClusterRequestBodySlaveResourceTypeEnum | string | undefined {
        return this['slave_resource_type'];
    }
    public withAnsibleType(ansibleType: number): CreateHostClusterRequestBody {
        this['ansible_type'] = ansibleType;
        return this;
    }
    public set ansibleType(ansibleType: number  | undefined) {
        this['ansible_type'] = ansibleType;
    }
    public get ansibleType(): number | undefined {
        return this['ansible_type'];
    }
    public withDescription(description: string): CreateHostClusterRequestBody {
        this['description'] = description;
        return this;
    }
    public withIsProxyMode(isProxyMode: number): CreateHostClusterRequestBody {
        this['is_proxy_mode'] = isProxyMode;
        return this;
    }
    public set isProxyMode(isProxyMode: number  | undefined) {
        this['is_proxy_mode'] = isProxyMode;
    }
    public get isProxyMode(): number | undefined {
        return this['is_proxy_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateHostClusterRequestBodyOsEnum {
    WINDOWS = 'windows',
    LINUX = 'linux'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateHostClusterRequestBodySlaveResourceTypeEnum {
    SELF_HOSTED = 'self-hosted',
    EXCLUSIVE = 'exclusive'
}
