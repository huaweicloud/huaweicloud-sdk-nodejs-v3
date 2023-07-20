import { DedicatedResourceCapacity } from './DedicatedResourceCapacity';


export class ListDedicatedResourceResult {
    public id?: string;
    private 'resource_name'?: string;
    private 'engine_name'?: string;
    private 'availability_zone'?: string;
    public architecture?: string;
    public capacity?: DedicatedResourceCapacity;
    public status?: string;
    public constructor(id?: string, resourceName?: string, engineName?: string, availabilityZone?: string, architecture?: string, capacity?: DedicatedResourceCapacity, status?: string) { 
        this['id'] = id;
        this['resource_name'] = resourceName;
        this['engine_name'] = engineName;
        this['availability_zone'] = availabilityZone;
        this['architecture'] = architecture;
        this['capacity'] = capacity;
        this['status'] = status;
    }
    public withId(id: string): ListDedicatedResourceResult {
        this['id'] = id;
        return this;
    }
    public withResourceName(resourceName: string): ListDedicatedResourceResult {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withEngineName(engineName: string): ListDedicatedResourceResult {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withAvailabilityZone(availabilityZone: string): ListDedicatedResourceResult {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withArchitecture(architecture: string): ListDedicatedResourceResult {
        this['architecture'] = architecture;
        return this;
    }
    public withCapacity(capacity: DedicatedResourceCapacity): ListDedicatedResourceResult {
        this['capacity'] = capacity;
        return this;
    }
    public withStatus(status: string): ListDedicatedResourceResult {
        this['status'] = status;
        return this;
    }
}