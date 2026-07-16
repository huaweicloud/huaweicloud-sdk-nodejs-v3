import { NodeDriver } from './NodeDriver';
import { NodeTag } from './NodeTag';


export class BatchUpdatePoolNodesRequestBody {
    public nodeNames?: Array<string>;
    public action?: BatchUpdatePoolNodesRequestBodyActionEnum | string;
    public haRedundantEffect?: string;
    public driver?: NodeDriver;
    public tags?: Array<NodeTag>;
    public constructor(nodeNames?: Array<string>, action?: string) { 
        this['nodeNames'] = nodeNames;
        this['action'] = action;
    }
    public withNodeNames(nodeNames: Array<string>): BatchUpdatePoolNodesRequestBody {
        this['nodeNames'] = nodeNames;
        return this;
    }
    public withAction(action: BatchUpdatePoolNodesRequestBodyActionEnum | string): BatchUpdatePoolNodesRequestBody {
        this['action'] = action;
        return this;
    }
    public withHaRedundantEffect(haRedundantEffect: string): BatchUpdatePoolNodesRequestBody {
        this['haRedundantEffect'] = haRedundantEffect;
        return this;
    }
    public withDriver(driver: NodeDriver): BatchUpdatePoolNodesRequestBody {
        this['driver'] = driver;
        return this;
    }
    public withTags(tags: Array<NodeTag>): BatchUpdatePoolNodesRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchUpdatePoolNodesRequestBodyActionEnum {
    TRUE = 'true',
    FALSE = 'false'
}
