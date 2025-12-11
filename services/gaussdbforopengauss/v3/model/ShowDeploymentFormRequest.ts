

export class ShowDeploymentFormRequest {
    private 'X-Language'?: string;
    public solution?: ShowDeploymentFormRequestSolutionEnum | string;
    private 'instance_id'?: string;
    public consistency?: string;
    private 'consistency_protocol'?: string;
    private 'engine_version'?: string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ShowDeploymentFormRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withSolution(solution: ShowDeploymentFormRequestSolutionEnum | string): ShowDeploymentFormRequest {
        this['solution'] = solution;
        return this;
    }
    public withInstanceId(instanceId: string): ShowDeploymentFormRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withConsistency(consistency: string): ShowDeploymentFormRequest {
        this['consistency'] = consistency;
        return this;
    }
    public withConsistencyProtocol(consistencyProtocol: string): ShowDeploymentFormRequest {
        this['consistency_protocol'] = consistencyProtocol;
        return this;
    }
    public set consistencyProtocol(consistencyProtocol: string  | undefined) {
        this['consistency_protocol'] = consistencyProtocol;
    }
    public get consistencyProtocol(): string | undefined {
        return this['consistency_protocol'];
    }
    public withEngineVersion(engineVersion: string): ShowDeploymentFormRequest {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDeploymentFormRequestSolutionEnum {
    TRISET = 'triset',
    SINGLE = 'single'
}
