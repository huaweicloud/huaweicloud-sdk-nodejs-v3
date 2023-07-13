import { Detail } from './Detail';
import { NodeTypeAvailableZones } from './NodeTypeAvailableZones';
import { NodeTypeDatastores } from './NodeTypeDatastores';
import { NodeTypeElasticVolumeSpecs } from './NodeTypeElasticVolumeSpecs';
import { VolumeResp } from './VolumeResp';


export class NodeTypes {
    private 'spec_name': string | undefined;
    public detail: Array<Detail>;
    public id: string;
    private 'datastore_type': string | undefined;
    private 'available_zones': Array<NodeTypeAvailableZones> | undefined;
    public ram: number;
    public vcpus: number;
    public datastores: Array<NodeTypeDatastores>;
    public volume: VolumeResp;
    private 'elastic_volume_specs': Array<NodeTypeElasticVolumeSpecs> | undefined;
    public constructor(specName?: any, detail?: any, id?: any, datastoreType?: any, availableZones?: any, ram?: any, vcpus?: any, datastores?: any, volume?: any, elasticVolumeSpecs?: any) { 
        this['spec_name'] = specName;
        this['detail'] = detail;
        this['id'] = id;
        this['datastore_type'] = datastoreType;
        this['available_zones'] = availableZones;
        this['ram'] = ram;
        this['vcpus'] = vcpus;
        this['datastores'] = datastores;
        this['volume'] = volume;
        this['elastic_volume_specs'] = elasticVolumeSpecs;
    }
    public withSpecName(specName: string): NodeTypes {
        this['spec_name'] = specName;
        return this;
    }
    public set specName(specName: string | undefined) {
        this['spec_name'] = specName;
    }
    public get specName() {
        return this['spec_name'];
    }
    public withDetail(detail: Array<Detail>): NodeTypes {
        this['detail'] = detail;
        return this;
    }
    public withId(id: string): NodeTypes {
        this['id'] = id;
        return this;
    }
    public withDatastoreType(datastoreType: string): NodeTypes {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType() {
        return this['datastore_type'];
    }
    public withAvailableZones(availableZones: Array<NodeTypeAvailableZones>): NodeTypes {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<NodeTypeAvailableZones> | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones() {
        return this['available_zones'];
    }
    public withRam(ram: number): NodeTypes {
        this['ram'] = ram;
        return this;
    }
    public withVcpus(vcpus: number): NodeTypes {
        this['vcpus'] = vcpus;
        return this;
    }
    public withDatastores(datastores: Array<NodeTypeDatastores>): NodeTypes {
        this['datastores'] = datastores;
        return this;
    }
    public withVolume(volume: VolumeResp): NodeTypes {
        this['volume'] = volume;
        return this;
    }
    public withElasticVolumeSpecs(elasticVolumeSpecs: Array<NodeTypeElasticVolumeSpecs>): NodeTypes {
        this['elastic_volume_specs'] = elasticVolumeSpecs;
        return this;
    }
    public set elasticVolumeSpecs(elasticVolumeSpecs: Array<NodeTypeElasticVolumeSpecs> | undefined) {
        this['elastic_volume_specs'] = elasticVolumeSpecs;
    }
    public get elasticVolumeSpecs() {
        return this['elastic_volume_specs'];
    }
}