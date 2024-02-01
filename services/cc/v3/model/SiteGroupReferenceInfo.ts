import { Description } from './Description';
import { UUIDIdentifier } from './UUIDIdentifier';


export class SiteGroupReferenceInfo {
    public id?: string;
    public description?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): SiteGroupReferenceInfo {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): SiteGroupReferenceInfo {
        this['description'] = description;
        return this;
    }
}