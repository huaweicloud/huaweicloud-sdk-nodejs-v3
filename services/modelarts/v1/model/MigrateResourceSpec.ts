import { CreatingStep } from './CreatingStep';
import { DataVolumeItem } from './DataVolumeItem';
import { NodeNetwork } from './NodeNetwork';
import { ResourceExtendParams } from './ResourceExtendParams';
import { RootVolume } from './RootVolume';
import { Taints } from './Taints';
import { UserTags } from './UserTags';
import { VolumeGroupConfig } from './VolumeGroupConfig';


export class MigrateResourceSpec {
    public flavor?: string;
    public creatingStep?: CreatingStep;
    public nodePool?: string;
    public rootVolume?: RootVolume;
    public dataVolumes?: Array<DataVolumeItem>;
    public volumeGroupConfigs?: Array<VolumeGroupConfig>;
    public labels?: { [key: string]: string; };
    public taints?: Array<Taints>;
    public tags?: Array<UserTags>;
    public network?: NodeNetwork;
    public extendParams?: ResourceExtendParams;
    public constructor(flavor?: string) { 
        this['flavor'] = flavor;
    }
    public withFlavor(flavor: string): MigrateResourceSpec {
        this['flavor'] = flavor;
        return this;
    }
    public withCreatingStep(creatingStep: CreatingStep): MigrateResourceSpec {
        this['creatingStep'] = creatingStep;
        return this;
    }
    public withNodePool(nodePool: string): MigrateResourceSpec {
        this['nodePool'] = nodePool;
        return this;
    }
    public withRootVolume(rootVolume: RootVolume): MigrateResourceSpec {
        this['rootVolume'] = rootVolume;
        return this;
    }
    public withDataVolumes(dataVolumes: Array<DataVolumeItem>): MigrateResourceSpec {
        this['dataVolumes'] = dataVolumes;
        return this;
    }
    public withVolumeGroupConfigs(volumeGroupConfigs: Array<VolumeGroupConfig>): MigrateResourceSpec {
        this['volumeGroupConfigs'] = volumeGroupConfigs;
        return this;
    }
    public withLabels(labels: { [key: string]: string; }): MigrateResourceSpec {
        this['labels'] = labels;
        return this;
    }
    public withTaints(taints: Array<Taints>): MigrateResourceSpec {
        this['taints'] = taints;
        return this;
    }
    public withTags(tags: Array<UserTags>): MigrateResourceSpec {
        this['tags'] = tags;
        return this;
    }
    public withNetwork(network: NodeNetwork): MigrateResourceSpec {
        this['network'] = network;
        return this;
    }
    public withExtendParams(extendParams: ResourceExtendParams): MigrateResourceSpec {
        this['extendParams'] = extendParams;
        return this;
    }
}