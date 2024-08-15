import { PublicScriptListModel } from './PublicScriptListModel';


export class PublicScriptListPage {
    public total?: number;
    public data?: Array<PublicScriptListModel>;
    public constructor(total?: number, data?: Array<PublicScriptListModel>) { 
        this['total'] = total;
        this['data'] = data;
    }
    public withTotal(total: number): PublicScriptListPage {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<PublicScriptListModel>): PublicScriptListPage {
        this['data'] = data;
        return this;
    }
}