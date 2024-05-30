import { WorkspaceVO } from './WorkspaceVO';


export class ListWorkspacesResultDataValue {
    public total?: number;
    public records?: Array<WorkspaceVO>;
    public constructor() { 
    }
    public withTotal(total: number): ListWorkspacesResultDataValue {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<WorkspaceVO>): ListWorkspacesResultDataValue {
        this['records'] = records;
        return this;
    }
}