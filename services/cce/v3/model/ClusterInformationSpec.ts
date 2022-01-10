import { ContainerNetworkUpdate } from './ContainerNetworkUpdate';


export class ClusterInformationSpec {
    public description?: string;
    public customSan?: Array<string>;
    public containerNetwork?: ContainerNetworkUpdate;
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
}