import { ListAlertRspNetworkList } from './ListAlertRspNetworkList';
import { ListAlertRspProcess } from './ListAlertRspProcess';
import { ShowAlertRspDatasource } from './ShowAlertRspDatasource';
import { ShowAlertRspEnvironment } from './ShowAlertRspEnvironment';
import { ShowAlertRspFileInfo } from './ShowAlertRspFileInfo';
import { ShowAlertRspMalware } from './ShowAlertRspMalware';
import { ShowAlertRspRemediation } from './ShowAlertRspRemediation';
import { ShowAlertRspResourceList } from './ShowAlertRspResourceList';
import { ShowAlertRspUserInfo } from './ShowAlertRspUserInfo';


export class ListAlertRsp {
    public version?: string;
    public environment?: ShowAlertRspEnvironment;
    private 'data_source'?: ShowAlertRspDatasource;
    private 'first_observed_time'?: string;
    private 'last_observed_time'?: string;
    private 'create_time'?: string;
    private 'arrive_time'?: string;
    public title?: string;
    public description?: string;
    private 'source_url'?: string;
    public count?: number;
    public confidence?: number;
    public severity?: string;
    public criticality?: number;
    private 'alert_type'?: object;
    private 'network_list'?: Array<ListAlertRspNetworkList>;
    private 'resource_list'?: Array<ShowAlertRspResourceList>;
    public remediation?: ShowAlertRspRemediation;
    private 'verification_state'?: string;
    private 'handle_status'?: string;
    public sla?: string;
    private 'update_time'?: string;
    private 'close_time'?: string;
    private 'chop_phase'?: string;
    private 'ipdrr_phase'?: string;
    private 'ppdr_phase'?: string;
    public simulation?: string;
    public actor?: string;
    public owner?: string;
    public creator?: string;
    private 'close_reason'?: string;
    private 'close_comment'?: string;
    public malware?: ShowAlertRspMalware;
    private 'system_info'?: object;
    public process?: Array<ListAlertRspProcess>;
    private 'user_info'?: Array<ShowAlertRspUserInfo>;
    private 'file_info'?: Array<ShowAlertRspFileInfo>;
    private 'system_alert_table'?: object;
    public id?: string;
    private 'workspace_id'?: string;
    public constructor() { 
    }
    public withVersion(version: string): ListAlertRsp {
        this['version'] = version;
        return this;
    }
    public withEnvironment(environment: ShowAlertRspEnvironment): ListAlertRsp {
        this['environment'] = environment;
        return this;
    }
    public withDataSource(dataSource: ShowAlertRspDatasource): ListAlertRsp {
        this['data_source'] = dataSource;
        return this;
    }
    public set dataSource(dataSource: ShowAlertRspDatasource  | undefined) {
        this['data_source'] = dataSource;
    }
    public get dataSource(): ShowAlertRspDatasource | undefined {
        return this['data_source'];
    }
    public withFirstObservedTime(firstObservedTime: string): ListAlertRsp {
        this['first_observed_time'] = firstObservedTime;
        return this;
    }
    public set firstObservedTime(firstObservedTime: string  | undefined) {
        this['first_observed_time'] = firstObservedTime;
    }
    public get firstObservedTime(): string | undefined {
        return this['first_observed_time'];
    }
    public withLastObservedTime(lastObservedTime: string): ListAlertRsp {
        this['last_observed_time'] = lastObservedTime;
        return this;
    }
    public set lastObservedTime(lastObservedTime: string  | undefined) {
        this['last_observed_time'] = lastObservedTime;
    }
    public get lastObservedTime(): string | undefined {
        return this['last_observed_time'];
    }
    public withCreateTime(createTime: string): ListAlertRsp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withArriveTime(arriveTime: string): ListAlertRsp {
        this['arrive_time'] = arriveTime;
        return this;
    }
    public set arriveTime(arriveTime: string  | undefined) {
        this['arrive_time'] = arriveTime;
    }
    public get arriveTime(): string | undefined {
        return this['arrive_time'];
    }
    public withTitle(title: string): ListAlertRsp {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): ListAlertRsp {
        this['description'] = description;
        return this;
    }
    public withSourceUrl(sourceUrl: string): ListAlertRsp {
        this['source_url'] = sourceUrl;
        return this;
    }
    public set sourceUrl(sourceUrl: string  | undefined) {
        this['source_url'] = sourceUrl;
    }
    public get sourceUrl(): string | undefined {
        return this['source_url'];
    }
    public withCount(count: number): ListAlertRsp {
        this['count'] = count;
        return this;
    }
    public withConfidence(confidence: number): ListAlertRsp {
        this['confidence'] = confidence;
        return this;
    }
    public withSeverity(severity: string): ListAlertRsp {
        this['severity'] = severity;
        return this;
    }
    public withCriticality(criticality: number): ListAlertRsp {
        this['criticality'] = criticality;
        return this;
    }
    public withAlertType(alertType: object): ListAlertRsp {
        this['alert_type'] = alertType;
        return this;
    }
    public set alertType(alertType: object  | undefined) {
        this['alert_type'] = alertType;
    }
    public get alertType(): object | undefined {
        return this['alert_type'];
    }
    public withNetworkList(networkList: Array<ListAlertRspNetworkList>): ListAlertRsp {
        this['network_list'] = networkList;
        return this;
    }
    public set networkList(networkList: Array<ListAlertRspNetworkList>  | undefined) {
        this['network_list'] = networkList;
    }
    public get networkList(): Array<ListAlertRspNetworkList> | undefined {
        return this['network_list'];
    }
    public withResourceList(resourceList: Array<ShowAlertRspResourceList>): ListAlertRsp {
        this['resource_list'] = resourceList;
        return this;
    }
    public set resourceList(resourceList: Array<ShowAlertRspResourceList>  | undefined) {
        this['resource_list'] = resourceList;
    }
    public get resourceList(): Array<ShowAlertRspResourceList> | undefined {
        return this['resource_list'];
    }
    public withRemediation(remediation: ShowAlertRspRemediation): ListAlertRsp {
        this['remediation'] = remediation;
        return this;
    }
    public withVerificationState(verificationState: string): ListAlertRsp {
        this['verification_state'] = verificationState;
        return this;
    }
    public set verificationState(verificationState: string  | undefined) {
        this['verification_state'] = verificationState;
    }
    public get verificationState(): string | undefined {
        return this['verification_state'];
    }
    public withHandleStatus(handleStatus: string): ListAlertRsp {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withSla(sla: string): ListAlertRsp {
        this['sla'] = sla;
        return this;
    }
    public withUpdateTime(updateTime: string): ListAlertRsp {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withCloseTime(closeTime: string): ListAlertRsp {
        this['close_time'] = closeTime;
        return this;
    }
    public set closeTime(closeTime: string  | undefined) {
        this['close_time'] = closeTime;
    }
    public get closeTime(): string | undefined {
        return this['close_time'];
    }
    public withChopPhase(chopPhase: string): ListAlertRsp {
        this['chop_phase'] = chopPhase;
        return this;
    }
    public set chopPhase(chopPhase: string  | undefined) {
        this['chop_phase'] = chopPhase;
    }
    public get chopPhase(): string | undefined {
        return this['chop_phase'];
    }
    public withIpdrrPhase(ipdrrPhase: string): ListAlertRsp {
        this['ipdrr_phase'] = ipdrrPhase;
        return this;
    }
    public set ipdrrPhase(ipdrrPhase: string  | undefined) {
        this['ipdrr_phase'] = ipdrrPhase;
    }
    public get ipdrrPhase(): string | undefined {
        return this['ipdrr_phase'];
    }
    public withPpdrPhase(ppdrPhase: string): ListAlertRsp {
        this['ppdr_phase'] = ppdrPhase;
        return this;
    }
    public set ppdrPhase(ppdrPhase: string  | undefined) {
        this['ppdr_phase'] = ppdrPhase;
    }
    public get ppdrPhase(): string | undefined {
        return this['ppdr_phase'];
    }
    public withSimulation(simulation: string): ListAlertRsp {
        this['simulation'] = simulation;
        return this;
    }
    public withActor(actor: string): ListAlertRsp {
        this['actor'] = actor;
        return this;
    }
    public withOwner(owner: string): ListAlertRsp {
        this['owner'] = owner;
        return this;
    }
    public withCreator(creator: string): ListAlertRsp {
        this['creator'] = creator;
        return this;
    }
    public withCloseReason(closeReason: string): ListAlertRsp {
        this['close_reason'] = closeReason;
        return this;
    }
    public set closeReason(closeReason: string  | undefined) {
        this['close_reason'] = closeReason;
    }
    public get closeReason(): string | undefined {
        return this['close_reason'];
    }
    public withCloseComment(closeComment: string): ListAlertRsp {
        this['close_comment'] = closeComment;
        return this;
    }
    public set closeComment(closeComment: string  | undefined) {
        this['close_comment'] = closeComment;
    }
    public get closeComment(): string | undefined {
        return this['close_comment'];
    }
    public withMalware(malware: ShowAlertRspMalware): ListAlertRsp {
        this['malware'] = malware;
        return this;
    }
    public withSystemInfo(systemInfo: object): ListAlertRsp {
        this['system_info'] = systemInfo;
        return this;
    }
    public set systemInfo(systemInfo: object  | undefined) {
        this['system_info'] = systemInfo;
    }
    public get systemInfo(): object | undefined {
        return this['system_info'];
    }
    public withProcess(process: Array<ListAlertRspProcess>): ListAlertRsp {
        this['process'] = process;
        return this;
    }
    public withUserInfo(userInfo: Array<ShowAlertRspUserInfo>): ListAlertRsp {
        this['user_info'] = userInfo;
        return this;
    }
    public set userInfo(userInfo: Array<ShowAlertRspUserInfo>  | undefined) {
        this['user_info'] = userInfo;
    }
    public get userInfo(): Array<ShowAlertRspUserInfo> | undefined {
        return this['user_info'];
    }
    public withFileInfo(fileInfo: Array<ShowAlertRspFileInfo>): ListAlertRsp {
        this['file_info'] = fileInfo;
        return this;
    }
    public set fileInfo(fileInfo: Array<ShowAlertRspFileInfo>  | undefined) {
        this['file_info'] = fileInfo;
    }
    public get fileInfo(): Array<ShowAlertRspFileInfo> | undefined {
        return this['file_info'];
    }
    public withSystemAlertTable(systemAlertTable: object): ListAlertRsp {
        this['system_alert_table'] = systemAlertTable;
        return this;
    }
    public set systemAlertTable(systemAlertTable: object  | undefined) {
        this['system_alert_table'] = systemAlertTable;
    }
    public get systemAlertTable(): object | undefined {
        return this['system_alert_table'];
    }
    public withId(id: string): ListAlertRsp {
        this['id'] = id;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ListAlertRsp {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
}