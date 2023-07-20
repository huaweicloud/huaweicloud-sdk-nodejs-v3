import { Id } from './Id';


export class CreateEndpointGroupOption {
    public name?: string;
    public description?: string;
    private 'traffic_dial_percentage'?: number;
    private 'region_id'?: string;
    public listeners?: Array<Id>;
    public constructor(name?: string, regionId?: string, listeners?: Array<Id>) { 
        this['name'] = name;
        this['region_id'] = regionId;
        this['listeners'] = listeners;
    }
    public withName(name: string): CreateEndpointGroupOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateEndpointGroupOption {
        this['description'] = description;
        return this;
    }
    public withTrafficDialPercentage(trafficDialPercentage: number): CreateEndpointGroupOption {
        this['traffic_dial_percentage'] = trafficDialPercentage;
        return this;
    }
    public set trafficDialPercentage(trafficDialPercentage: number  | undefined) {
        this['traffic_dial_percentage'] = trafficDialPercentage;
    }
    public get trafficDialPercentage(): number | undefined {
        return this['traffic_dial_percentage'];
    }
    public withRegionId(regionId: string): CreateEndpointGroupOption {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withListeners(listeners: Array<Id>): CreateEndpointGroupOption {
        this['listeners'] = listeners;
        return this;
    }
}