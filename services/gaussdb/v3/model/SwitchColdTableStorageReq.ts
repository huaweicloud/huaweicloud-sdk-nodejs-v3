import { TableTarget } from './TableTarget';


export class SwitchColdTableStorageReq {
    public action?: string;
    public tables?: Array<TableTarget>;
    public constructor(action?: string, tables?: Array<TableTarget>) { 
        this['action'] = action;
        this['tables'] = tables;
    }
    public withAction(action: string): SwitchColdTableStorageReq {
        this['action'] = action;
        return this;
    }
    public withTables(tables: Array<TableTarget>): SwitchColdTableStorageReq {
        this['tables'] = tables;
        return this;
    }
}