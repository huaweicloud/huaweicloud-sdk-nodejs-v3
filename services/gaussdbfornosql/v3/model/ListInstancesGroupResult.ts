import { ListInstancesNodeResult } from './ListInstancesNodeResult';
import { Volume } from './Volume';


export class ListInstancesGroupResult {
    public id?: string;
    public status?: string;
    public volume?: Volume;
    public nodes?: Array<ListInstancesNodeResult>;
    public constructor(id?: string, status?: string, volume?: Volume, nodes?: Array<ListInstancesNodeResult>) { 
        this['id'] = id;
        this['status'] = status;
        this['volume'] = volume;
        this['nodes'] = nodes;
    }
    public withId(id: string): ListInstancesGroupResult {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): ListInstancesGroupResult {
        this['status'] = status;
        return this;
    }
    public withVolume(volume: Volume): ListInstancesGroupResult {
        this['volume'] = volume;
        return this;
    }
    public withNodes(nodes: Array<ListInstancesNodeResult>): ListInstancesGroupResult {
        this['nodes'] = nodes;
        return this;
    }
}