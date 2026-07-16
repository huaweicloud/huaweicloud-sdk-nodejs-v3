import { NodeNetwork } from './NodeNetwork';
import { Os } from './Os';
import { ResourceExtendParams } from './ResourceExtendParams';
import { VolumeVO } from './VolumeVO';


export class NodeSpec {
    public flavor?: string;
    public os?: Os;
    public hostNetwork?: NodeNetwork;
    public rootVolume?: VolumeVO;
    public dataVolumes?: Array<VolumeVO>;
    public extendParams?: ResourceExtendParams;
    public constructor(flavor?: string) { 
        this['flavor'] = flavor;
    }
    public withFlavor(flavor: string): NodeSpec {
        this['flavor'] = flavor;
        return this;
    }
    public withOs(os: Os): NodeSpec {
        this['os'] = os;
        return this;
    }
    public withHostNetwork(hostNetwork: NodeNetwork): NodeSpec {
        this['hostNetwork'] = hostNetwork;
        return this;
    }
    public withRootVolume(rootVolume: VolumeVO): NodeSpec {
        this['rootVolume'] = rootVolume;
        return this;
    }
    public withDataVolumes(dataVolumes: Array<VolumeVO>): NodeSpec {
        this['dataVolumes'] = dataVolumes;
        return this;
    }
    public withExtendParams(extendParams: ResourceExtendParams): NodeSpec {
        this['extendParams'] = extendParams;
        return this;
    }
}