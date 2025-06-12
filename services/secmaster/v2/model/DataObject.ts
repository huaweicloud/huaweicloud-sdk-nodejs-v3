import { AlertAlertType } from './AlertAlertType';
import { AlertDataSource } from './AlertDataSource';
import { AlertEnvironment } from './AlertEnvironment';
import { AlertFileInfo } from './AlertFileInfo';
import { AlertProcess } from './AlertProcess';
import { AlertRemediation } from './AlertRemediation';
import { AlertResourceList } from './AlertResourceList';
import { AlertUserInfo } from './AlertUserInfo';
import { DataObjectNetworkList } from './DataObjectNetworkList';
import { ShowAlertRspMalware } from './ShowAlertRspMalware';


export class DataObject {
    public version?: string;
    public id?: string;
    private 'domain_id'?: string;
    private 'region_id'?: string;
    private 'workspace_id'?: string;
    public environment?: AlertEnvironment;
    public datasource?: AlertDataSource;
    private 'first_observed_time'?: string;
    private 'last_observed_time'?: string;
    private 'create_time'?: string;
    private 'arrive_time'?: string;
    public title?: string;
    public description?: string;
    private 'source_url'?: string;
    public count?: number;
    public confidence?: number;
    public severity?: DataObjectSeverityEnum | string;
    public criticality?: number;
    private 'alert_type'?: AlertAlertType;
    private 'network_list'?: Array<DataObjectNetworkList>;
    private 'resource_list'?: Array<AlertResourceList>;
    public remediation?: AlertRemediation;
    private 'verification_state'?: DataObjectVerificationStateEnum | string;
    private 'handle_status'?: DataObjectHandleStatusEnum | string;
    public sla?: number;
    private 'update_time'?: string;
    private 'close_time'?: string;
    private 'ipdrr_phase'?: DataObjectIpdrrPhaseEnum | string;
    public simulation?: string;
    public actor?: string;
    public owner?: string;
    public creator?: string;
    private 'close_reason'?: DataObjectCloseReasonEnum | string;
    private 'close_comment'?: string;
    public malware?: ShowAlertRspMalware;
    private 'system_info'?: object;
    public process?: Array<AlertProcess>;
    private 'user_info'?: Array<AlertUserInfo>;
    private 'file_info'?: Array<AlertFileInfo>;
    public constructor() { 
    }
    public withVersion(version: string): DataObject {
        this['version'] = version;
        return this;
    }
    public withId(id: string): DataObject {
        this['id'] = id;
        return this;
    }
    public withDomainId(domainId: string): DataObject {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRegionId(regionId: string): DataObject {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withWorkspaceId(workspaceId: string): DataObject {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withEnvironment(environment: AlertEnvironment): DataObject {
        this['environment'] = environment;
        return this;
    }
    public withDatasource(datasource: AlertDataSource): DataObject {
        this['datasource'] = datasource;
        return this;
    }
    public withFirstObservedTime(firstObservedTime: string): DataObject {
        this['first_observed_time'] = firstObservedTime;
        return this;
    }
    public set firstObservedTime(firstObservedTime: string  | undefined) {
        this['first_observed_time'] = firstObservedTime;
    }
    public get firstObservedTime(): string | undefined {
        return this['first_observed_time'];
    }
    public withLastObservedTime(lastObservedTime: string): DataObject {
        this['last_observed_time'] = lastObservedTime;
        return this;
    }
    public set lastObservedTime(lastObservedTime: string  | undefined) {
        this['last_observed_time'] = lastObservedTime;
    }
    public get lastObservedTime(): string | undefined {
        return this['last_observed_time'];
    }
    public withCreateTime(createTime: string): DataObject {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withArriveTime(arriveTime: string): DataObject {
        this['arrive_time'] = arriveTime;
        return this;
    }
    public set arriveTime(arriveTime: string  | undefined) {
        this['arrive_time'] = arriveTime;
    }
    public get arriveTime(): string | undefined {
        return this['arrive_time'];
    }
    public withTitle(title: string): DataObject {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): DataObject {
        this['description'] = description;
        return this;
    }
    public withSourceUrl(sourceUrl: string): DataObject {
        this['source_url'] = sourceUrl;
        return this;
    }
    public set sourceUrl(sourceUrl: string  | undefined) {
        this['source_url'] = sourceUrl;
    }
    public get sourceUrl(): string | undefined {
        return this['source_url'];
    }
    public withCount(count: number): DataObject {
        this['count'] = count;
        return this;
    }
    public withConfidence(confidence: number): DataObject {
        this['confidence'] = confidence;
        return this;
    }
    public withSeverity(severity: DataObjectSeverityEnum | string): DataObject {
        this['severity'] = severity;
        return this;
    }
    public withCriticality(criticality: number): DataObject {
        this['criticality'] = criticality;
        return this;
    }
    public withAlertType(alertType: AlertAlertType): DataObject {
        this['alert_type'] = alertType;
        return this;
    }
    public set alertType(alertType: AlertAlertType  | undefined) {
        this['alert_type'] = alertType;
    }
    public get alertType(): AlertAlertType | undefined {
        return this['alert_type'];
    }
    public withNetworkList(networkList: Array<DataObjectNetworkList>): DataObject {
        this['network_list'] = networkList;
        return this;
    }
    public set networkList(networkList: Array<DataObjectNetworkList>  | undefined) {
        this['network_list'] = networkList;
    }
    public get networkList(): Array<DataObjectNetworkList> | undefined {
        return this['network_list'];
    }
    public withResourceList(resourceList: Array<AlertResourceList>): DataObject {
        this['resource_list'] = resourceList;
        return this;
    }
    public set resourceList(resourceList: Array<AlertResourceList>  | undefined) {
        this['resource_list'] = resourceList;
    }
    public get resourceList(): Array<AlertResourceList> | undefined {
        return this['resource_list'];
    }
    public withRemediation(remediation: AlertRemediation): DataObject {
        this['remediation'] = remediation;
        return this;
    }
    public withVerificationState(verificationState: DataObjectVerificationStateEnum | string): DataObject {
        this['verification_state'] = verificationState;
        return this;
    }
    public set verificationState(verificationState: DataObjectVerificationStateEnum | string  | undefined) {
        this['verification_state'] = verificationState;
    }
    public get verificationState(): DataObjectVerificationStateEnum | string | undefined {
        return this['verification_state'];
    }
    public withHandleStatus(handleStatus: DataObjectHandleStatusEnum | string): DataObject {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: DataObjectHandleStatusEnum | string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): DataObjectHandleStatusEnum | string | undefined {
        return this['handle_status'];
    }
    public withSla(sla: number): DataObject {
        this['sla'] = sla;
        return this;
    }
    public withUpdateTime(updateTime: string): DataObject {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withCloseTime(closeTime: string): DataObject {
        this['close_time'] = closeTime;
        return this;
    }
    public set closeTime(closeTime: string  | undefined) {
        this['close_time'] = closeTime;
    }
    public get closeTime(): string | undefined {
        return this['close_time'];
    }
    public withIpdrrPhase(ipdrrPhase: DataObjectIpdrrPhaseEnum | string): DataObject {
        this['ipdrr_phase'] = ipdrrPhase;
        return this;
    }
    public set ipdrrPhase(ipdrrPhase: DataObjectIpdrrPhaseEnum | string  | undefined) {
        this['ipdrr_phase'] = ipdrrPhase;
    }
    public get ipdrrPhase(): DataObjectIpdrrPhaseEnum | string | undefined {
        return this['ipdrr_phase'];
    }
    public withSimulation(simulation: string): DataObject {
        this['simulation'] = simulation;
        return this;
    }
    public withActor(actor: string): DataObject {
        this['actor'] = actor;
        return this;
    }
    public withOwner(owner: string): DataObject {
        this['owner'] = owner;
        return this;
    }
    public withCreator(creator: string): DataObject {
        this['creator'] = creator;
        return this;
    }
    public withCloseReason(closeReason: DataObjectCloseReasonEnum | string): DataObject {
        this['close_reason'] = closeReason;
        return this;
    }
    public set closeReason(closeReason: DataObjectCloseReasonEnum | string  | undefined) {
        this['close_reason'] = closeReason;
    }
    public get closeReason(): DataObjectCloseReasonEnum | string | undefined {
        return this['close_reason'];
    }
    public withCloseComment(closeComment: string): DataObject {
        this['close_comment'] = closeComment;
        return this;
    }
    public set closeComment(closeComment: string  | undefined) {
        this['close_comment'] = closeComment;
    }
    public get closeComment(): string | undefined {
        return this['close_comment'];
    }
    public withMalware(malware: ShowAlertRspMalware): DataObject {
        this['malware'] = malware;
        return this;
    }
    public withSystemInfo(systemInfo: object): DataObject {
        this['system_info'] = systemInfo;
        return this;
    }
    public set systemInfo(systemInfo: object  | undefined) {
        this['system_info'] = systemInfo;
    }
    public get systemInfo(): object | undefined {
        return this['system_info'];
    }
    public withProcess(process: Array<AlertProcess>): DataObject {
        this['process'] = process;
        return this;
    }
    public withUserInfo(userInfo: Array<AlertUserInfo>): DataObject {
        this['user_info'] = userInfo;
        return this;
    }
    public set userInfo(userInfo: Array<AlertUserInfo>  | undefined) {
        this['user_info'] = userInfo;
    }
    public get userInfo(): Array<AlertUserInfo> | undefined {
        return this['user_info'];
    }
    public withFileInfo(fileInfo: Array<AlertFileInfo>): DataObject {
        this['file_info'] = fileInfo;
        return this;
    }
    public set fileInfo(fileInfo: Array<AlertFileInfo>  | undefined) {
        this['file_info'] = fileInfo;
    }
    public get fileInfo(): Array<AlertFileInfo> | undefined {
        return this['file_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DataObjectSeverityEnum {
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
export enum DataObjectVerificationStateEnum {
    UNKNOWN = 'Unknown',
    TRUE_POSITIVE = 'True_Positive',
    FALSE_POSITIVE = 'False_Positive'
}
/**
    * @export
    * @enum {string}
    */
export enum DataObjectHandleStatusEnum {
    OPEN = 'Open',
    BLOCK = 'Block',
    CLOSED = 'Closed'
}
/**
    * @export
    * @enum {string}
    */
export enum DataObjectIpdrrPhaseEnum {
    PREPARATION = 'Preparation',
    DETECTION_AND_ANALYSIS = 'Detection and Analysis',
    CONTAINERADICATION_RECOVERY = 'Contain，Eradication& Recovery',
    POST_INCIDENT_ACTIVITY = 'Post-Incident-Activity'
}
/**
    * @export
    * @enum {string}
    */
export enum DataObjectCloseReasonEnum {
    FALSE_DETECTION = 'False detection',
    RESOLVED = 'Resolved',
    REPEATED = 'Repeated',
    OTHER = 'Other'
}
