import { JobDetailRespRepairProgressInfoRepairProgressDetails } from './JobDetailRespRepairProgressInfoRepairProgressDetails';


export class JobDetailRespRepairProgressInfo {
    public status?: string;
    public progress?: string;
    private 'error_msg'?: string;
    public count?: number;
    private 'repair_progress_details'?: JobDetailRespRepairProgressInfoRepairProgressDetails;
    public constructor() { 
    }
    public withStatus(status: string): JobDetailRespRepairProgressInfo {
        this['status'] = status;
        return this;
    }
    public withProgress(progress: string): JobDetailRespRepairProgressInfo {
        this['progress'] = progress;
        return this;
    }
    public withErrorMsg(errorMsg: string): JobDetailRespRepairProgressInfo {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withCount(count: number): JobDetailRespRepairProgressInfo {
        this['count'] = count;
        return this;
    }
    public withRepairProgressDetails(repairProgressDetails: JobDetailRespRepairProgressInfoRepairProgressDetails): JobDetailRespRepairProgressInfo {
        this['repair_progress_details'] = repairProgressDetails;
        return this;
    }
    public set repairProgressDetails(repairProgressDetails: JobDetailRespRepairProgressInfoRepairProgressDetails  | undefined) {
        this['repair_progress_details'] = repairProgressDetails;
    }
    public get repairProgressDetails(): JobDetailRespRepairProgressInfoRepairProgressDetails | undefined {
        return this['repair_progress_details'];
    }
}