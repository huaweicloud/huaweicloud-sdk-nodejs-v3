import { MysqlProxyNodes } from './MysqlProxyNodes';


export class MysqlProxyV3 {
    private 'pool_id'?: string;
    public status?: string;
    public address?: string;
    public port?: number;
    private 'pool_status'?: string;
    private 'delay_threshold_in_seconds'?: number;
    private 'elb_vip'?: string;
    public eip?: string;
    public vcpus?: string;
    public ram?: string;
    private 'node_num'?: number;
    public mode?: string;
    public nodes?: Array<MysqlProxyNodes>;
    private 'flavor_ref'?: string;
    public name?: string;
    private 'transaction_split'?: string;
    private 'connection_pool_type'?: string;
    private 'switch_connection_pool_type_enabled'?: boolean;
    private 'route_mode'?: number;
    private 'balance_route_mode_enabled'?: boolean;
    private 'consistence_mode'?: string;
    public constructor() { 
    }
    public withPoolId(poolId: string): MysqlProxyV3 {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withStatus(status: string): MysqlProxyV3 {
        this['status'] = status;
        return this;
    }
    public withAddress(address: string): MysqlProxyV3 {
        this['address'] = address;
        return this;
    }
    public withPort(port: number): MysqlProxyV3 {
        this['port'] = port;
        return this;
    }
    public withPoolStatus(poolStatus: string): MysqlProxyV3 {
        this['pool_status'] = poolStatus;
        return this;
    }
    public set poolStatus(poolStatus: string  | undefined) {
        this['pool_status'] = poolStatus;
    }
    public get poolStatus(): string | undefined {
        return this['pool_status'];
    }
    public withDelayThresholdInSeconds(delayThresholdInSeconds: number): MysqlProxyV3 {
        this['delay_threshold_in_seconds'] = delayThresholdInSeconds;
        return this;
    }
    public set delayThresholdInSeconds(delayThresholdInSeconds: number  | undefined) {
        this['delay_threshold_in_seconds'] = delayThresholdInSeconds;
    }
    public get delayThresholdInSeconds(): number | undefined {
        return this['delay_threshold_in_seconds'];
    }
    public withElbVip(elbVip: string): MysqlProxyV3 {
        this['elb_vip'] = elbVip;
        return this;
    }
    public set elbVip(elbVip: string  | undefined) {
        this['elb_vip'] = elbVip;
    }
    public get elbVip(): string | undefined {
        return this['elb_vip'];
    }
    public withEip(eip: string): MysqlProxyV3 {
        this['eip'] = eip;
        return this;
    }
    public withVcpus(vcpus: string): MysqlProxyV3 {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: string): MysqlProxyV3 {
        this['ram'] = ram;
        return this;
    }
    public withNodeNum(nodeNum: number): MysqlProxyV3 {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number  | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum(): number | undefined {
        return this['node_num'];
    }
    public withMode(mode: string): MysqlProxyV3 {
        this['mode'] = mode;
        return this;
    }
    public withNodes(nodes: Array<MysqlProxyNodes>): MysqlProxyV3 {
        this['nodes'] = nodes;
        return this;
    }
    public withFlavorRef(flavorRef: string): MysqlProxyV3 {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withName(name: string): MysqlProxyV3 {
        this['name'] = name;
        return this;
    }
    public withTransactionSplit(transactionSplit: string): MysqlProxyV3 {
        this['transaction_split'] = transactionSplit;
        return this;
    }
    public set transactionSplit(transactionSplit: string  | undefined) {
        this['transaction_split'] = transactionSplit;
    }
    public get transactionSplit(): string | undefined {
        return this['transaction_split'];
    }
    public withConnectionPoolType(connectionPoolType: string): MysqlProxyV3 {
        this['connection_pool_type'] = connectionPoolType;
        return this;
    }
    public set connectionPoolType(connectionPoolType: string  | undefined) {
        this['connection_pool_type'] = connectionPoolType;
    }
    public get connectionPoolType(): string | undefined {
        return this['connection_pool_type'];
    }
    public withSwitchConnectionPoolTypeEnabled(switchConnectionPoolTypeEnabled: boolean): MysqlProxyV3 {
        this['switch_connection_pool_type_enabled'] = switchConnectionPoolTypeEnabled;
        return this;
    }
    public set switchConnectionPoolTypeEnabled(switchConnectionPoolTypeEnabled: boolean  | undefined) {
        this['switch_connection_pool_type_enabled'] = switchConnectionPoolTypeEnabled;
    }
    public get switchConnectionPoolTypeEnabled(): boolean | undefined {
        return this['switch_connection_pool_type_enabled'];
    }
    public withRouteMode(routeMode: number): MysqlProxyV3 {
        this['route_mode'] = routeMode;
        return this;
    }
    public set routeMode(routeMode: number  | undefined) {
        this['route_mode'] = routeMode;
    }
    public get routeMode(): number | undefined {
        return this['route_mode'];
    }
    public withBalanceRouteModeEnabled(balanceRouteModeEnabled: boolean): MysqlProxyV3 {
        this['balance_route_mode_enabled'] = balanceRouteModeEnabled;
        return this;
    }
    public set balanceRouteModeEnabled(balanceRouteModeEnabled: boolean  | undefined) {
        this['balance_route_mode_enabled'] = balanceRouteModeEnabled;
    }
    public get balanceRouteModeEnabled(): boolean | undefined {
        return this['balance_route_mode_enabled'];
    }
    public withConsistenceMode(consistenceMode: string): MysqlProxyV3 {
        this['consistence_mode'] = consistenceMode;
        return this;
    }
    public set consistenceMode(consistenceMode: string  | undefined) {
        this['consistence_mode'] = consistenceMode;
    }
    public get consistenceMode(): string | undefined {
        return this['consistence_mode'];
    }
}