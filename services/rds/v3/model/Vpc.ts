import { Subnet } from './Subnet';


export class Vpc {
    public id?: string;
    public name?: string;
    public subnets?: Array<Subnet>;
    public constructor() { 
    }
    public withId(id: string): Vpc {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Vpc {
        this['name'] = name;
        return this;
    }
    public withSubnets(subnets: Array<Subnet>): Vpc {
        this['subnets'] = subnets;
        return this;
    }
}