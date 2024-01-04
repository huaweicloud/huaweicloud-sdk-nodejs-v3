import { LineStatus } from './LineStatus';
import { PointStatus } from './PointStatus';
import { WorkFlowPhase } from './WorkFlowPhase';


export class WorkFlowStatus {
    public phase?: WorkFlowPhase;
    public pointStatuses?: Array<PointStatus>;
    public lineStatuses?: Array<LineStatus>;
    public constructor() { 
    }
    public withPhase(phase: WorkFlowPhase): WorkFlowStatus {
        this['phase'] = phase;
        return this;
    }
    public withPointStatuses(pointStatuses: Array<PointStatus>): WorkFlowStatus {
        this['pointStatuses'] = pointStatuses;
        return this;
    }
    public withLineStatuses(lineStatuses: Array<LineStatus>): WorkFlowStatus {
        this['lineStatuses'] = lineStatuses;
        return this;
    }
}