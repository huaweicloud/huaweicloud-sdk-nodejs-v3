import { PartitionSpecContainerNetwork } from './PartitionSpecContainerNetwork';
import { PartitionSpecHostNetwork } from './PartitionSpecHostNetwork';


export class PartitionSpec {
    public hostNetwork?: PartitionSpecHostNetwork;
    public containerNetwork?: Array<PartitionSpecContainerNetwork>;
    public publicBorderGroup?: string;
    public category?: string;
    public constructor() { 
    }
    public withHostNetwork(hostNetwork: PartitionSpecHostNetwork): PartitionSpec {
        this['hostNetwork'] = hostNetwork;
        return this;
    }
    public withContainerNetwork(containerNetwork: Array<PartitionSpecContainerNetwork>): PartitionSpec {
        this['containerNetwork'] = containerNetwork;
        return this;
    }
    public withPublicBorderGroup(publicBorderGroup: string): PartitionSpec {
        this['publicBorderGroup'] = publicBorderGroup;
        return this;
    }
    public withCategory(category: string): PartitionSpec {
        this['category'] = category;
        return this;
    }
}