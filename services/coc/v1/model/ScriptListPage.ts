import { ScriptListModel } from './ScriptListModel';


export class ScriptListPage {
    public total?: number;
    public data?: Array<ScriptListModel>;
    public constructor(total?: number, data?: Array<ScriptListModel>) { 
        this['total'] = total;
        this['data'] = data;
    }
    public withTotal(total: number): ScriptListPage {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<ScriptListModel>): ScriptListPage {
        this['data'] = data;
        return this;
    }
}