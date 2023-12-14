

export class DeleteClusterNodesRequestBody {
    private 'node_list'?: Array<string>;
    private 'operate_type'?: string;
    public constructor(nodeList?: Array<string>, operateType?: string) { 
        this['node_list'] = nodeList;
        this['operate_type'] = operateType;
    }
    public withNodeList(nodeList: Array<string>): DeleteClusterNodesRequestBody {
        this['node_list'] = nodeList;
        return this;
    }
    public set nodeList(nodeList: Array<string>  | undefined) {
        this['node_list'] = nodeList;
    }
    public get nodeList(): Array<string> | undefined {
        return this['node_list'];
    }
    public withOperateType(operateType: string): DeleteClusterNodesRequestBody {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): string | undefined {
        return this['operate_type'];
    }
}