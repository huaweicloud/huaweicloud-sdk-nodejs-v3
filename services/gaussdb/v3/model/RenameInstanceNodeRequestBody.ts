import { SingleNodeInfo } from './SingleNodeInfo';


export class RenameInstanceNodeRequestBody {
    private 'node_list'?: Array<SingleNodeInfo>;
    public constructor(nodeList?: Array<SingleNodeInfo>) { 
        this['node_list'] = nodeList;
    }
    public withNodeList(nodeList: Array<SingleNodeInfo>): RenameInstanceNodeRequestBody {
        this['node_list'] = nodeList;
        return this;
    }
    public set nodeList(nodeList: Array<SingleNodeInfo>  | undefined) {
        this['node_list'] = nodeList;
    }
    public get nodeList(): Array<SingleNodeInfo> | undefined {
        return this['node_list'];
    }
}