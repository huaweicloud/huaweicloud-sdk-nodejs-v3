import { ComponentAffinityAppInnerParameters } from './ComponentAffinityAppInnerParameters';


export class ComponentAffinity {
    public az?: Array<string>;
    public node?: Array<string>;
    public component?: Array<ComponentAffinityAppInnerParameters>;
    public constructor() { 
    }
    public withAz(az: Array<string>): ComponentAffinity {
        this['az'] = az;
        return this;
    }
    public withNode(node: Array<string>): ComponentAffinity {
        this['node'] = node;
        return this;
    }
    public withComponent(component: Array<ComponentAffinityAppInnerParameters>): ComponentAffinity {
        this['component'] = component;
        return this;
    }
}