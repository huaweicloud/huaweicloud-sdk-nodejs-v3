import { CreatingStep } from './CreatingStep';
import { DataVolumeItem } from './DataVolumeItem';
import { NodeNetwork } from './NodeNetwork';
import { Os } from './Os';
import { PoolNodeAz } from './PoolNodeAz';
import { ResourceExtendParams } from './ResourceExtendParams';
import { RootVolume } from './RootVolume';
import { Taints } from './Taints';
import { UserTags } from './UserTags';
import { VolumeGroupConfig } from './VolumeGroupConfig';


export class PoolResource {
    public flavor?: string;
    public count?: number;
    public maxCount?: number;
    public azs?: Array<PoolNodeAz>;
    public nodePool?: string;
    public taints?: Array<Taints>;
    public labels?: { [key: string]: string; };
    public tags?: Array<UserTags>;
    public network?: NodeNetwork;
    public extendParams?: ResourceExtendParams;
    public creatingStep?: CreatingStep;
    public rootVolume?: RootVolume;
    public dataVolumes?: Array<DataVolumeItem>;
    public volumeGroupConfigs?: Array<VolumeGroupConfig>;
    public os?: Os;
    public constructor(flavor?: string, count?: number, maxCount?: number) { 
        this['flavor'] = flavor;
        this['count'] = count;
        this['maxCount'] = maxCount;
    }
    public withFlavor(flavor: string): PoolResource {
        this['flavor'] = flavor;
        return this;
    }
    public withCount(count: number): PoolResource {
        this['count'] = count;
        return this;
    }
    public withMaxCount(maxCount: number): PoolResource {
        this['maxCount'] = maxCount;
        return this;
    }
    public withAzs(azs: Array<PoolNodeAz>): PoolResource {
        this['azs'] = azs;
        return this;
    }
    public withNodePool(nodePool: string): PoolResource {
        this['nodePool'] = nodePool;
        return this;
    }
    public withTaints(taints: Array<Taints>): PoolResource {
        this['taints'] = taints;
        return this;
    }
    public withLabels(labels: { [key: string]: string; }): PoolResource {
        this['labels'] = labels;
        return this;
    }
    public withTags(tags: Array<UserTags>): PoolResource {
        this['tags'] = tags;
        return this;
    }
    public withNetwork(network: NodeNetwork): PoolResource {
        this['network'] = network;
        return this;
    }
    public withExtendParams(extendParams: ResourceExtendParams): PoolResource {
        this['extendParams'] = extendParams;
        return this;
    }
    public withCreatingStep(creatingStep: CreatingStep): PoolResource {
        this['creatingStep'] = creatingStep;
        return this;
    }
    public withRootVolume(rootVolume: RootVolume): PoolResource {
        this['rootVolume'] = rootVolume;
        return this;
    }
    public withDataVolumes(dataVolumes: Array<DataVolumeItem>): PoolResource {
        this['dataVolumes'] = dataVolumes;
        return this;
    }
    public withVolumeGroupConfigs(volumeGroupConfigs: Array<VolumeGroupConfig>): PoolResource {
        this['volumeGroupConfigs'] = volumeGroupConfigs;
        return this;
    }
    public withOs(os: Os): PoolResource {
        this['os'] = os;
        return this;
    }
}