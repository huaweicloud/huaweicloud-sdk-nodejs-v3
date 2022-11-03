import { Id } from './Id';


export class CreateEndpointGroupOption {
    public name: string;
    public description?: string;
    private 'traffic_dial_percentage'?: number | undefined;
    private 'region_id': string | undefined;
    public listeners: Array<Id>;
    public constructor(name?: any, regionId?: any, listeners?: any) { 
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
    public set trafficDialPercentage(trafficDialPercentage: number | undefined) {
        this['traffic_dial_percentage'] = trafficDialPercentage;
    }
    public get trafficDialPercentage() {
        return this['traffic_dial_percentage'];
    }
    public withRegionId(regionId: string): CreateEndpointGroupOption {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
        return this['region_id'];
    }
    public withListeners(listeners: Array<Id>): CreateEndpointGroupOption {
        this['listeners'] = listeners;
        return this;
    }
}