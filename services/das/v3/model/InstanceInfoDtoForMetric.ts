import { NodeInfoForMetric } from './NodeInfoForMetric';


export class InstanceInfoDtoForMetric {
    private 'datastore_type'?: string;
    private 'node_infos'?: Array<NodeInfoForMetric>;
    public constructor(datastoreType?: string, nodeInfos?: Array<NodeInfoForMetric>) { 
        this['datastore_type'] = datastoreType;
        this['node_infos'] = nodeInfos;
    }
    public withDatastoreType(datastoreType: string): InstanceInfoDtoForMetric {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withNodeInfos(nodeInfos: Array<NodeInfoForMetric>): InstanceInfoDtoForMetric {
        this['node_infos'] = nodeInfos;
        return this;
    }
    public set nodeInfos(nodeInfos: Array<NodeInfoForMetric>  | undefined) {
        this['node_infos'] = nodeInfos;
    }
    public get nodeInfos(): Array<NodeInfoForMetric> | undefined {
        return this['node_infos'];
    }
}