import { AlertAlertType } from './AlertAlertType';
import { AlertDataSource } from './AlertDataSource';
import { AlertEnvironment } from './AlertEnvironment';
import { AlertFileInfo } from './AlertFileInfo';
import { AlertNetworkList } from './AlertNetworkList';
import { AlertProcess } from './AlertProcess';
import { AlertRemediation } from './AlertRemediation';
import { AlertResourceList } from './AlertResourceList';
import { AlertUserInfo } from './AlertUserInfo';
import { ShowAlertRspMalware } from './ShowAlertRspMalware';


export class ListAlertRsp {
    public version?: string;
    public id?: string;
    private 'domain_id'?: string;
    private 'region_id'?: string;
    private 'workspace_id'?: string;
    public labels?: string;
    public environment?: AlertEnvironment;
    private 'data_source'?: AlertDataSource;
    private 'first_observed_time'?: string;
    private 'last_observed_time'?: string;
    private 'create_time'?: string;
    private 'arrive_time'?: string;
    public title?: string;
    public description?: string;
    private 'source_url'?: string;
    public count?: number;
    public confidence?: number;
    public severity?: ListAlertRspSeverityEnum | string;
    public criticality?: number;
    private 'alert_type'?: AlertAlertType;
    private 'network_list'?: Array<AlertNetworkList>;
    private 'resource_list'?: Array<AlertResourceList>;
    public remediation?: AlertRemediation;
    private 'verification_state'?: ListAlertRspVerificationStateEnum | string;
    private 'handle_status'?: ListAlertRspHandleStatusEnum | string;
    public sla?: string;
    private 'update_time'?: string;
    private 'close_time'?: string;
    private 'ipdrr_phase'?: ListAlertRspIpdrrPhaseEnum | string;
    private 'chop_phase'?: ListAlertRspChopPhaseEnum | string;
    private 'ppdr_phase'?: ListAlertRspPpdrPhaseEnum | string;
    public simulation?: string;
    public actor?: string;
    public owner?: string;
    public creator?: string;
    private 'close_reason'?: ListAlertRspCloseReasonEnum | string;
    private 'close_comment'?: string;
    public malware?: ShowAlertRspMalware;
    private 'system_info'?: object;
    public process?: Array<AlertProcess>;
    private 'user_info'?: Array<AlertUserInfo>;
    private 'file_info'?: Array<AlertFileInfo>;
    private 'system_alert_table'?: object;
    public constructor() { 
    }
    public withVersion(version: string): ListAlertRsp {
        this['version'] = version;
        return this;
    }
    public withId(id: string): ListAlertRsp {
        this['id'] = id;
        return this;
    }
    public withDomainId(domainId: string): ListAlertRsp {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRegionId(regionId: string): ListAlertRsp {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
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
    public withLabels(labels: string): ListAlertRsp {
        this['labels'] = labels;
        return this;
    }
    public withEnvironment(environment: AlertEnvironment): ListAlertRsp {
        this['environment'] = environment;
        return this;
    }
    public withDataSource(dataSource: AlertDataSource): ListAlertRsp {
        this['data_source'] = dataSource;
        return this;
    }
    public set dataSource(dataSource: AlertDataSource  | undefined) {
        this['data_source'] = dataSource;
    }
    public get dataSource(): AlertDataSource | undefined {
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
    public withSeverity(severity: ListAlertRspSeverityEnum | string): ListAlertRsp {
        this['severity'] = severity;
        return this;
    }
    public withCriticality(criticality: number): ListAlertRsp {
        this['criticality'] = criticality;
        return this;
    }
    public withAlertType(alertType: AlertAlertType): ListAlertRsp {
        this['alert_type'] = alertType;
        return this;
    }
    public set alertType(alertType: AlertAlertType  | undefined) {
        this['alert_type'] = alertType;
    }
    public get alertType(): AlertAlertType | undefined {
        return this['alert_type'];
    }
    public withNetworkList(networkList: Array<AlertNetworkList>): ListAlertRsp {
        this['network_list'] = networkList;
        return this;
    }
    public set networkList(networkList: Array<AlertNetworkList>  | undefined) {
        this['network_list'] = networkList;
    }
    public get networkList(): Array<AlertNetworkList> | undefined {
        return this['network_list'];
    }
    public withResourceList(resourceList: Array<AlertResourceList>): ListAlertRsp {
        this['resource_list'] = resourceList;
        return this;
    }
    public set resourceList(resourceList: Array<AlertResourceList>  | undefined) {
        this['resource_list'] = resourceList;
    }
    public get resourceList(): Array<AlertResourceList> | undefined {
        return this['resource_list'];
    }
    public withRemediation(remediation: AlertRemediation): ListAlertRsp {
        this['remediation'] = remediation;
        return this;
    }
    public withVerificationState(verificationState: ListAlertRspVerificationStateEnum | string): ListAlertRsp {
        this['verification_state'] = verificationState;
        return this;
    }
    public set verificationState(verificationState: ListAlertRspVerificationStateEnum | string  | undefined) {
        this['verification_state'] = verificationState;
    }
    public get verificationState(): ListAlertRspVerificationStateEnum | string | undefined {
        return this['verification_state'];
    }
    public withHandleStatus(handleStatus: ListAlertRspHandleStatusEnum | string): ListAlertRsp {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: ListAlertRspHandleStatusEnum | string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): ListAlertRspHandleStatusEnum | string | undefined {
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
    public withIpdrrPhase(ipdrrPhase: ListAlertRspIpdrrPhaseEnum | string): ListAlertRsp {
        this['ipdrr_phase'] = ipdrrPhase;
        return this;
    }
    public set ipdrrPhase(ipdrrPhase: ListAlertRspIpdrrPhaseEnum | string  | undefined) {
        this['ipdrr_phase'] = ipdrrPhase;
    }
    public get ipdrrPhase(): ListAlertRspIpdrrPhaseEnum | string | undefined {
        return this['ipdrr_phase'];
    }
    public withChopPhase(chopPhase: ListAlertRspChopPhaseEnum | string): ListAlertRsp {
        this['chop_phase'] = chopPhase;
        return this;
    }
    public set chopPhase(chopPhase: ListAlertRspChopPhaseEnum | string  | undefined) {
        this['chop_phase'] = chopPhase;
    }
    public get chopPhase(): ListAlertRspChopPhaseEnum | string | undefined {
        return this['chop_phase'];
    }
    public withPpdrPhase(ppdrPhase: ListAlertRspPpdrPhaseEnum | string): ListAlertRsp {
        this['ppdr_phase'] = ppdrPhase;
        return this;
    }
    public set ppdrPhase(ppdrPhase: ListAlertRspPpdrPhaseEnum | string  | undefined) {
        this['ppdr_phase'] = ppdrPhase;
    }
    public get ppdrPhase(): ListAlertRspPpdrPhaseEnum | string | undefined {
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
    public withCloseReason(closeReason: ListAlertRspCloseReasonEnum | string): ListAlertRsp {
        this['close_reason'] = closeReason;
        return this;
    }
    public set closeReason(closeReason: ListAlertRspCloseReasonEnum | string  | undefined) {
        this['close_reason'] = closeReason;
    }
    public get closeReason(): ListAlertRspCloseReasonEnum | string | undefined {
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
    public withProcess(process: Array<AlertProcess>): ListAlertRsp {
        this['process'] = process;
        return this;
    }
    public withUserInfo(userInfo: Array<AlertUserInfo>): ListAlertRsp {
        this['user_info'] = userInfo;
        return this;
    }
    public set userInfo(userInfo: Array<AlertUserInfo>  | undefined) {
        this['user_info'] = userInfo;
    }
    public get userInfo(): Array<AlertUserInfo> | undefined {
        return this['user_info'];
    }
    public withFileInfo(fileInfo: Array<AlertFileInfo>): ListAlertRsp {
        this['file_info'] = fileInfo;
        return this;
    }
    public set fileInfo(fileInfo: Array<AlertFileInfo>  | undefined) {
        this['file_info'] = fileInfo;
    }
    public get fileInfo(): Array<AlertFileInfo> | undefined {
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
}

/**
    * @export
    * @enum {string}
    */
export enum ListAlertRspSeverityEnum {
    TIPS = 'Tips',
    LOW = 'Low',
    MEDIUM = 'Medium',
    HIGH = 'High',
    FATAL = 'Fatal'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAlertRspVerificationStateEnum {
    UNKNOWN = 'Unknown',
    TRUE_POSITIVE = 'True_Positive',
    FALSE_POSITIVE = 'False_Positive'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAlertRspHandleStatusEnum {
    OPEN = 'Open',
    BLOCK = 'Block',
    CLOSED = 'Closed'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAlertRspIpdrrPhaseEnum {
    PREPARTION = 'Prepartion',
    DETECTION_AND_ANALYSIS = 'Detection and Analysis',
    CONTAINMERADICATION_RECOVERY = 'Containm，Eradication& Recovery',
    POST_INCIDENT_ACTIVITY = 'Post-Incident-Activity'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAlertRspChopPhaseEnum {
    PREPARTION = 'Prepartion',
    DETECTION_AND_ANALYSIS = 'Detection and Analysis',
    CONTAINMERADICATION_RECOVERY = 'Containm，Eradication& Recovery',
    POST_INCIDENT_ACTIVITY = 'Post-Incident-Activity'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAlertRspPpdrPhaseEnum {
    PREPARTION = 'Prepartion',
    DETECTION_AND_ANALYSIS = 'Detection and Analysis',
    CONTAINMERADICATION_RECOVERY = 'Containm，Eradication& Recovery',
    POST_INCIDENT_ACTIVITY = 'Post-Incident-Activity'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAlertRspCloseReasonEnum {
    FALSE_DETECTION = 'False detection',
    RESOLVED = 'Resolved',
    REPEATED = 'Repeated',
    OTHER = 'Other'
}
