

export class Flavor {
    public name?: string;
    public id?: string;
    public connections?: number;
    public bandwidth?: number;
    public pps?: number;
    private 'available_zones'?: Array<string>;
    public constructor(name?: string, id?: string, connections?: number, bandwidth?: number, pps?: number, availableZones?: Array<string>) { 
        this['name'] = name;
        this['id'] = id;
        this['connections'] = connections;
        this['bandwidth'] = bandwidth;
        this['pps'] = pps;
        this['available_zones'] = availableZones;
    }
    public withName(name: string): Flavor {
        this['name'] = name;
        return this;
    }
    public withId(id: string): Flavor {
        this['id'] = id;
        return this;
    }
    public withConnections(connections: number): Flavor {
        this['connections'] = connections;
        return this;
    }
    public withBandwidth(bandwidth: number): Flavor {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withPps(pps: number): Flavor {
        this['pps'] = pps;
        return this;
    }
    public withAvailableZones(availableZones: Array<string>): Flavor {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string>  | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones(): Array<string> | undefined {
        return this['available_zones'];
    }
}