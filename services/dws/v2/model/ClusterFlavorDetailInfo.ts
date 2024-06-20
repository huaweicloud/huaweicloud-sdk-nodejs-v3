import { FlavorAttributeInfo } from './FlavorAttributeInfo';
import { FlavorVolumeNodeInfo } from './FlavorVolumeNodeInfo';


export class ClusterFlavorDetailInfo {
    public id?: string;
    private 'spec_name'?: string;
    private 'current_node'?: number;
    private 'min_node'?: number;
    private 'max_node'?: number;
    public classify?: string;
    private 'datastore_version'?: string;
    public attribute?: Array<FlavorAttributeInfo>;
    private 'volume_node'?: FlavorVolumeNodeInfo;
    public constructor(id?: string, specName?: string, currentNode?: number, minNode?: number, maxNode?: number, classify?: string, datastoreVersion?: string, attribute?: Array<FlavorAttributeInfo>, volumeNode?: FlavorVolumeNodeInfo) { 
        this['id'] = id;
        this['spec_name'] = specName;
        this['current_node'] = currentNode;
        this['min_node'] = minNode;
        this['max_node'] = maxNode;
        this['classify'] = classify;
        this['datastore_version'] = datastoreVersion;
        this['attribute'] = attribute;
        this['volume_node'] = volumeNode;
    }
    public withId(id: string): ClusterFlavorDetailInfo {
        this['id'] = id;
        return this;
    }
    public withSpecName(specName: string): ClusterFlavorDetailInfo {
        this['spec_name'] = specName;
        return this;
    }
    public set specName(specName: string  | undefined) {
        this['spec_name'] = specName;
    }
    public get specName(): string | undefined {
        return this['spec_name'];
    }
    public withCurrentNode(currentNode: number): ClusterFlavorDetailInfo {
        this['current_node'] = currentNode;
        return this;
    }
    public set currentNode(currentNode: number  | undefined) {
        this['current_node'] = currentNode;
    }
    public get currentNode(): number | undefined {
        return this['current_node'];
    }
    public withMinNode(minNode: number): ClusterFlavorDetailInfo {
        this['min_node'] = minNode;
        return this;
    }
    public set minNode(minNode: number  | undefined) {
        this['min_node'] = minNode;
    }
    public get minNode(): number | undefined {
        return this['min_node'];
    }
    public withMaxNode(maxNode: number): ClusterFlavorDetailInfo {
        this['max_node'] = maxNode;
        return this;
    }
    public set maxNode(maxNode: number  | undefined) {
        this['max_node'] = maxNode;
    }
    public get maxNode(): number | undefined {
        return this['max_node'];
    }
    public withClassify(classify: string): ClusterFlavorDetailInfo {
        this['classify'] = classify;
        return this;
    }
    public withDatastoreVersion(datastoreVersion: string): ClusterFlavorDetailInfo {
        this['datastore_version'] = datastoreVersion;
        return this;
    }
    public set datastoreVersion(datastoreVersion: string  | undefined) {
        this['datastore_version'] = datastoreVersion;
    }
    public get datastoreVersion(): string | undefined {
        return this['datastore_version'];
    }
    public withAttribute(attribute: Array<FlavorAttributeInfo>): ClusterFlavorDetailInfo {
        this['attribute'] = attribute;
        return this;
    }
    public withVolumeNode(volumeNode: FlavorVolumeNodeInfo): ClusterFlavorDetailInfo {
        this['volume_node'] = volumeNode;
        return this;
    }
    public set volumeNode(volumeNode: FlavorVolumeNodeInfo  | undefined) {
        this['volume_node'] = volumeNode;
    }
    public get volumeNode(): FlavorVolumeNodeInfo | undefined {
        return this['volume_node'];
    }
}