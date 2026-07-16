

export class UpdateInferDeploymentScale {
    public count?: number;
    public constructor(count?: number) { 
        this['count'] = count;
    }
    public withCount(count: number): UpdateInferDeploymentScale {
        this['count'] = count;
        return this;
    }
}