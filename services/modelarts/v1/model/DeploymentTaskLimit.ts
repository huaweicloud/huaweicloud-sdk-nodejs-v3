

export class DeploymentTaskLimit {
    private 'max_concurrent_task'?: number;
    public constructor() { 
    }
    public withMaxConcurrentTask(maxConcurrentTask: number): DeploymentTaskLimit {
        this['max_concurrent_task'] = maxConcurrentTask;
        return this;
    }
    public set maxConcurrentTask(maxConcurrentTask: number  | undefined) {
        this['max_concurrent_task'] = maxConcurrentTask;
    }
    public get maxConcurrentTask(): number | undefined {
        return this['max_concurrent_task'];
    }
}