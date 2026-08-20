import { ExtensionModule } from './ExtensionModule';


export class ExtensionModuleList {
    public data?: Array<ExtensionModule>;
    public total?: number;
    public constructor() { 
    }
    public withData(data: Array<ExtensionModule>): ExtensionModuleList {
        this['data'] = data;
        return this;
    }
    public withTotal(total: number): ExtensionModuleList {
        this['total'] = total;
        return this;
    }
}