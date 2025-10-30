

export class EventForensicInfoNetworkForensic {
    private 'local_address'?: string;
    private 'local_port'?: number;
    private 'src_ip'?: string;
    private 'remote_address'?: string;
    private 'remote_port'?: number;
    public protocol?: string;
    private 'app_protocol'?: string;
    private 'flow_direction'?: string;
    public count?: number;
    private 'first_time'?: number;
    private 'last_time'?: number;
    private 'request_method'?: string;
    private 'request_url'?: string;
    private 'query_string'?: string;
    private 'request_params'?: string;
    private 'request_header'?: string;
    public constructor() { 
    }
    public withLocalAddress(localAddress: string): EventForensicInfoNetworkForensic {
        this['local_address'] = localAddress;
        return this;
    }
    public set localAddress(localAddress: string  | undefined) {
        this['local_address'] = localAddress;
    }
    public get localAddress(): string | undefined {
        return this['local_address'];
    }
    public withLocalPort(localPort: number): EventForensicInfoNetworkForensic {
        this['local_port'] = localPort;
        return this;
    }
    public set localPort(localPort: number  | undefined) {
        this['local_port'] = localPort;
    }
    public get localPort(): number | undefined {
        return this['local_port'];
    }
    public withSrcIp(srcIp: string): EventForensicInfoNetworkForensic {
        this['src_ip'] = srcIp;
        return this;
    }
    public set srcIp(srcIp: string  | undefined) {
        this['src_ip'] = srcIp;
    }
    public get srcIp(): string | undefined {
        return this['src_ip'];
    }
    public withRemoteAddress(remoteAddress: string): EventForensicInfoNetworkForensic {
        this['remote_address'] = remoteAddress;
        return this;
    }
    public set remoteAddress(remoteAddress: string  | undefined) {
        this['remote_address'] = remoteAddress;
    }
    public get remoteAddress(): string | undefined {
        return this['remote_address'];
    }
    public withRemotePort(remotePort: number): EventForensicInfoNetworkForensic {
        this['remote_port'] = remotePort;
        return this;
    }
    public set remotePort(remotePort: number  | undefined) {
        this['remote_port'] = remotePort;
    }
    public get remotePort(): number | undefined {
        return this['remote_port'];
    }
    public withProtocol(protocol: string): EventForensicInfoNetworkForensic {
        this['protocol'] = protocol;
        return this;
    }
    public withAppProtocol(appProtocol: string): EventForensicInfoNetworkForensic {
        this['app_protocol'] = appProtocol;
        return this;
    }
    public set appProtocol(appProtocol: string  | undefined) {
        this['app_protocol'] = appProtocol;
    }
    public get appProtocol(): string | undefined {
        return this['app_protocol'];
    }
    public withFlowDirection(flowDirection: string): EventForensicInfoNetworkForensic {
        this['flow_direction'] = flowDirection;
        return this;
    }
    public set flowDirection(flowDirection: string  | undefined) {
        this['flow_direction'] = flowDirection;
    }
    public get flowDirection(): string | undefined {
        return this['flow_direction'];
    }
    public withCount(count: number): EventForensicInfoNetworkForensic {
        this['count'] = count;
        return this;
    }
    public withFirstTime(firstTime: number): EventForensicInfoNetworkForensic {
        this['first_time'] = firstTime;
        return this;
    }
    public set firstTime(firstTime: number  | undefined) {
        this['first_time'] = firstTime;
    }
    public get firstTime(): number | undefined {
        return this['first_time'];
    }
    public withLastTime(lastTime: number): EventForensicInfoNetworkForensic {
        this['last_time'] = lastTime;
        return this;
    }
    public set lastTime(lastTime: number  | undefined) {
        this['last_time'] = lastTime;
    }
    public get lastTime(): number | undefined {
        return this['last_time'];
    }
    public withRequestMethod(requestMethod: string): EventForensicInfoNetworkForensic {
        this['request_method'] = requestMethod;
        return this;
    }
    public set requestMethod(requestMethod: string  | undefined) {
        this['request_method'] = requestMethod;
    }
    public get requestMethod(): string | undefined {
        return this['request_method'];
    }
    public withRequestUrl(requestUrl: string): EventForensicInfoNetworkForensic {
        this['request_url'] = requestUrl;
        return this;
    }
    public set requestUrl(requestUrl: string  | undefined) {
        this['request_url'] = requestUrl;
    }
    public get requestUrl(): string | undefined {
        return this['request_url'];
    }
    public withQueryString(queryString: string): EventForensicInfoNetworkForensic {
        this['query_string'] = queryString;
        return this;
    }
    public set queryString(queryString: string  | undefined) {
        this['query_string'] = queryString;
    }
    public get queryString(): string | undefined {
        return this['query_string'];
    }
    public withRequestParams(requestParams: string): EventForensicInfoNetworkForensic {
        this['request_params'] = requestParams;
        return this;
    }
    public set requestParams(requestParams: string  | undefined) {
        this['request_params'] = requestParams;
    }
    public get requestParams(): string | undefined {
        return this['request_params'];
    }
    public withRequestHeader(requestHeader: string): EventForensicInfoNetworkForensic {
        this['request_header'] = requestHeader;
        return this;
    }
    public set requestHeader(requestHeader: string  | undefined) {
        this['request_header'] = requestHeader;
    }
    public get requestHeader(): string | undefined {
        return this['request_header'];
    }
}