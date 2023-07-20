import { MysqlProxyNodeV3 } from './MysqlProxyNodeV3';
import { MysqlProxyV3 } from './MysqlProxyV3';


export class MysqlShowProxyResponseV3 {
    public proxy?: MysqlProxyV3;
    private 'master_node'?: MysqlProxyNodeV3;
    private 'readonly_nodes'?: Array<MysqlProxyNodeV3>;
    public constructor() { 
    }
    public withProxy(proxy: MysqlProxyV3): MysqlShowProxyResponseV3 {
        this['proxy'] = proxy;
        return this;
    }
    public withMasterNode(masterNode: MysqlProxyNodeV3): MysqlShowProxyResponseV3 {
        this['master_node'] = masterNode;
        return this;
    }
    public set masterNode(masterNode: MysqlProxyNodeV3  | undefined) {
        this['master_node'] = masterNode;
    }
    public get masterNode(): MysqlProxyNodeV3 | undefined {
        return this['master_node'];
    }
    public withReadonlyNodes(readonlyNodes: Array<MysqlProxyNodeV3>): MysqlShowProxyResponseV3 {
        this['readonly_nodes'] = readonlyNodes;
        return this;
    }
    public set readonlyNodes(readonlyNodes: Array<MysqlProxyNodeV3>  | undefined) {
        this['readonly_nodes'] = readonlyNodes;
    }
    public get readonlyNodes(): Array<MysqlProxyNodeV3> | undefined {
        return this['readonly_nodes'];
    }
}