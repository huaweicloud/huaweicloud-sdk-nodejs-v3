import { Components } from './Components';


export class Nodes {
    public id?: string;
    public components?: Array<Components>;
    public constructor(id?: string, components?: Array<Components>) { 
        this['id'] = id;
        this['components'] = components;
    }
    public withId(id: string): Nodes {
        this['id'] = id;
        return this;
    }
    public withComponents(components: Array<Components>): Nodes {
        this['components'] = components;
        return this;
    }
}