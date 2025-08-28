import { ListInstanceMultiNodesSingleMetricNodeInfos } from './ListInstanceMultiNodesSingleMetricNodeInfos';


export class ListInstanceMultiNodesSingleMetricInstanceInfos {
    private 'datastore_type'?: string;
    private 'node_infos'?: Array<ListInstanceMultiNodesSingleMetricNodeInfos>;
    public constructor(datastoreType?: string, nodeInfos?: Array<ListInstanceMultiNodesSingleMetricNodeInfos>) { 
        this['datastore_type'] = datastoreType;
        this['node_infos'] = nodeInfos;
    }
    public withDatastoreType(datastoreType: string): ListInstanceMultiNodesSingleMetricInstanceInfos {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withNodeInfos(nodeInfos: Array<ListInstanceMultiNodesSingleMetricNodeInfos>): ListInstanceMultiNodesSingleMetricInstanceInfos {
        this['node_infos'] = nodeInfos;
        return this;
    }
    public set nodeInfos(nodeInfos: Array<ListInstanceMultiNodesSingleMetricNodeInfos>  | undefined) {
        this['node_infos'] = nodeInfos;
    }
    public get nodeInfos(): Array<ListInstanceMultiNodesSingleMetricNodeInfos> | undefined {
        return this['node_infos'];
    }
}