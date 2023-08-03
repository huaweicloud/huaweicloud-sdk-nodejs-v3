import { Components } from './Components';


export class Nodes {
    public id?: string;
    public name?: string;
    private 'availability_zone_id'?: string;
    public description?: string;
    public status?: string;
    public components?: Array<Components>;
    public constructor(id?: string, components?: Array<Components>) { 
        this['id'] = id;
        this['components'] = components;
    }
    public withId(id: string): Nodes {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Nodes {
        this['name'] = name;
        return this;
    }
    public withAvailabilityZoneId(availabilityZoneId: string): Nodes {
        this['availability_zone_id'] = availabilityZoneId;
        return this;
    }
    public set availabilityZoneId(availabilityZoneId: string  | undefined) {
        this['availability_zone_id'] = availabilityZoneId;
    }
    public get availabilityZoneId(): string | undefined {
        return this['availability_zone_id'];
    }
    public withDescription(description: string): Nodes {
        this['description'] = description;
        return this;
    }
    public withStatus(status: string): Nodes {
        this['status'] = status;
        return this;
    }
    public withComponents(components: Array<Components>): Nodes {
        this['components'] = components;
        return this;
    }
}