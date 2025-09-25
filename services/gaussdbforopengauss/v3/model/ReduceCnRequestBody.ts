

export class ReduceCnRequestBody {
    private 'node_id_list'?: Array<string>;
    public constructor(nodeIdList?: Array<string>) { 
        this['node_id_list'] = nodeIdList;
    }
    public withNodeIdList(nodeIdList: Array<string>): ReduceCnRequestBody {
        this['node_id_list'] = nodeIdList;
        return this;
    }
    public set nodeIdList(nodeIdList: Array<string>  | undefined) {
        this['node_id_list'] = nodeIdList;
    }
    public get nodeIdList(): Array<string> | undefined {
        return this['node_id_list'];
    }
}