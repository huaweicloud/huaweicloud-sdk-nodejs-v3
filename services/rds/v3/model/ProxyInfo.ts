import { ProxyInfoFlavorInfo } from './ProxyInfoFlavorInfo';
import { ProxyInfoNodes } from './ProxyInfoNodes';


export class ProxyInfo {
    private 'pool_id'?: string;
    public status?: string;
    public address?: string;
    public port?: number;
    private 'delay_threshold_in_seconds'?: number;
    public cpu?: string;
    public mem?: string;
    private 'node_num'?: number;
    public nodes?: Array<ProxyInfoNodes>;
    public mode?: string;
    private 'flavor_info'?: ProxyInfoFlavorInfo;
    private 'transaction_split'?: string;
    private 'connection_pool_type'?: string;
    private 'pay_mode'?: string;
    public name?: string;
    private 'proxy_mode'?: string;
    private 'dns_name'?: string;
    private 'subnet_id'?: string;
    private 'seconds_level_monitor_fun_status'?: ProxyInfoSecondsLevelMonitorFunStatusEnum | string;
    private 'alt_flag'?: boolean;
    private 'force_read_only'?: boolean;
    private 'route_mode'?: number;
    private 'ssl_option'?: boolean;
    private 'support_balance_route_mode'?: boolean;
    private 'support_proxy_ssl'?: boolean;
    private 'support_switch_connection_pool_type'?: boolean;
    private 'support_transaction_split'?: boolean;
    public constructor() { 
    }
    public withPoolId(poolId: string): ProxyInfo {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withStatus(status: string): ProxyInfo {
        this['status'] = status;
        return this;
    }
    public withAddress(address: string): ProxyInfo {
        this['address'] = address;
        return this;
    }
    public withPort(port: number): ProxyInfo {
        this['port'] = port;
        return this;
    }
    public withDelayThresholdInSeconds(delayThresholdInSeconds: number): ProxyInfo {
        this['delay_threshold_in_seconds'] = delayThresholdInSeconds;
        return this;
    }
    public set delayThresholdInSeconds(delayThresholdInSeconds: number  | undefined) {
        this['delay_threshold_in_seconds'] = delayThresholdInSeconds;
    }
    public get delayThresholdInSeconds(): number | undefined {
        return this['delay_threshold_in_seconds'];
    }
    public withCpu(cpu: string): ProxyInfo {
        this['cpu'] = cpu;
        return this;
    }
    public withMem(mem: string): ProxyInfo {
        this['mem'] = mem;
        return this;
    }
    public withNodeNum(nodeNum: number): ProxyInfo {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number  | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum(): number | undefined {
        return this['node_num'];
    }
    public withNodes(nodes: Array<ProxyInfoNodes>): ProxyInfo {
        this['nodes'] = nodes;
        return this;
    }
    public withMode(mode: string): ProxyInfo {
        this['mode'] = mode;
        return this;
    }
    public withFlavorInfo(flavorInfo: ProxyInfoFlavorInfo): ProxyInfo {
        this['flavor_info'] = flavorInfo;
        return this;
    }
    public set flavorInfo(flavorInfo: ProxyInfoFlavorInfo  | undefined) {
        this['flavor_info'] = flavorInfo;
    }
    public get flavorInfo(): ProxyInfoFlavorInfo | undefined {
        return this['flavor_info'];
    }
    public withTransactionSplit(transactionSplit: string): ProxyInfo {
        this['transaction_split'] = transactionSplit;
        return this;
    }
    public set transactionSplit(transactionSplit: string  | undefined) {
        this['transaction_split'] = transactionSplit;
    }
    public get transactionSplit(): string | undefined {
        return this['transaction_split'];
    }
    public withConnectionPoolType(connectionPoolType: string): ProxyInfo {
        this['connection_pool_type'] = connectionPoolType;
        return this;
    }
    public set connectionPoolType(connectionPoolType: string  | undefined) {
        this['connection_pool_type'] = connectionPoolType;
    }
    public get connectionPoolType(): string | undefined {
        return this['connection_pool_type'];
    }
    public withPayMode(payMode: string): ProxyInfo {
        this['pay_mode'] = payMode;
        return this;
    }
    public set payMode(payMode: string  | undefined) {
        this['pay_mode'] = payMode;
    }
    public get payMode(): string | undefined {
        return this['pay_mode'];
    }
    public withName(name: string): ProxyInfo {
        this['name'] = name;
        return this;
    }
    public withProxyMode(proxyMode: string): ProxyInfo {
        this['proxy_mode'] = proxyMode;
        return this;
    }
    public set proxyMode(proxyMode: string  | undefined) {
        this['proxy_mode'] = proxyMode;
    }
    public get proxyMode(): string | undefined {
        return this['proxy_mode'];
    }
    public withDnsName(dnsName: string): ProxyInfo {
        this['dns_name'] = dnsName;
        return this;
    }
    public set dnsName(dnsName: string  | undefined) {
        this['dns_name'] = dnsName;
    }
    public get dnsName(): string | undefined {
        return this['dns_name'];
    }
    public withSubnetId(subnetId: string): ProxyInfo {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecondsLevelMonitorFunStatus(secondsLevelMonitorFunStatus: ProxyInfoSecondsLevelMonitorFunStatusEnum | string): ProxyInfo {
        this['seconds_level_monitor_fun_status'] = secondsLevelMonitorFunStatus;
        return this;
    }
    public set secondsLevelMonitorFunStatus(secondsLevelMonitorFunStatus: ProxyInfoSecondsLevelMonitorFunStatusEnum | string  | undefined) {
        this['seconds_level_monitor_fun_status'] = secondsLevelMonitorFunStatus;
    }
    public get secondsLevelMonitorFunStatus(): ProxyInfoSecondsLevelMonitorFunStatusEnum | string | undefined {
        return this['seconds_level_monitor_fun_status'];
    }
    public withAltFlag(altFlag: boolean): ProxyInfo {
        this['alt_flag'] = altFlag;
        return this;
    }
    public set altFlag(altFlag: boolean  | undefined) {
        this['alt_flag'] = altFlag;
    }
    public get altFlag(): boolean | undefined {
        return this['alt_flag'];
    }
    public withForceReadOnly(forceReadOnly: boolean): ProxyInfo {
        this['force_read_only'] = forceReadOnly;
        return this;
    }
    public set forceReadOnly(forceReadOnly: boolean  | undefined) {
        this['force_read_only'] = forceReadOnly;
    }
    public get forceReadOnly(): boolean | undefined {
        return this['force_read_only'];
    }
    public withRouteMode(routeMode: number): ProxyInfo {
        this['route_mode'] = routeMode;
        return this;
    }
    public set routeMode(routeMode: number  | undefined) {
        this['route_mode'] = routeMode;
    }
    public get routeMode(): number | undefined {
        return this['route_mode'];
    }
    public withSslOption(sslOption: boolean): ProxyInfo {
        this['ssl_option'] = sslOption;
        return this;
    }
    public set sslOption(sslOption: boolean  | undefined) {
        this['ssl_option'] = sslOption;
    }
    public get sslOption(): boolean | undefined {
        return this['ssl_option'];
    }
    public withSupportBalanceRouteMode(supportBalanceRouteMode: boolean): ProxyInfo {
        this['support_balance_route_mode'] = supportBalanceRouteMode;
        return this;
    }
    public set supportBalanceRouteMode(supportBalanceRouteMode: boolean  | undefined) {
        this['support_balance_route_mode'] = supportBalanceRouteMode;
    }
    public get supportBalanceRouteMode(): boolean | undefined {
        return this['support_balance_route_mode'];
    }
    public withSupportProxySsl(supportProxySsl: boolean): ProxyInfo {
        this['support_proxy_ssl'] = supportProxySsl;
        return this;
    }
    public set supportProxySsl(supportProxySsl: boolean  | undefined) {
        this['support_proxy_ssl'] = supportProxySsl;
    }
    public get supportProxySsl(): boolean | undefined {
        return this['support_proxy_ssl'];
    }
    public withSupportSwitchConnectionPoolType(supportSwitchConnectionPoolType: boolean): ProxyInfo {
        this['support_switch_connection_pool_type'] = supportSwitchConnectionPoolType;
        return this;
    }
    public set supportSwitchConnectionPoolType(supportSwitchConnectionPoolType: boolean  | undefined) {
        this['support_switch_connection_pool_type'] = supportSwitchConnectionPoolType;
    }
    public get supportSwitchConnectionPoolType(): boolean | undefined {
        return this['support_switch_connection_pool_type'];
    }
    public withSupportTransactionSplit(supportTransactionSplit: boolean): ProxyInfo {
        this['support_transaction_split'] = supportTransactionSplit;
        return this;
    }
    public set supportTransactionSplit(supportTransactionSplit: boolean  | undefined) {
        this['support_transaction_split'] = supportTransactionSplit;
    }
    public get supportTransactionSplit(): boolean | undefined {
        return this['support_transaction_split'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ProxyInfoSecondsLevelMonitorFunStatusEnum {
    OFF = 'off',
    ON = 'on'
}
