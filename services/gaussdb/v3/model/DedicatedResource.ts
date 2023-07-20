import { DedicatedResourceCapacity } from './DedicatedResourceCapacity';


export class DedicatedResource {
    public id?: string;
    private 'resource_name'?: string;
    private 'engine_name'?: string;
    public architecture?: string;
    public status?: DedicatedResourceStatusEnum | string;
    public capacity?: DedicatedResourceCapacity;
    private 'availability_zone'?: Array<string>;
    public constructor() { 
    }
    public withId(id: string): DedicatedResource {
        this['id'] = id;
        return this;
    }
    public withResourceName(resourceName: string): DedicatedResource {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withEngineName(engineName: string): DedicatedResource {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withArchitecture(architecture: string): DedicatedResource {
        this['architecture'] = architecture;
        return this;
    }
    public withStatus(status: DedicatedResourceStatusEnum | string): DedicatedResource {
        this['status'] = status;
        return this;
    }
    public withCapacity(capacity: DedicatedResourceCapacity): DedicatedResource {
        this['capacity'] = capacity;
        return this;
    }
    public withAvailabilityZone(availabilityZone: Array<string>): DedicatedResource {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: Array<string>  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): Array<string> | undefined {
        return this['availability_zone'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DedicatedResourceStatusEnum {
    NORMAL = 'NORMAL',
    BUILDING = 'BUILDING',
    EXTENDING = 'EXTENDING',
    DELETED = 'DELETED'
}
