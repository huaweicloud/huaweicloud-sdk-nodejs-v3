import { PreCheckItemStatus } from './PreCheckItemStatus';


export class ClusterCheckStatus {
    public phase?: string;
    public itemsStatus?: Array<PreCheckItemStatus>;
    public constructor() { 
    }
    public withPhase(phase: string): ClusterCheckStatus {
        this['phase'] = phase;
        return this;
    }
    public withItemsStatus(itemsStatus: Array<PreCheckItemStatus>): ClusterCheckStatus {
        this['itemsStatus'] = itemsStatus;
        return this;
    }
}