import { ClientAffinity } from './ClientAffinity';
import { PortRange } from './PortRange';


export class UpdateListenerOption {
    public name?: string;
    public description?: string;
    private 'port_ranges'?: Array<PortRange>;
    private 'client_affinity'?: ClientAffinity;
    public constructor() { 
    }
    public withName(name: string): UpdateListenerOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateListenerOption {
        this['description'] = description;
        return this;
    }
    public withPortRanges(portRanges: Array<PortRange>): UpdateListenerOption {
        this['port_ranges'] = portRanges;
        return this;
    }
    public set portRanges(portRanges: Array<PortRange>  | undefined) {
        this['port_ranges'] = portRanges;
    }
    public get portRanges(): Array<PortRange> | undefined {
        return this['port_ranges'];
    }
    public withClientAffinity(clientAffinity: ClientAffinity): UpdateListenerOption {
        this['client_affinity'] = clientAffinity;
        return this;
    }
    public set clientAffinity(clientAffinity: ClientAffinity  | undefined) {
        this['client_affinity'] = clientAffinity;
    }
    public get clientAffinity(): ClientAffinity | undefined {
        return this['client_affinity'];
    }
}