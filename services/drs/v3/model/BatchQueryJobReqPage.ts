import { PageReq } from './PageReq';


export class BatchQueryJobReqPage {
    public jobs?: Array<string>;
    private 'page_req'?: PageReq;
    public constructor(jobs?: Array<string>) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<string>): BatchQueryJobReqPage {
        this['jobs'] = jobs;
        return this;
    }
    public withPageReq(pageReq: PageReq): BatchQueryJobReqPage {
        this['page_req'] = pageReq;
        return this;
    }
    public set pageReq(pageReq: PageReq  | undefined) {
        this['page_req'] = pageReq;
    }
    public get pageReq(): PageReq | undefined {
        return this['page_req'];
    }
}