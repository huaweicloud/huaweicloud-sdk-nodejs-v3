import { ResourceSelector } from './ResourceSelector';


export class OverrideSpec {
    public resourceSelectors?: Array<ResourceSelector>;
    public overriders?: object;
    public constructor() { 
    }
    public withResourceSelectors(resourceSelectors: Array<ResourceSelector>): OverrideSpec {
        this['resourceSelectors'] = resourceSelectors;
        return this;
    }
    public withOverriders(overriders: object): OverrideSpec {
        this['overriders'] = overriders;
        return this;
    }
}