import { CentralNetworkCapabilityEnum } from './CentralNetworkCapabilityEnum';


export class ListCentralNetworkCapabilitiesRequest {
    public capability?: Array<CentralNetworkCapabilityEnum>;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withCapability(capability: Array<CentralNetworkCapabilityEnum>): ListCentralNetworkCapabilitiesRequest {
        this['capability'] = capability;
        return this;
    }
    public withLimit(limit: number): ListCentralNetworkCapabilitiesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListCentralNetworkCapabilitiesRequest {
        this['marker'] = marker;
        return this;
    }
}