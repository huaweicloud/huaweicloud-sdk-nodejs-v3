import { MysqlAvailableZoneInfo } from './MysqlAvailableZoneInfo';


export class InstanceInfo {
    public id?: string;
    public status?: string;
    public name?: string;
    public weight?: number;
    private 'available_zones'?: Array<MysqlAvailableZoneInfo>;
    public constructor() { 
    }
    public withId(id: string): InstanceInfo {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): InstanceInfo {
        this['status'] = status;
        return this;
    }
    public withName(name: string): InstanceInfo {
        this['name'] = name;
        return this;
    }
    public withWeight(weight: number): InstanceInfo {
        this['weight'] = weight;
        return this;
    }
    public withAvailableZones(availableZones: Array<MysqlAvailableZoneInfo>): InstanceInfo {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<MysqlAvailableZoneInfo>  | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones(): Array<MysqlAvailableZoneInfo> | undefined {
        return this['available_zones'];
    }
}