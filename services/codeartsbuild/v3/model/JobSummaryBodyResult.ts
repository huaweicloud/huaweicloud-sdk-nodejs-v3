import { JobSummary } from './JobSummary';


export class JobSummaryBodyResult {
    public summary?: JobSummary;
    public constructor() { 
    }
    public withSummary(summary: JobSummary): JobSummaryBodyResult {
        this['summary'] = summary;
        return this;
    }
}