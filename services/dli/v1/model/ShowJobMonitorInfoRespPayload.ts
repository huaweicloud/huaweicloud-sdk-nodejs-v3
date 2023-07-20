import { ShowJobMonitorInfoRespPayloadJobs } from './ShowJobMonitorInfoRespPayloadJobs';


export class ShowJobMonitorInfoRespPayload {
    public jobs?: Array<ShowJobMonitorInfoRespPayloadJobs>;
    public constructor() { 
    }
    public withJobs(jobs: Array<ShowJobMonitorInfoRespPayloadJobs>): ShowJobMonitorInfoRespPayload {
        this['jobs'] = jobs;
        return this;
    }
}