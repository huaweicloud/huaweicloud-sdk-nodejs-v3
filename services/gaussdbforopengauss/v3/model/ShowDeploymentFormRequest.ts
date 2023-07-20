

export class ShowDeploymentFormRequest {
    private 'X-Language'?: string;
    public solution?: ShowDeploymentFormRequestSolutionEnum | string;
    private 'instance_id'?: string;
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
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDeploymentFormRequestSolutionEnum {
    TRISET = 'triset',
    SINGLE = 'single'
}
