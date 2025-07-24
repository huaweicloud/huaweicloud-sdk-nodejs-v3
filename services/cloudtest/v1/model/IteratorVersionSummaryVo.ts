import { DesignSummaryVo } from './DesignSummaryVo';
import { ExecuteSummaryVo } from './ExecuteSummaryVo';
import { ReportSummaryVo } from './ReportSummaryVo';


export class IteratorVersionSummaryVo {
    public uri?: string;
    public type?: string;
    public author?: string;
    public name?: string;
    public rank?: number;
    public version?: string;
    public owner?: string;
    public creator?: string;
    public iterations?: string;
    public description?: string;
    public region?: string;
    private 'last_modifier'?: string;
    private 'last_modified'?: Date;
    private 'last_modified_timestamp'?: number;
    private 'last_change_time'?: Date;
    private 'version_uri'?: string;
    private 'origin_uri'?: string;
    private 'parent_uri'?: string;
    private 'parent_path'?: string;
    private 'creation_version_uri'?: string;
    private 'creation_date'?: Date;
    private 'creation_date_timestamp'?: number;
    private 'author_name'?: string;
    public comment?: string;
    private 'number'?: string;
    private 'is_master'?: number;
    private 'is_iterator'?: number;
    private 'plan_start_date'?: Date;
    private 'plan_end_date'?: Date;
    private 'service_id'?: string;
    private 'service_name'?: string;
    private 'pbi_id'?: string;
    private 'pbi_name'?: string;
    private 'plan_id'?: string;
    private 'metric_pbi_ids'?: string;
    private 'metric_pbi_id_names'?: string;
    private 'last_syn_date'?: Date;
    private 'is_closed'?: string;
    private 'asyn_git'?: string;
    private 'schema_no'?: number;
    private 'finish_date'?: Date;
    private 'owner_name'?: string;
    private 'creator_name'?: string;
    private 'current_stage'?: string;
    private 'service_types'?: string;
    private 'risk_rating'?: number;
    private 'risk_des'?: string;
    private 'project_uuid'?: string;
    private 'domain_id'?: string;
    private 'pi_id'?: string;
    private 'start_date'?: string;
    private 'start_date_timestamp'?: number;
    private 'end_date'?: string;
    private 'end_date_timestamp'?: number;
    private 'actual_start_date'?: string;
    private 'actual_start_date_timestamp'?: number;
    private 'actual_end_date'?: string;
    private 'actual_end_date_timestamp'?: number;
    private 'is_expired'?: string;
    private 'expired_info'?: string;
    public stages?: Array<string>;
    public design?: DesignSummaryVo;
    public execute?: ExecuteSummaryVo;
    public report?: ReportSummaryVo;
    private 'branch_uri'?: string;
    private 'branch_name'?: string;
    public constructor() { 
    }
    public withUri(uri: string): IteratorVersionSummaryVo {
        this['uri'] = uri;
        return this;
    }
    public withType(type: string): IteratorVersionSummaryVo {
        this['type'] = type;
        return this;
    }
    public withAuthor(author: string): IteratorVersionSummaryVo {
        this['author'] = author;
        return this;
    }
    public withName(name: string): IteratorVersionSummaryVo {
        this['name'] = name;
        return this;
    }
    public withRank(rank: number): IteratorVersionSummaryVo {
        this['rank'] = rank;
        return this;
    }
    public withVersion(version: string): IteratorVersionSummaryVo {
        this['version'] = version;
        return this;
    }
    public withOwner(owner: string): IteratorVersionSummaryVo {
        this['owner'] = owner;
        return this;
    }
    public withCreator(creator: string): IteratorVersionSummaryVo {
        this['creator'] = creator;
        return this;
    }
    public withIterations(iterations: string): IteratorVersionSummaryVo {
        this['iterations'] = iterations;
        return this;
    }
    public withDescription(description: string): IteratorVersionSummaryVo {
        this['description'] = description;
        return this;
    }
    public withRegion(region: string): IteratorVersionSummaryVo {
        this['region'] = region;
        return this;
    }
    public withLastModifier(lastModifier: string): IteratorVersionSummaryVo {
        this['last_modifier'] = lastModifier;
        return this;
    }
    public set lastModifier(lastModifier: string  | undefined) {
        this['last_modifier'] = lastModifier;
    }
    public get lastModifier(): string | undefined {
        return this['last_modifier'];
    }
    public withLastModified(lastModified: Date): IteratorVersionSummaryVo {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: Date  | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified(): Date | undefined {
        return this['last_modified'];
    }
    public withLastModifiedTimestamp(lastModifiedTimestamp: number): IteratorVersionSummaryVo {
        this['last_modified_timestamp'] = lastModifiedTimestamp;
        return this;
    }
    public set lastModifiedTimestamp(lastModifiedTimestamp: number  | undefined) {
        this['last_modified_timestamp'] = lastModifiedTimestamp;
    }
    public get lastModifiedTimestamp(): number | undefined {
        return this['last_modified_timestamp'];
    }
    public withLastChangeTime(lastChangeTime: Date): IteratorVersionSummaryVo {
        this['last_change_time'] = lastChangeTime;
        return this;
    }
    public set lastChangeTime(lastChangeTime: Date  | undefined) {
        this['last_change_time'] = lastChangeTime;
    }
    public get lastChangeTime(): Date | undefined {
        return this['last_change_time'];
    }
    public withVersionUri(versionUri: string): IteratorVersionSummaryVo {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withOriginUri(originUri: string): IteratorVersionSummaryVo {
        this['origin_uri'] = originUri;
        return this;
    }
    public set originUri(originUri: string  | undefined) {
        this['origin_uri'] = originUri;
    }
    public get originUri(): string | undefined {
        return this['origin_uri'];
    }
    public withParentUri(parentUri: string): IteratorVersionSummaryVo {
        this['parent_uri'] = parentUri;
        return this;
    }
    public set parentUri(parentUri: string  | undefined) {
        this['parent_uri'] = parentUri;
    }
    public get parentUri(): string | undefined {
        return this['parent_uri'];
    }
    public withParentPath(parentPath: string): IteratorVersionSummaryVo {
        this['parent_path'] = parentPath;
        return this;
    }
    public set parentPath(parentPath: string  | undefined) {
        this['parent_path'] = parentPath;
    }
    public get parentPath(): string | undefined {
        return this['parent_path'];
    }
    public withCreationVersionUri(creationVersionUri: string): IteratorVersionSummaryVo {
        this['creation_version_uri'] = creationVersionUri;
        return this;
    }
    public set creationVersionUri(creationVersionUri: string  | undefined) {
        this['creation_version_uri'] = creationVersionUri;
    }
    public get creationVersionUri(): string | undefined {
        return this['creation_version_uri'];
    }
    public withCreationDate(creationDate: Date): IteratorVersionSummaryVo {
        this['creation_date'] = creationDate;
        return this;
    }
    public set creationDate(creationDate: Date  | undefined) {
        this['creation_date'] = creationDate;
    }
    public get creationDate(): Date | undefined {
        return this['creation_date'];
    }
    public withCreationDateTimestamp(creationDateTimestamp: number): IteratorVersionSummaryVo {
        this['creation_date_timestamp'] = creationDateTimestamp;
        return this;
    }
    public set creationDateTimestamp(creationDateTimestamp: number  | undefined) {
        this['creation_date_timestamp'] = creationDateTimestamp;
    }
    public get creationDateTimestamp(): number | undefined {
        return this['creation_date_timestamp'];
    }
    public withAuthorName(authorName: string): IteratorVersionSummaryVo {
        this['author_name'] = authorName;
        return this;
    }
    public set authorName(authorName: string  | undefined) {
        this['author_name'] = authorName;
    }
    public get authorName(): string | undefined {
        return this['author_name'];
    }
    public withComment(comment: string): IteratorVersionSummaryVo {
        this['comment'] = comment;
        return this;
    }
    public withModelNumber(modelNumber: string): IteratorVersionSummaryVo {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withIsMaster(isMaster: number): IteratorVersionSummaryVo {
        this['is_master'] = isMaster;
        return this;
    }
    public set isMaster(isMaster: number  | undefined) {
        this['is_master'] = isMaster;
    }
    public get isMaster(): number | undefined {
        return this['is_master'];
    }
    public withIsIterator(isIterator: number): IteratorVersionSummaryVo {
        this['is_iterator'] = isIterator;
        return this;
    }
    public set isIterator(isIterator: number  | undefined) {
        this['is_iterator'] = isIterator;
    }
    public get isIterator(): number | undefined {
        return this['is_iterator'];
    }
    public withPlanStartDate(planStartDate: Date): IteratorVersionSummaryVo {
        this['plan_start_date'] = planStartDate;
        return this;
    }
    public set planStartDate(planStartDate: Date  | undefined) {
        this['plan_start_date'] = planStartDate;
    }
    public get planStartDate(): Date | undefined {
        return this['plan_start_date'];
    }
    public withPlanEndDate(planEndDate: Date): IteratorVersionSummaryVo {
        this['plan_end_date'] = planEndDate;
        return this;
    }
    public set planEndDate(planEndDate: Date  | undefined) {
        this['plan_end_date'] = planEndDate;
    }
    public get planEndDate(): Date | undefined {
        return this['plan_end_date'];
    }
    public withServiceId(serviceId: string): IteratorVersionSummaryVo {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withServiceName(serviceName: string): IteratorVersionSummaryVo {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withPbiId(pbiId: string): IteratorVersionSummaryVo {
        this['pbi_id'] = pbiId;
        return this;
    }
    public set pbiId(pbiId: string  | undefined) {
        this['pbi_id'] = pbiId;
    }
    public get pbiId(): string | undefined {
        return this['pbi_id'];
    }
    public withPbiName(pbiName: string): IteratorVersionSummaryVo {
        this['pbi_name'] = pbiName;
        return this;
    }
    public set pbiName(pbiName: string  | undefined) {
        this['pbi_name'] = pbiName;
    }
    public get pbiName(): string | undefined {
        return this['pbi_name'];
    }
    public withPlanId(planId: string): IteratorVersionSummaryVo {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
    public withMetricPbiIds(metricPbiIds: string): IteratorVersionSummaryVo {
        this['metric_pbi_ids'] = metricPbiIds;
        return this;
    }
    public set metricPbiIds(metricPbiIds: string  | undefined) {
        this['metric_pbi_ids'] = metricPbiIds;
    }
    public get metricPbiIds(): string | undefined {
        return this['metric_pbi_ids'];
    }
    public withMetricPbiIdNames(metricPbiIdNames: string): IteratorVersionSummaryVo {
        this['metric_pbi_id_names'] = metricPbiIdNames;
        return this;
    }
    public set metricPbiIdNames(metricPbiIdNames: string  | undefined) {
        this['metric_pbi_id_names'] = metricPbiIdNames;
    }
    public get metricPbiIdNames(): string | undefined {
        return this['metric_pbi_id_names'];
    }
    public withLastSynDate(lastSynDate: Date): IteratorVersionSummaryVo {
        this['last_syn_date'] = lastSynDate;
        return this;
    }
    public set lastSynDate(lastSynDate: Date  | undefined) {
        this['last_syn_date'] = lastSynDate;
    }
    public get lastSynDate(): Date | undefined {
        return this['last_syn_date'];
    }
    public withIsClosed(isClosed: string): IteratorVersionSummaryVo {
        this['is_closed'] = isClosed;
        return this;
    }
    public set isClosed(isClosed: string  | undefined) {
        this['is_closed'] = isClosed;
    }
    public get isClosed(): string | undefined {
        return this['is_closed'];
    }
    public withAsynGit(asynGit: string): IteratorVersionSummaryVo {
        this['asyn_git'] = asynGit;
        return this;
    }
    public set asynGit(asynGit: string  | undefined) {
        this['asyn_git'] = asynGit;
    }
    public get asynGit(): string | undefined {
        return this['asyn_git'];
    }
    public withSchemaNo(schemaNo: number): IteratorVersionSummaryVo {
        this['schema_no'] = schemaNo;
        return this;
    }
    public set schemaNo(schemaNo: number  | undefined) {
        this['schema_no'] = schemaNo;
    }
    public get schemaNo(): number | undefined {
        return this['schema_no'];
    }
    public withFinishDate(finishDate: Date): IteratorVersionSummaryVo {
        this['finish_date'] = finishDate;
        return this;
    }
    public set finishDate(finishDate: Date  | undefined) {
        this['finish_date'] = finishDate;
    }
    public get finishDate(): Date | undefined {
        return this['finish_date'];
    }
    public withOwnerName(ownerName: string): IteratorVersionSummaryVo {
        this['owner_name'] = ownerName;
        return this;
    }
    public set ownerName(ownerName: string  | undefined) {
        this['owner_name'] = ownerName;
    }
    public get ownerName(): string | undefined {
        return this['owner_name'];
    }
    public withCreatorName(creatorName: string): IteratorVersionSummaryVo {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withCurrentStage(currentStage: string): IteratorVersionSummaryVo {
        this['current_stage'] = currentStage;
        return this;
    }
    public set currentStage(currentStage: string  | undefined) {
        this['current_stage'] = currentStage;
    }
    public get currentStage(): string | undefined {
        return this['current_stage'];
    }
    public withServiceTypes(serviceTypes: string): IteratorVersionSummaryVo {
        this['service_types'] = serviceTypes;
        return this;
    }
    public set serviceTypes(serviceTypes: string  | undefined) {
        this['service_types'] = serviceTypes;
    }
    public get serviceTypes(): string | undefined {
        return this['service_types'];
    }
    public withRiskRating(riskRating: number): IteratorVersionSummaryVo {
        this['risk_rating'] = riskRating;
        return this;
    }
    public set riskRating(riskRating: number  | undefined) {
        this['risk_rating'] = riskRating;
    }
    public get riskRating(): number | undefined {
        return this['risk_rating'];
    }
    public withRiskDes(riskDes: string): IteratorVersionSummaryVo {
        this['risk_des'] = riskDes;
        return this;
    }
    public set riskDes(riskDes: string  | undefined) {
        this['risk_des'] = riskDes;
    }
    public get riskDes(): string | undefined {
        return this['risk_des'];
    }
    public withProjectUuid(projectUuid: string): IteratorVersionSummaryVo {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withDomainId(domainId: string): IteratorVersionSummaryVo {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withPiId(piId: string): IteratorVersionSummaryVo {
        this['pi_id'] = piId;
        return this;
    }
    public set piId(piId: string  | undefined) {
        this['pi_id'] = piId;
    }
    public get piId(): string | undefined {
        return this['pi_id'];
    }
    public withStartDate(startDate: string): IteratorVersionSummaryVo {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): string | undefined {
        return this['start_date'];
    }
    public withStartDateTimestamp(startDateTimestamp: number): IteratorVersionSummaryVo {
        this['start_date_timestamp'] = startDateTimestamp;
        return this;
    }
    public set startDateTimestamp(startDateTimestamp: number  | undefined) {
        this['start_date_timestamp'] = startDateTimestamp;
    }
    public get startDateTimestamp(): number | undefined {
        return this['start_date_timestamp'];
    }
    public withEndDate(endDate: string): IteratorVersionSummaryVo {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: string  | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate(): string | undefined {
        return this['end_date'];
    }
    public withEndDateTimestamp(endDateTimestamp: number): IteratorVersionSummaryVo {
        this['end_date_timestamp'] = endDateTimestamp;
        return this;
    }
    public set endDateTimestamp(endDateTimestamp: number  | undefined) {
        this['end_date_timestamp'] = endDateTimestamp;
    }
    public get endDateTimestamp(): number | undefined {
        return this['end_date_timestamp'];
    }
    public withActualStartDate(actualStartDate: string): IteratorVersionSummaryVo {
        this['actual_start_date'] = actualStartDate;
        return this;
    }
    public set actualStartDate(actualStartDate: string  | undefined) {
        this['actual_start_date'] = actualStartDate;
    }
    public get actualStartDate(): string | undefined {
        return this['actual_start_date'];
    }
    public withActualStartDateTimestamp(actualStartDateTimestamp: number): IteratorVersionSummaryVo {
        this['actual_start_date_timestamp'] = actualStartDateTimestamp;
        return this;
    }
    public set actualStartDateTimestamp(actualStartDateTimestamp: number  | undefined) {
        this['actual_start_date_timestamp'] = actualStartDateTimestamp;
    }
    public get actualStartDateTimestamp(): number | undefined {
        return this['actual_start_date_timestamp'];
    }
    public withActualEndDate(actualEndDate: string): IteratorVersionSummaryVo {
        this['actual_end_date'] = actualEndDate;
        return this;
    }
    public set actualEndDate(actualEndDate: string  | undefined) {
        this['actual_end_date'] = actualEndDate;
    }
    public get actualEndDate(): string | undefined {
        return this['actual_end_date'];
    }
    public withActualEndDateTimestamp(actualEndDateTimestamp: number): IteratorVersionSummaryVo {
        this['actual_end_date_timestamp'] = actualEndDateTimestamp;
        return this;
    }
    public set actualEndDateTimestamp(actualEndDateTimestamp: number  | undefined) {
        this['actual_end_date_timestamp'] = actualEndDateTimestamp;
    }
    public get actualEndDateTimestamp(): number | undefined {
        return this['actual_end_date_timestamp'];
    }
    public withIsExpired(isExpired: string): IteratorVersionSummaryVo {
        this['is_expired'] = isExpired;
        return this;
    }
    public set isExpired(isExpired: string  | undefined) {
        this['is_expired'] = isExpired;
    }
    public get isExpired(): string | undefined {
        return this['is_expired'];
    }
    public withExpiredInfo(expiredInfo: string): IteratorVersionSummaryVo {
        this['expired_info'] = expiredInfo;
        return this;
    }
    public set expiredInfo(expiredInfo: string  | undefined) {
        this['expired_info'] = expiredInfo;
    }
    public get expiredInfo(): string | undefined {
        return this['expired_info'];
    }
    public withStages(stages: Array<string>): IteratorVersionSummaryVo {
        this['stages'] = stages;
        return this;
    }
    public withDesign(design: DesignSummaryVo): IteratorVersionSummaryVo {
        this['design'] = design;
        return this;
    }
    public withExecute(execute: ExecuteSummaryVo): IteratorVersionSummaryVo {
        this['execute'] = execute;
        return this;
    }
    public withReport(report: ReportSummaryVo): IteratorVersionSummaryVo {
        this['report'] = report;
        return this;
    }
    public withBranchUri(branchUri: string): IteratorVersionSummaryVo {
        this['branch_uri'] = branchUri;
        return this;
    }
    public set branchUri(branchUri: string  | undefined) {
        this['branch_uri'] = branchUri;
    }
    public get branchUri(): string | undefined {
        return this['branch_uri'];
    }
    public withBranchName(branchName: string): IteratorVersionSummaryVo {
        this['branch_name'] = branchName;
        return this;
    }
    public set branchName(branchName: string  | undefined) {
        this['branch_name'] = branchName;
    }
    public get branchName(): string | undefined {
        return this['branch_name'];
    }
}