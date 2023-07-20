

export class ReduceInstanceNodeRequestBody {
    public num?: number;
    private 'node_list'?: Array<string>;
    public constructor() { 
    }
    public withNum(num: number): ReduceInstanceNodeRequestBody {
        this['num'] = num;
        return this;
    }
    public withNodeList(nodeList: Array<string>): ReduceInstanceNodeRequestBody {
        this['node_list'] = nodeList;
        return this;
    }
    public set nodeList(nodeList: Array<string>  | undefined) {
        this['node_list'] = nodeList;
    }
    public get nodeList(): Array<string> | undefined {
        return this['node_list'];
    }
}