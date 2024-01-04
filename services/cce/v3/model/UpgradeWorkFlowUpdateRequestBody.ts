import { UpgradeWorkFlowUpdateRequestBodyStatus } from './UpgradeWorkFlowUpdateRequestBodyStatus';


export class UpgradeWorkFlowUpdateRequestBody {
    public status?: UpgradeWorkFlowUpdateRequestBodyStatus;
    public constructor() { 
    }
    public withStatus(status: UpgradeWorkFlowUpdateRequestBodyStatus): UpgradeWorkFlowUpdateRequestBody {
        this['status'] = status;
        return this;
    }
}