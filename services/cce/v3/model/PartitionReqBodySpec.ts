import { PartitionReqBodySpecContainerNetwork } from './PartitionReqBodySpecContainerNetwork';
import { PartitionReqBodySpecHostNetwork } from './PartitionReqBodySpecHostNetwork';


export class PartitionReqBodySpec {
    public hostNetwork?: PartitionReqBodySpecHostNetwork;
    public containerNetwork?: Array<PartitionReqBodySpecContainerNetwork>;
    public publicBorderGroup?: string;
    public category?: string;
    public constructor() { 
    }
    public withHostNetwork(hostNetwork: PartitionReqBodySpecHostNetwork): PartitionReqBodySpec {
        this['hostNetwork'] = hostNetwork;
        return this;
    }
    public withContainerNetwork(containerNetwork: Array<PartitionReqBodySpecContainerNetwork>): PartitionReqBodySpec {
        this['containerNetwork'] = containerNetwork;
        return this;
    }
    public withPublicBorderGroup(publicBorderGroup: string): PartitionReqBodySpec {
        this['publicBorderGroup'] = publicBorderGroup;
        return this;
    }
    public withCategory(category: string): PartitionReqBodySpec {
        this['category'] = category;
        return this;
    }
}