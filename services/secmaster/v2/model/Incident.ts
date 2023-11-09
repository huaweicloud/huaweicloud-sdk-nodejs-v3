import { AlertDataSource } from './AlertDataSource';
import { AlertFileInfo } from './AlertFileInfo';
import { AlertNetworkList } from './AlertNetworkList';
import { AlertProcess } from './AlertProcess';
import { AlertRemediation } from './AlertRemediation';
import { AlertResourceList } from './AlertResourceList';
import { AlertUserInfo } from './AlertUserInfo';
import { IncidentEnvironment } from './IncidentEnvironment';
import { IncidentIncidentType } from './IncidentIncidentType';
import { ShowAlertRspMalware } from './ShowAlertRspMalware';


export class Incident {
    public version?: string;
    public id?: string;
    private 'domain_id'?: string;
    private 'region_id'?: string;
    private 'workspace_id'?: string;
    public labels?: string;
    public environment?: IncidentEnvironment;
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
    public severity?: IncidentSeverityEnum | string;
    public criticality?: number;
    private 'incident_type'?: IncidentIncidentType;
    private 'network_list'?: Array<AlertNetworkList>;
    private 'resource_list'?: Array<AlertResourceList>;
    public remediation?: AlertRemediation;
    private 'verification_state'?: IncidentVerificationStateEnum | string;
    private 'handle_status'?: IncidentHandleStatusEnum | string;
    public sla?: number;
    private 'update_time'?: string;
    private 'close_time'?: string;
    private 'ipdrr_phase'?: IncidentIpdrrPhaseEnum | string;
    public simulation?: string;
    public actor?: string;
    public owner?: string;
    public creator?: string;
    private 'close_reason'?: IncidentCloseReasonEnum | string;
    private 'close_comment'?: string;
    public malware?: ShowAlertRspMalware;
    private 'system_info'?: object;
    public process?: Array<AlertProcess>;
    private 'user_info'?: Array<AlertUserInfo>;
    private 'file_info'?: Array<AlertFileInfo>;
    private 'system_alert_table'?: object;
    public constructor() { 
    }
    public withVersion(version: string): Incident {
        this['version'] = version;
        return this;
    }
    public withId(id: string): Incident {
        this['id'] = id;
        return this;
    }
    public withDomainId(domainId: string): Incident {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRegionId(regionId: string): Incident {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withWorkspaceId(workspaceId: string): Incident {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withLabels(labels: string): Incident {
        this['labels'] = labels;
        return this;
    }
    public withEnvironment(environment: IncidentEnvironment): Incident {
        this['environment'] = environment;
        return this;
    }
    public withDataSource(dataSource: AlertDataSource): Incident {
        this['data_source'] = dataSource;
        return this;
    }
    public set dataSource(dataSource: AlertDataSource  | undefined) {
        this['data_source'] = dataSource;
    }
    public get dataSource(): AlertDataSource | undefined {
        return this['data_source'];
    }
    public withFirstObservedTime(firstObservedTime: string): Incident {
        this['first_observed_time'] = firstObservedTime;
        return this;
    }
    public set firstObservedTime(firstObservedTime: string  | undefined) {
        this['first_observed_time'] = firstObservedTime;
    }
    public get firstObservedTime(): string | undefined {
        return this['first_observed_time'];
    }
    public withLastObservedTime(lastObservedTime: string): Incident {
        this['last_observed_time'] = lastObservedTime;
        return this;
    }
    public set lastObservedTime(lastObservedTime: string  | undefined) {
        this['last_observed_time'] = lastObservedTime;
    }
    public get lastObservedTime(): string | undefined {
        return this['last_observed_time'];
    }
    public withCreateTime(createTime: string): Incident {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withArriveTime(arriveTime: string): Incident {
        this['arrive_time'] = arriveTime;
        return this;
    }
    public set arriveTime(arriveTime: string  | undefined) {
        this['arrive_time'] = arriveTime;
    }
    public get arriveTime(): string | undefined {
        return this['arrive_time'];
    }
    public withTitle(title: string): Incident {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): Incident {
        this['description'] = description;
        return this;
    }
    public withSourceUrl(sourceUrl: string): Incident {
        this['source_url'] = sourceUrl;
        return this;
    }
    public set sourceUrl(sourceUrl: string  | undefined) {
        this['source_url'] = sourceUrl;
    }
    public get sourceUrl(): string | undefined {
        return this['source_url'];
    }
    public withCount(count: number): Incident {
        this['count'] = count;
        return this;
    }
    public withConfidence(confidence: number): Incident {
        this['confidence'] = confidence;
        return this;
    }
    public withSeverity(severity: IncidentSeverityEnum | string): Incident {
        this['severity'] = severity;
        return this;
    }
    public withCriticality(criticality: number): Incident {
        this['criticality'] = criticality;
        return this;
    }
    public withIncidentType(incidentType: IncidentIncidentType): Incident {
        this['incident_type'] = incidentType;
        return this;
    }
    public set incidentType(incidentType: IncidentIncidentType  | undefined) {
        this['incident_type'] = incidentType;
    }
    public get incidentType(): IncidentIncidentType | undefined {
        return this['incident_type'];
    }
    public withNetworkList(networkList: Array<AlertNetworkList>): Incident {
        this['network_list'] = networkList;
        return this;
    }
    public set networkList(networkList: Array<AlertNetworkList>  | undefined) {
        this['network_list'] = networkList;
    }
    public get networkList(): Array<AlertNetworkList> | undefined {
        return this['network_list'];
    }
    public withResourceList(resourceList: Array<AlertResourceList>): Incident {
        this['resource_list'] = resourceList;
        return this;
    }
    public set resourceList(resourceList: Array<AlertResourceList>  | undefined) {
        this['resource_list'] = resourceList;
    }
    public get resourceList(): Array<AlertResourceList> | undefined {
        return this['resource_list'];
    }
    public withRemediation(remediation: AlertRemediation): Incident {
        this['remediation'] = remediation;
        return this;
    }
    public withVerificationState(verificationState: IncidentVerificationStateEnum | string): Incident {
        this['verification_state'] = verificationState;
        return this;
    }
    public set verificationState(verificationState: IncidentVerificationStateEnum | string  | undefined) {
        this['verification_state'] = verificationState;
    }
    public get verificationState(): IncidentVerificationStateEnum | string | undefined {
        return this['verification_state'];
    }
    public withHandleStatus(handleStatus: IncidentHandleStatusEnum | string): Incident {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: IncidentHandleStatusEnum | string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): IncidentHandleStatusEnum | string | undefined {
        return this['handle_status'];
    }
    public withSla(sla: number): Incident {
        this['sla'] = sla;
        return this;
    }
    public withUpdateTime(updateTime: string): Incident {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withCloseTime(closeTime: string): Incident {
        this['close_time'] = closeTime;
        return this;
    }
    public set closeTime(closeTime: string  | undefined) {
        this['close_time'] = closeTime;
    }
    public get closeTime(): string | undefined {
        return this['close_time'];
    }
    public withIpdrrPhase(ipdrrPhase: IncidentIpdrrPhaseEnum | string): Incident {
        this['ipdrr_phase'] = ipdrrPhase;
        return this;
    }
    public set ipdrrPhase(ipdrrPhase: IncidentIpdrrPhaseEnum | string  | undefined) {
        this['ipdrr_phase'] = ipdrrPhase;
    }
    public get ipdrrPhase(): IncidentIpdrrPhaseEnum | string | undefined {
        return this['ipdrr_phase'];
    }
    public withSimulation(simulation: string): Incident {
        this['simulation'] = simulation;
        return this;
    }
    public withActor(actor: string): Incident {
        this['actor'] = actor;
        return this;
    }
    public withOwner(owner: string): Incident {
        this['owner'] = owner;
        return this;
    }
    public withCreator(creator: string): Incident {
        this['creator'] = creator;
        return this;
    }
    public withCloseReason(closeReason: IncidentCloseReasonEnum | string): Incident {
        this['close_reason'] = closeReason;
        return this;
    }
    public set closeReason(closeReason: IncidentCloseReasonEnum | string  | undefined) {
        this['close_reason'] = closeReason;
    }
    public get closeReason(): IncidentCloseReasonEnum | string | undefined {
        return this['close_reason'];
    }
    public withCloseComment(closeComment: string): Incident {
        this['close_comment'] = closeComment;
        return this;
    }
    public set closeComment(closeComment: string  | undefined) {
        this['close_comment'] = closeComment;
    }
    public get closeComment(): string | undefined {
        return this['close_comment'];
    }
    public withMalware(malware: ShowAlertRspMalware): Incident {
        this['malware'] = malware;
        return this;
    }
    public withSystemInfo(systemInfo: object): Incident {
        this['system_info'] = systemInfo;
        return this;
    }
    public set systemInfo(systemInfo: object  | undefined) {
        this['system_info'] = systemInfo;
    }
    public get systemInfo(): object | undefined {
        return this['system_info'];
    }
    public withProcess(process: Array<AlertProcess>): Incident {
        this['process'] = process;
        return this;
    }
    public withUserInfo(userInfo: Array<AlertUserInfo>): Incident {
        this['user_info'] = userInfo;
        return this;
    }
    public set userInfo(userInfo: Array<AlertUserInfo>  | undefined) {
        this['user_info'] = userInfo;
    }
    public get userInfo(): Array<AlertUserInfo> | undefined {
        return this['user_info'];
    }
    public withFileInfo(fileInfo: Array<AlertFileInfo>): Incident {
        this['file_info'] = fileInfo;
        return this;
    }
    public set fileInfo(fileInfo: Array<AlertFileInfo>  | undefined) {
        this['file_info'] = fileInfo;
    }
    public get fileInfo(): Array<AlertFileInfo> | undefined {
        return this['file_info'];
    }
    public withSystemAlertTable(systemAlertTable: object): Incident {
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
export enum IncidentSeverityEnum {
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
export enum IncidentVerificationStateEnum {
    UNKNOWN = 'Unknown',
    TRUE_POSITIVE = 'True_Positive',
    FALSE_POSITIVE = 'False_Positive'
}
/**
    * @export
    * @enum {string}
    */
export enum IncidentHandleStatusEnum {
    OPEN = 'Open',
    BLOCK = 'Block',
    CLOSED = 'Closed'
}
/**
    * @export
    * @enum {string}
    */
export enum IncidentIpdrrPhaseEnum {
    PREPARTION = 'Prepartion',
    DETECTION_AND_ANALYSIS = 'Detection and Analysis',
    CONTAINMERADICATION_RECOVERY = 'Containm，Eradication& Recovery',
    POST_INCIDENT_ACTIVITY = 'Post-Incident-Activity'
}
/**
    * @export
    * @enum {string}
    */
export enum IncidentCloseReasonEnum {
    FALSE_DETECTION = 'False detection',
    RESOLVED = 'Resolved',
    REPEATED = 'Repeated',
    OTHER = 'Other'
}
