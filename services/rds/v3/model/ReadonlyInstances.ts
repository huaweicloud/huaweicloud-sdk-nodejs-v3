import { AvailableZone } from './AvailableZone';


export class ReadonlyInstances {
    public id?: string;
    public status?: string;
    public name?: string;
    public weight?: number;
    private 'available_zones'?: Array<AvailableZone>;
    private 'cpu_num'?: number;
    public constructor(id?: string, status?: string, name?: string, weight?: number, availableZones?: Array<AvailableZone>, cpuNum?: number) { 
        this['id'] = id;
        this['status'] = status;
        this['name'] = name;
        this['weight'] = weight;
        this['available_zones'] = availableZones;
        this['cpu_num'] = cpuNum;
    }
    public withId(id: string): ReadonlyInstances {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): ReadonlyInstances {
        this['status'] = status;
        return this;
    }
    public withName(name: string): ReadonlyInstances {
        this['name'] = name;
        return this;
    }
    public withWeight(weight: number): ReadonlyInstances {
        this['weight'] = weight;
        return this;
    }
    public withAvailableZones(availableZones: Array<AvailableZone>): ReadonlyInstances {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<AvailableZone>  | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones(): Array<AvailableZone> | undefined {
        return this['available_zones'];
    }
    public withCpuNum(cpuNum: number): ReadonlyInstances {
        this['cpu_num'] = cpuNum;
        return this;
    }
    public set cpuNum(cpuNum: number  | undefined) {
        this['cpu_num'] = cpuNum;
    }
    public get cpuNum(): number | undefined {
        return this['cpu_num'];
    }
}