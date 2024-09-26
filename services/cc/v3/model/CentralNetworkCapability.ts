import { CentralNetworkCapabilityEnum } from './CentralNetworkCapabilityEnum';
import { DomainId } from './DomainId';
import { UUID64Identifier } from './UUID64Identifier';


export class CentralNetworkCapability {
    public id?: string;
    private 'domain_id'?: string;
    public capability?: CentralNetworkCapabilityEnum;
    public constructor(id?: string, domainId?: string, capability?: CentralNetworkCapabilityEnum) { 
        this['id'] = id;
        this['domain_id'] = domainId;
        this['capability'] = capability;
    }
    public withId(id: string): CentralNetworkCapability {
        this['id'] = id;
        return this;
    }
    public withDomainId(domainId: string): CentralNetworkCapability {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withCapability(capability: CentralNetworkCapabilityEnum): CentralNetworkCapability {
        this['capability'] = capability;
        return this;
    }
}