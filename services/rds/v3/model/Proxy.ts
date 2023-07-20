import { ProxyNode } from './ProxyNode';


export class Proxy {
    private 'pool_id'?: string;
    public status?: string;
    public address?: string;
    private 'elb_vip'?: string;
    public eip?: string;
    public port?: number;
    private 'pool_status'?: string;
    private 'delay_threshold_in_kilobytes'?: number;
    public cpu?: string;
    public mem?: string;
    private 'node_num'?: number;
    public nodes?: Array<ProxyNode>;
    public mode?: string;
    public constructor(poolId?: string, status?: string, address?: string, elbVip?: string, eip?: string, port?: number, poolStatus?: string, delayThresholdInKilobytes?: number, cpu?: string, mem?: string, nodeNum?: number, nodes?: Array<ProxyNode>, mode?: string) { 
        this['pool_id'] = poolId;
        this['status'] = status;
        this['address'] = address;
        this['elb_vip'] = elbVip;
        this['eip'] = eip;
        this['port'] = port;
        this['pool_status'] = poolStatus;
        this['delay_threshold_in_kilobytes'] = delayThresholdInKilobytes;
        this['cpu'] = cpu;
        this['mem'] = mem;
        this['node_num'] = nodeNum;
        this['nodes'] = nodes;
        this['mode'] = mode;
    }
    public withPoolId(poolId: string): Proxy {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withStatus(status: string): Proxy {
        this['status'] = status;
        return this;
    }
    public withAddress(address: string): Proxy {
        this['address'] = address;
        return this;
    }
    public withElbVip(elbVip: string): Proxy {
        this['elb_vip'] = elbVip;
        return this;
    }
    public set elbVip(elbVip: string  | undefined) {
        this['elb_vip'] = elbVip;
    }
    public get elbVip(): string | undefined {
        return this['elb_vip'];
    }
    public withEip(eip: string): Proxy {
        this['eip'] = eip;
        return this;
    }
    public withPort(port: number): Proxy {
        this['port'] = port;
        return this;
    }
    public withPoolStatus(poolStatus: string): Proxy {
        this['pool_status'] = poolStatus;
        return this;
    }
    public set poolStatus(poolStatus: string  | undefined) {
        this['pool_status'] = poolStatus;
    }
    public get poolStatus(): string | undefined {
        return this['pool_status'];
    }
    public withDelayThresholdInKilobytes(delayThresholdInKilobytes: number): Proxy {
        this['delay_threshold_in_kilobytes'] = delayThresholdInKilobytes;
        return this;
    }
    public set delayThresholdInKilobytes(delayThresholdInKilobytes: number  | undefined) {
        this['delay_threshold_in_kilobytes'] = delayThresholdInKilobytes;
    }
    public get delayThresholdInKilobytes(): number | undefined {
        return this['delay_threshold_in_kilobytes'];
    }
    public withCpu(cpu: string): Proxy {
        this['cpu'] = cpu;
        return this;
    }
    public withMem(mem: string): Proxy {
        this['mem'] = mem;
        return this;
    }
    public withNodeNum(nodeNum: number): Proxy {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number  | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum(): number | undefined {
        return this['node_num'];
    }
    public withNodes(nodes: Array<ProxyNode>): Proxy {
        this['nodes'] = nodes;
        return this;
    }
    public withMode(mode: string): Proxy {
        this['mode'] = mode;
        return this;
    }
}