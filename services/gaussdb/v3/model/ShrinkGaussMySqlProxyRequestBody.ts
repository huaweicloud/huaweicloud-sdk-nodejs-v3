

export class ShrinkGaussMySqlProxyRequestBody {
    private 'node_num'?: number;
    private 'node_ids'?: Array<string>;
    public constructor(nodeNum?: number) { 
        this['node_num'] = nodeNum;
    }
    public withNodeNum(nodeNum: number): ShrinkGaussMySqlProxyRequestBody {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number  | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum(): number | undefined {
        return this['node_num'];
    }
    public withNodeIds(nodeIds: Array<string>): ShrinkGaussMySqlProxyRequestBody {
        this['node_ids'] = nodeIds;
        return this;
    }
    public set nodeIds(nodeIds: Array<string>  | undefined) {
        this['node_ids'] = nodeIds;
    }
    public get nodeIds(): Array<string> | undefined {
        return this['node_ids'];
    }
}