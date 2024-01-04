import { WorkFlowPhase } from './WorkFlowPhase';


export class UpgradeWorkFlowUpdateRequestBodyStatus {
    public phase?: WorkFlowPhase;
    public constructor() { 
    }
    public withPhase(phase: WorkFlowPhase): UpgradeWorkFlowUpdateRequestBodyStatus {
        this['phase'] = phase;
        return this;
    }
}