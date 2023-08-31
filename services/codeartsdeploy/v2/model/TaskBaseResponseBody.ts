

export class TaskBaseResponseBody {
    public id?: string;
    public state?: string;
    private 'deploy_system'?: string;
    public constructor() { 
    }
    public withId(id: string): TaskBaseResponseBody {
        this['id'] = id;
        return this;
    }
    public withState(state: string): TaskBaseResponseBody {
        this['state'] = state;
        return this;
    }
    public withDeploySystem(deploySystem: string): TaskBaseResponseBody {
        this['deploy_system'] = deploySystem;
        return this;
    }
    public set deploySystem(deploySystem: string  | undefined) {
        this['deploy_system'] = deploySystem;
    }
    public get deploySystem(): string | undefined {
        return this['deploy_system'];
    }
}