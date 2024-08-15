import { JobScriptOrderListModel } from './JobScriptOrderListModel';


export class JobScriptOrderListPage {
    public total?: number;
    public data?: Array<JobScriptOrderListModel>;
    public constructor(total?: number, data?: Array<JobScriptOrderListModel>) { 
        this['total'] = total;
        this['data'] = data;
    }
    public withTotal(total: number): JobScriptOrderListPage {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<JobScriptOrderListModel>): JobScriptOrderListPage {
        this['data'] = data;
        return this;
    }
}