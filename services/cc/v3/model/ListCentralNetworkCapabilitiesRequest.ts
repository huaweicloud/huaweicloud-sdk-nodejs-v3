import { CentralNetworkCapabilityEnum } from './CentralNetworkCapabilityEnum';


export class ListCentralNetworkCapabilitiesRequest {
    public capability?: Array<CentralNetworkCapabilityEnum>;
    public constructor() { 
    }
    public withCapability(capability: Array<CentralNetworkCapabilityEnum>): ListCentralNetworkCapabilitiesRequest {
        this['capability'] = capability;
        return this;
    }
}