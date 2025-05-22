import { BandWidth } from './BandWidth';
import { DimsInfo } from './DimsInfo';
import { KeySpace } from './KeySpace';


export class TopologyInfo {
    private 'node_id'?: string;
    private 'node_name'?: string;
    public ip?: string;
    public port?: string;
    private 'node_type'?: TopologyInfoNodeTypeEnum | string;
    private 'max_memory'?: string;
    private 'used_memory'?: string;
    public qps?: string;
    public bandwidth?: BandWidth;
    private 'db_num'?: string;
    public dbs?: KeySpace;
    private 'relation_ip'?: string;
    private 'relation_port'?: string;
    private 'group_id'?: string;
    public status?: string;
    public dims?: DimsInfo;
    public constructor() { 
    }
    public withNodeId(nodeId: string): TopologyInfo {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeName(nodeName: string): TopologyInfo {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withIp(ip: string): TopologyInfo {
        this['ip'] = ip;
        return this;
    }
    public withPort(port: string): TopologyInfo {
        this['port'] = port;
        return this;
    }
    public withNodeType(nodeType: TopologyInfoNodeTypeEnum | string): TopologyInfo {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: TopologyInfoNodeTypeEnum | string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): TopologyInfoNodeTypeEnum | string | undefined {
        return this['node_type'];
    }
    public withMaxMemory(maxMemory: string): TopologyInfo {
        this['max_memory'] = maxMemory;
        return this;
    }
    public set maxMemory(maxMemory: string  | undefined) {
        this['max_memory'] = maxMemory;
    }
    public get maxMemory(): string | undefined {
        return this['max_memory'];
    }
    public withUsedMemory(usedMemory: string): TopologyInfo {
        this['used_memory'] = usedMemory;
        return this;
    }
    public set usedMemory(usedMemory: string  | undefined) {
        this['used_memory'] = usedMemory;
    }
    public get usedMemory(): string | undefined {
        return this['used_memory'];
    }
    public withQps(qps: string): TopologyInfo {
        this['qps'] = qps;
        return this;
    }
    public withBandwidth(bandwidth: BandWidth): TopologyInfo {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withDbNum(dbNum: string): TopologyInfo {
        this['db_num'] = dbNum;
        return this;
    }
    public set dbNum(dbNum: string  | undefined) {
        this['db_num'] = dbNum;
    }
    public get dbNum(): string | undefined {
        return this['db_num'];
    }
    public withDbs(dbs: KeySpace): TopologyInfo {
        this['dbs'] = dbs;
        return this;
    }
    public withRelationIp(relationIp: string): TopologyInfo {
        this['relation_ip'] = relationIp;
        return this;
    }
    public set relationIp(relationIp: string  | undefined) {
        this['relation_ip'] = relationIp;
    }
    public get relationIp(): string | undefined {
        return this['relation_ip'];
    }
    public withRelationPort(relationPort: string): TopologyInfo {
        this['relation_port'] = relationPort;
        return this;
    }
    public set relationPort(relationPort: string  | undefined) {
        this['relation_port'] = relationPort;
    }
    public get relationPort(): string | undefined {
        return this['relation_port'];
    }
    public withGroupId(groupId: string): TopologyInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withStatus(status: string): TopologyInfo {
        this['status'] = status;
        return this;
    }
    public withDims(dims: DimsInfo): TopologyInfo {
        this['dims'] = dims;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TopologyInfoNodeTypeEnum {
    MASTER = 'master',
    SLAVE = 'slave',
    PROXY = 'proxy'
}
