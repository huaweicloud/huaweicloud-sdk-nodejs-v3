import { ActionParamsRepairInfoObjects } from './ActionParamsRepairInfoObjects';


export class ActionParamsRepairInfo {
    private 'query_id'?: string;
    public objects?: Array<ActionParamsRepairInfoObjects>;
    public constructor() { 
    }
    public withQueryId(queryId: string): ActionParamsRepairInfo {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: string  | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId(): string | undefined {
        return this['query_id'];
    }
    public withObjects(objects: Array<ActionParamsRepairInfoObjects>): ActionParamsRepairInfo {
        this['objects'] = objects;
        return this;
    }
}