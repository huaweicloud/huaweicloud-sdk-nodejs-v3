

export class UpdateEndpointGroupOption {
    public name?: string;
    public description?: string;
    private 'traffic_dial_percentage'?: number | undefined;
    public constructor() { 
    }
    public withName(name: string): UpdateEndpointGroupOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateEndpointGroupOption {
        this['description'] = description;
        return this;
    }
    public withTrafficDialPercentage(trafficDialPercentage: number): UpdateEndpointGroupOption {
        this['traffic_dial_percentage'] = trafficDialPercentage;
        return this;
    }
    public set trafficDialPercentage(trafficDialPercentage: number | undefined) {
        this['traffic_dial_percentage'] = trafficDialPercentage;
    }
    public get trafficDialPercentage() {
        return this['traffic_dial_percentage'];
    }
}