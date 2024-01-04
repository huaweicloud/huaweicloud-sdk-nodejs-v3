import { ResourceSelector } from './ResourceSelector';


export class SkippedCheckItemList {
    public name?: string;
    public resourceSelector?: ResourceSelector;
    public constructor() { 
    }
    public withName(name: string): SkippedCheckItemList {
        this['name'] = name;
        return this;
    }
    public withResourceSelector(resourceSelector: ResourceSelector): SkippedCheckItemList {
        this['resourceSelector'] = resourceSelector;
        return this;
    }
}