import { PreCheckItemStatus } from './PreCheckItemStatus';


export class AddonCheckStatus {
    public phase?: string;
    public itemsStatus?: Array<PreCheckItemStatus>;
    public constructor() { 
    }
    public withPhase(phase: string): AddonCheckStatus {
        this['phase'] = phase;
        return this;
    }
    public withItemsStatus(itemsStatus: Array<PreCheckItemStatus>): AddonCheckStatus {
        this['itemsStatus'] = itemsStatus;
        return this;
    }
}