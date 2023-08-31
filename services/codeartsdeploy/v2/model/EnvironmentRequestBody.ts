

export class EnvironmentRequestBody {
    private 'project_id'?: string;
    public name?: string;
    private 'deploy_type'?: number;
    public os?: EnvironmentRequestBodyOsEnum | string;
    public description?: string;
    public constructor(projectId?: string, name?: string, deployType?: number, os?: string) { 
        this['project_id'] = projectId;
        this['name'] = name;
        this['deploy_type'] = deployType;
        this['os'] = os;
    }
    public withProjectId(projectId: string): EnvironmentRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withName(name: string): EnvironmentRequestBody {
        this['name'] = name;
        return this;
    }
    public withDeployType(deployType: number): EnvironmentRequestBody {
        this['deploy_type'] = deployType;
        return this;
    }
    public set deployType(deployType: number  | undefined) {
        this['deploy_type'] = deployType;
    }
    public get deployType(): number | undefined {
        return this['deploy_type'];
    }
    public withOs(os: EnvironmentRequestBodyOsEnum | string): EnvironmentRequestBody {
        this['os'] = os;
        return this;
    }
    public withDescription(description: string): EnvironmentRequestBody {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EnvironmentRequestBodyOsEnum {
    WINDOWS = 'windows',
    LINUX = 'linux'
}
