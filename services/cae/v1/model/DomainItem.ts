import { MetaDomain } from './MetaDomain';


export class DomainItem {
    public metadata?: MetaDomain;
    public constructor() { 
    }
    public withMetadata(metadata: MetaDomain): DomainItem {
        this['metadata'] = metadata;
        return this;
    }
}