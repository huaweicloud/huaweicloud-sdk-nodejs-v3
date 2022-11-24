import { ClusterInformationSpecHostNetwork } from './ClusterInformationSpecHostNetwork';
import { ContainerNetworkUpdate } from './ContainerNetworkUpdate';
import { EniNetworkUpdate } from './EniNetworkUpdate';


export class ClusterInformationSpec {
    public description?: string;
    public customSan?: Array<string>;
    public containerNetwork?: ContainerNetworkUpdate;
    public eniNetwork?: EniNetworkUpdate;
    public hostNetwork?: ClusterInformationSpecHostNetwork;
    public constructor() { 
    }
    public withDescription(description: string): ClusterInformationSpec {
        this['description'] = description;
        return this;
    }
    public withCustomSan(customSan: Array<string>): ClusterInformationSpec {
        this['customSan'] = customSan;
        return this;
    }
    public withContainerNetwork(containerNetwork: ContainerNetworkUpdate): ClusterInformationSpec {
        this['containerNetwork'] = containerNetwork;
        return this;
    }
    public withEniNetwork(eniNetwork: EniNetworkUpdate): ClusterInformationSpec {
        this['eniNetwork'] = eniNetwork;
        return this;
    }
    public withHostNetwork(hostNetwork: ClusterInformationSpecHostNetwork): ClusterInformationSpec {
        this['hostNetwork'] = hostNetwork;
        return this;
    }
}