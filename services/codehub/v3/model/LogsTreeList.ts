import { LogsTree } from './LogsTree';


export class LogsTreeList {
    public trees?: Array<LogsTree>;
    public total?: number;
    public constructor() { 
    }
    public withTrees(trees: Array<LogsTree>): LogsTreeList {
        this['trees'] = trees;
        return this;
    }
    public withTotal(total: number): LogsTreeList {
        this['total'] = total;
        return this;
    }
}