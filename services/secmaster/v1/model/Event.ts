import { Compliance } from './Compliance';
import { DataSource } from './DataSource';
import { Environment } from './Environment';
import { Malware } from './Malware';
import { Network } from './Network';
import { Remediation } from './Remediation';
import { Resource } from './Resource';
import { Severity } from './Severity';
import { ThreatIntel } from './ThreatIntel';
import { Type } from './Type';
import { VulnerabilityPatch } from './VulnerabilityPatch';


export class Event {
    public version?: string;
    public environment?: Environment;
    private 'data_source'?: DataSource;
    private 'first_observed_time'?: Date;
    private 'last_observed_time'?: Date;
    private 'create_time'?: Date;
    private 'arrive_time'?: Date;
    private 'event_id'?: string;
    public title?: string;
    public description?: string;
    private 'source_url'?: string;
    public count?: number;
    public confidence?: number;
    public severity?: Severity;
    public criticality?: number;
    public type?: Type;
    public compliance?: Compliance;
    public network?: Network;
    private 'vulnerability_patch'?: VulnerabilityPatch;
    public malware?: Malware;
    private 'threat_intel'?: ThreatIntel;
    public resource?: Resource;
    public remediation?: Remediation;
    private 'data_source_fields'?: object;
    private 'verification_state'?: string;
    private 'handle_status'?: string;
    public phase?: string;
    public sla?: number;
    public constructor(version?: string, environment?: Environment, dataSource?: DataSource, firstObservedTime?: Date, createTime?: Date, eventId?: string, title?: string, description?: string, count?: number, severity?: Severity, type?: Type, resource?: Resource, handleStatus?: string) { 
        this['version'] = version;
        this['environment'] = environment;
        this['data_source'] = dataSource;
        this['first_observed_time'] = firstObservedTime;
        this['create_time'] = createTime;
        this['event_id'] = eventId;
        this['title'] = title;
        this['description'] = description;
        this['count'] = count;
        this['severity'] = severity;
        this['type'] = type;
        this['resource'] = resource;
        this['handle_status'] = handleStatus;
    }
    public withVersion(version: string): Event {
        this['version'] = version;
        return this;
    }
    public withEnvironment(environment: Environment): Event {
        this['environment'] = environment;
        return this;
    }
    public withDataSource(dataSource: DataSource): Event {
        this['data_source'] = dataSource;
        return this;
    }
    public set dataSource(dataSource: DataSource  | undefined) {
        this['data_source'] = dataSource;
    }
    public get dataSource(): DataSource | undefined {
        return this['data_source'];
    }
    public withFirstObservedTime(firstObservedTime: Date): Event {
        this['first_observed_time'] = firstObservedTime;
        return this;
    }
    public set firstObservedTime(firstObservedTime: Date  | undefined) {
        this['first_observed_time'] = firstObservedTime;
    }
    public get firstObservedTime(): Date | undefined {
        return this['first_observed_time'];
    }
    public withLastObservedTime(lastObservedTime: Date): Event {
        this['last_observed_time'] = lastObservedTime;
        return this;
    }
    public set lastObservedTime(lastObservedTime: Date  | undefined) {
        this['last_observed_time'] = lastObservedTime;
    }
    public get lastObservedTime(): Date | undefined {
        return this['last_observed_time'];
    }
    public withCreateTime(createTime: Date): Event {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withArriveTime(arriveTime: Date): Event {
        this['arrive_time'] = arriveTime;
        return this;
    }
    public set arriveTime(arriveTime: Date  | undefined) {
        this['arrive_time'] = arriveTime;
    }
    public get arriveTime(): Date | undefined {
        return this['arrive_time'];
    }
    public withEventId(eventId: string): Event {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withTitle(title: string): Event {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): Event {
        this['description'] = description;
        return this;
    }
    public withSourceUrl(sourceUrl: string): Event {
        this['source_url'] = sourceUrl;
        return this;
    }
    public set sourceUrl(sourceUrl: string  | undefined) {
        this['source_url'] = sourceUrl;
    }
    public get sourceUrl(): string | undefined {
        return this['source_url'];
    }
    public withCount(count: number): Event {
        this['count'] = count;
        return this;
    }
    public withConfidence(confidence: number): Event {
        this['confidence'] = confidence;
        return this;
    }
    public withSeverity(severity: Severity): Event {
        this['severity'] = severity;
        return this;
    }
    public withCriticality(criticality: number): Event {
        this['criticality'] = criticality;
        return this;
    }
    public withType(type: Type): Event {
        this['type'] = type;
        return this;
    }
    public withCompliance(compliance: Compliance): Event {
        this['compliance'] = compliance;
        return this;
    }
    public withNetwork(network: Network): Event {
        this['network'] = network;
        return this;
    }
    public withVulnerabilityPatch(vulnerabilityPatch: VulnerabilityPatch): Event {
        this['vulnerability_patch'] = vulnerabilityPatch;
        return this;
    }
    public set vulnerabilityPatch(vulnerabilityPatch: VulnerabilityPatch  | undefined) {
        this['vulnerability_patch'] = vulnerabilityPatch;
    }
    public get vulnerabilityPatch(): VulnerabilityPatch | undefined {
        return this['vulnerability_patch'];
    }
    public withMalware(malware: Malware): Event {
        this['malware'] = malware;
        return this;
    }
    public withThreatIntel(threatIntel: ThreatIntel): Event {
        this['threat_intel'] = threatIntel;
        return this;
    }
    public set threatIntel(threatIntel: ThreatIntel  | undefined) {
        this['threat_intel'] = threatIntel;
    }
    public get threatIntel(): ThreatIntel | undefined {
        return this['threat_intel'];
    }
    public withResource(resource: Resource): Event {
        this['resource'] = resource;
        return this;
    }
    public withRemediation(remediation: Remediation): Event {
        this['remediation'] = remediation;
        return this;
    }
    public withDataSourceFields(dataSourceFields: object): Event {
        this['data_source_fields'] = dataSourceFields;
        return this;
    }
    public set dataSourceFields(dataSourceFields: object  | undefined) {
        this['data_source_fields'] = dataSourceFields;
    }
    public get dataSourceFields(): object | undefined {
        return this['data_source_fields'];
    }
    public withVerificationState(verificationState: string): Event {
        this['verification_state'] = verificationState;
        return this;
    }
    public set verificationState(verificationState: string  | undefined) {
        this['verification_state'] = verificationState;
    }
    public get verificationState(): string | undefined {
        return this['verification_state'];
    }
    public withHandleStatus(handleStatus: string): Event {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withPhase(phase: string): Event {
        this['phase'] = phase;
        return this;
    }
    public withSla(sla: number): Event {
        this['sla'] = sla;
        return this;
    }
}