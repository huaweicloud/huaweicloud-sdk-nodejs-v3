

export class ListStarRocksDbParametersRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: string;
    private 'add_task_scenario'?: string;
    private 'main_task_name'?: string;
    public constructor(instanceId?: string, xLanguage?: string) { 
        this['instance_id'] = instanceId;
        this['X-Language'] = xLanguage;
    }
    public withInstanceId(instanceId: string): ListStarRocksDbParametersRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: string): ListStarRocksDbParametersRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withAddTaskScenario(addTaskScenario: string): ListStarRocksDbParametersRequest {
        this['add_task_scenario'] = addTaskScenario;
        return this;
    }
    public set addTaskScenario(addTaskScenario: string  | undefined) {
        this['add_task_scenario'] = addTaskScenario;
    }
    public get addTaskScenario(): string | undefined {
        return this['add_task_scenario'];
    }
    public withMainTaskName(mainTaskName: string): ListStarRocksDbParametersRequest {
        this['main_task_name'] = mainTaskName;
        return this;
    }
    public set mainTaskName(mainTaskName: string  | undefined) {
        this['main_task_name'] = mainTaskName;
    }
    public get mainTaskName(): string | undefined {
        return this['main_task_name'];
    }
}