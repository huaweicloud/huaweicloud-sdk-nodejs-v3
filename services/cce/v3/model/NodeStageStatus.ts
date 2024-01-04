import { NodeInfo } from './NodeInfo';
import { PreCheckItemStatus } from './PreCheckItemStatus';


export class NodeStageStatus {
    public nodeInfo?: NodeInfo;
    public itemsStatus?: Array<PreCheckItemStatus>;
    public constructor() { 
    }
    public withNodeInfo(nodeInfo: NodeInfo): NodeStageStatus {
        this['nodeInfo'] = nodeInfo;
        return this;
    }
    public withItemsStatus(itemsStatus: Array<PreCheckItemStatus>): NodeStageStatus {
        this['itemsStatus'] = itemsStatus;
        return this;
    }
}