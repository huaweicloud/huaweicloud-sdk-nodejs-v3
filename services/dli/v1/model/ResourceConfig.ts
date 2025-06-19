import { ResourceSpec } from './ResourceSpec';


export class ResourceConfig {
    private 'max_slot'?: number;
    private 'parallel_number'?: number;
    private 'jobmanager_resource_spec'?: ResourceSpec;
    private 'taskmanager_resource_spec'?: ResourceSpec;
    public constructor() { 
    }
    public withMaxSlot(maxSlot: number): ResourceConfig {
        this['max_slot'] = maxSlot;
        return this;
    }
    public set maxSlot(maxSlot: number  | undefined) {
        this['max_slot'] = maxSlot;
    }
    public get maxSlot(): number | undefined {
        return this['max_slot'];
    }
    public withParallelNumber(parallelNumber: number): ResourceConfig {
        this['parallel_number'] = parallelNumber;
        return this;
    }
    public set parallelNumber(parallelNumber: number  | undefined) {
        this['parallel_number'] = parallelNumber;
    }
    public get parallelNumber(): number | undefined {
        return this['parallel_number'];
    }
    public withJobmanagerResourceSpec(jobmanagerResourceSpec: ResourceSpec): ResourceConfig {
        this['jobmanager_resource_spec'] = jobmanagerResourceSpec;
        return this;
    }
    public set jobmanagerResourceSpec(jobmanagerResourceSpec: ResourceSpec  | undefined) {
        this['jobmanager_resource_spec'] = jobmanagerResourceSpec;
    }
    public get jobmanagerResourceSpec(): ResourceSpec | undefined {
        return this['jobmanager_resource_spec'];
    }
    public withTaskmanagerResourceSpec(taskmanagerResourceSpec: ResourceSpec): ResourceConfig {
        this['taskmanager_resource_spec'] = taskmanagerResourceSpec;
        return this;
    }
    public set taskmanagerResourceSpec(taskmanagerResourceSpec: ResourceSpec  | undefined) {
        this['taskmanager_resource_spec'] = taskmanagerResourceSpec;
    }
    public get taskmanagerResourceSpec(): ResourceSpec | undefined {
        return this['taskmanager_resource_spec'];
    }
}