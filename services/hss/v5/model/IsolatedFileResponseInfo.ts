import { AntivirusResultDetailInfo } from './AntivirusResultDetailInfo';
import { IsolateEventResponseInfo } from './IsolateEventResponseInfo';


export class IsolatedFileResponseInfo {
    private 'os_type'?: string;
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'file_hash'?: string;
    private 'file_path'?: string;
    private 'file_attr'?: string;
    private 'isolation_status'?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'asset_value'?: string;
    private 'update_time'?: number;
    private 'agent_version'?: string;
    private 'isolate_source'?: string;
    private 'event_name'?: string;
    private 'agent_event_info'?: IsolateEventResponseInfo;
    private 'antivirus_result_info'?: AntivirusResultDetailInfo;
    public constructor(osType?: string, hostId?: string, hostName?: string, fileHash?: string, filePath?: string, fileAttr?: string, isolationStatus?: string, privateIp?: string, publicIp?: string, assetValue?: string, updateTime?: number, agentVersion?: string, isolateSource?: string, eventName?: string, agentEventInfo?: IsolateEventResponseInfo, antivirusResultInfo?: AntivirusResultDetailInfo) { 
        this['os_type'] = osType;
        this['host_id'] = hostId;
        this['host_name'] = hostName;
        this['file_hash'] = fileHash;
        this['file_path'] = filePath;
        this['file_attr'] = fileAttr;
        this['isolation_status'] = isolationStatus;
        this['private_ip'] = privateIp;
        this['public_ip'] = publicIp;
        this['asset_value'] = assetValue;
        this['update_time'] = updateTime;
        this['agent_version'] = agentVersion;
        this['isolate_source'] = isolateSource;
        this['event_name'] = eventName;
        this['agent_event_info'] = agentEventInfo;
        this['antivirus_result_info'] = antivirusResultInfo;
    }
    public withOsType(osType: string): IsolatedFileResponseInfo {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withHostId(hostId: string): IsolatedFileResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): IsolatedFileResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withFileHash(fileHash: string): IsolatedFileResponseInfo {
        this['file_hash'] = fileHash;
        return this;
    }
    public set fileHash(fileHash: string  | undefined) {
        this['file_hash'] = fileHash;
    }
    public get fileHash(): string | undefined {
        return this['file_hash'];
    }
    public withFilePath(filePath: string): IsolatedFileResponseInfo {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withFileAttr(fileAttr: string): IsolatedFileResponseInfo {
        this['file_attr'] = fileAttr;
        return this;
    }
    public set fileAttr(fileAttr: string  | undefined) {
        this['file_attr'] = fileAttr;
    }
    public get fileAttr(): string | undefined {
        return this['file_attr'];
    }
    public withIsolationStatus(isolationStatus: string): IsolatedFileResponseInfo {
        this['isolation_status'] = isolationStatus;
        return this;
    }
    public set isolationStatus(isolationStatus: string  | undefined) {
        this['isolation_status'] = isolationStatus;
    }
    public get isolationStatus(): string | undefined {
        return this['isolation_status'];
    }
    public withPrivateIp(privateIp: string): IsolatedFileResponseInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): IsolatedFileResponseInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withAssetValue(assetValue: string): IsolatedFileResponseInfo {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withUpdateTime(updateTime: number): IsolatedFileResponseInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withAgentVersion(agentVersion: string): IsolatedFileResponseInfo {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
    public withIsolateSource(isolateSource: string): IsolatedFileResponseInfo {
        this['isolate_source'] = isolateSource;
        return this;
    }
    public set isolateSource(isolateSource: string  | undefined) {
        this['isolate_source'] = isolateSource;
    }
    public get isolateSource(): string | undefined {
        return this['isolate_source'];
    }
    public withEventName(eventName: string): IsolatedFileResponseInfo {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withAgentEventInfo(agentEventInfo: IsolateEventResponseInfo): IsolatedFileResponseInfo {
        this['agent_event_info'] = agentEventInfo;
        return this;
    }
    public set agentEventInfo(agentEventInfo: IsolateEventResponseInfo  | undefined) {
        this['agent_event_info'] = agentEventInfo;
    }
    public get agentEventInfo(): IsolateEventResponseInfo | undefined {
        return this['agent_event_info'];
    }
    public withAntivirusResultInfo(antivirusResultInfo: AntivirusResultDetailInfo): IsolatedFileResponseInfo {
        this['antivirus_result_info'] = antivirusResultInfo;
        return this;
    }
    public set antivirusResultInfo(antivirusResultInfo: AntivirusResultDetailInfo  | undefined) {
        this['antivirus_result_info'] = antivirusResultInfo;
    }
    public get antivirusResultInfo(): AntivirusResultDetailInfo | undefined {
        return this['antivirus_result_info'];
    }
}