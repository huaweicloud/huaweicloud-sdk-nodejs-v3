import { CloudConnectionDomainBandwidthValue } from './CloudConnectionDomainBandwidthValue';


export class CloudConnectionDomainBandwidthCapabilityValue {
    public bandwidth?: CloudConnectionDomainBandwidthValue;
    public constructor(bandwidth?: CloudConnectionDomainBandwidthValue) { 
        this['bandwidth'] = bandwidth;
    }
    public withBandwidth(bandwidth: CloudConnectionDomainBandwidthValue): CloudConnectionDomainBandwidthCapabilityValue {
        this['bandwidth'] = bandwidth;
        return this;
    }
}