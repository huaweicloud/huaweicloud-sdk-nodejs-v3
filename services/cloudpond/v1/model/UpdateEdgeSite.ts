import { UpdateLocation } from './UpdateLocation';


export class UpdateEdgeSite {
    public description?: string;
    public location?: UpdateLocation;
    public constructor() { 
    }
    public withDescription(description: string): UpdateEdgeSite {
        this['description'] = description;
        return this;
    }
    public withLocation(location: UpdateLocation): UpdateEdgeSite {
        this['location'] = location;
        return this;
    }
}