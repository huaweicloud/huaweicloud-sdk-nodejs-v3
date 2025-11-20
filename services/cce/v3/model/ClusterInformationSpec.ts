import { ClusterInformationSpecHostNetwork } from './ClusterInformationSpecHostNetwork';
import { ContainerNetworkUpdate } from './ContainerNetworkUpdate';
import { EniNetworkUpdate } from './EniNetworkUpdate';


export class ClusterInformationSpec {
    public agencyName?: string;
    public description?: string;
    public customSan?: Array<string>;
    public containerNetwork?: ContainerNetworkUpdate;
    public eniNetwork?: EniNetworkUpdate;
    public hostNetwork?: ClusterInformationSpecHostNetwork;
    public deletionProtection?: boolean;
    public constructor() { 
    }
    public withAgencyName(agencyName: string): ClusterInformationSpec {
        this['agencyName'] = agencyName;
        return this;
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
    public withDeletionProtection(deletionProtection: boolean): ClusterInformationSpec {
        this['deletionProtection'] = deletionProtection;
        return this;
    }
}