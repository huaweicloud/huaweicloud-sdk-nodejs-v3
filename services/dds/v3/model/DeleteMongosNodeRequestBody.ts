

export class DeleteMongosNodeRequestBody {
    private 'node_list'?: Array<string>;
    public constructor(nodeList?: Array<string>) { 
        this['node_list'] = nodeList;
    }
    public withNodeList(nodeList: Array<string>): DeleteMongosNodeRequestBody {
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