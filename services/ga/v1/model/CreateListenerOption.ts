import { ClientAffinity } from './ClientAffinity';
import { ListenerProtocol } from './ListenerProtocol';
import { PortRange } from './PortRange';
import { ResourceTag } from './ResourceTag';


export class CreateListenerOption {
    public name?: string;
    public description?: string;
    public protocol?: ListenerProtocol;
    private 'port_ranges'?: Array<PortRange>;
    private 'client_affinity'?: ClientAffinity;
    private 'accelerator_id'?: string;
    public tags?: Array<ResourceTag>;
    public constructor(name?: string, protocol?: ListenerProtocol, portRanges?: Array<PortRange>, acceleratorId?: string) { 
        this['name'] = name;
        this['protocol'] = protocol;
        this['port_ranges'] = portRanges;
        this['accelerator_id'] = acceleratorId;
    }
    public withName(name: string): CreateListenerOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateListenerOption {
        this['description'] = description;
        return this;
    }
    public withProtocol(protocol: ListenerProtocol): CreateListenerOption {
        this['protocol'] = protocol;
        return this;
    }
    public withPortRanges(portRanges: Array<PortRange>): CreateListenerOption {
        this['port_ranges'] = portRanges;
        return this;
    }
    public set portRanges(portRanges: Array<PortRange>  | undefined) {
        this['port_ranges'] = portRanges;
    }
    public get portRanges(): Array<PortRange> | undefined {
        return this['port_ranges'];
    }
    public withClientAffinity(clientAffinity: ClientAffinity): CreateListenerOption {
        this['client_affinity'] = clientAffinity;
        return this;
    }
    public set clientAffinity(clientAffinity: ClientAffinity  | undefined) {
        this['client_affinity'] = clientAffinity;
    }
    public get clientAffinity(): ClientAffinity | undefined {
        return this['client_affinity'];
    }
    public withAcceleratorId(acceleratorId: string): CreateListenerOption {
        this['accelerator_id'] = acceleratorId;
        return this;
    }
    public set acceleratorId(acceleratorId: string  | undefined) {
        this['accelerator_id'] = acceleratorId;
    }
    public get acceleratorId(): string | undefined {
        return this['accelerator_id'];
    }
    public withTags(tags: Array<ResourceTag>): CreateListenerOption {
        this['tags'] = tags;
        return this;
    }
}