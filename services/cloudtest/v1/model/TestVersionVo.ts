

export class TestVersionVo {
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
    public constructor() { 
    }
    public withUri(uri: string): TestVersionVo {
        this['uri'] = uri;
        return this;
    }
    public withType(type: string): TestVersionVo {
        this['type'] = type;
        return this;
    }
    public withAuthor(author: string): TestVersionVo {
        this['author'] = author;
        return this;
    }
    public withName(name: string): TestVersionVo {
        this['name'] = name;
        return this;
    }
    public withRank(rank: number): TestVersionVo {
        this['rank'] = rank;
        return this;
    }
    public withVersion(version: string): TestVersionVo {
        this['version'] = version;
        return this;
    }
    public withOwner(owner: string): TestVersionVo {
        this['owner'] = owner;
        return this;
    }
    public withCreator(creator: string): TestVersionVo {
        this['creator'] = creator;
        return this;
    }
    public withIterations(iterations: string): TestVersionVo {
        this['iterations'] = iterations;
        return this;
    }
    public withDescription(description: string): TestVersionVo {
        this['description'] = description;
        return this;
    }
    public withRegion(region: string): TestVersionVo {
        this['region'] = region;
        return this;
    }
    public withLastModifier(lastModifier: string): TestVersionVo {
        this['last_modifier'] = lastModifier;
        return this;
    }
    public set lastModifier(lastModifier: string  | undefined) {
        this['last_modifier'] = lastModifier;
    }
    public get lastModifier(): string | undefined {
        return this['last_modifier'];
    }
    public withLastModified(lastModified: Date): TestVersionVo {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: Date  | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified(): Date | undefined {
        return this['last_modified'];
    }
    public withLastModifiedTimestamp(lastModifiedTimestamp: number): TestVersionVo {
        this['last_modified_timestamp'] = lastModifiedTimestamp;
        return this;
    }
    public set lastModifiedTimestamp(lastModifiedTimestamp: number  | undefined) {
        this['last_modified_timestamp'] = lastModifiedTimestamp;
    }
    public get lastModifiedTimestamp(): number | undefined {
        return this['last_modified_timestamp'];
    }
    public withLastChangeTime(lastChangeTime: Date): TestVersionVo {
        this['last_change_time'] = lastChangeTime;
        return this;
    }
    public set lastChangeTime(lastChangeTime: Date  | undefined) {
        this['last_change_time'] = lastChangeTime;
    }
    public get lastChangeTime(): Date | undefined {
        return this['last_change_time'];
    }
    public withVersionUri(versionUri: string): TestVersionVo {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withOriginUri(originUri: string): TestVersionVo {
        this['origin_uri'] = originUri;
        return this;
    }
    public set originUri(originUri: string  | undefined) {
        this['origin_uri'] = originUri;
    }
    public get originUri(): string | undefined {
        return this['origin_uri'];
    }
    public withParentUri(parentUri: string): TestVersionVo {
        this['parent_uri'] = parentUri;
        return this;
    }
    public set parentUri(parentUri: string  | undefined) {
        this['parent_uri'] = parentUri;
    }
    public get parentUri(): string | undefined {
        return this['parent_uri'];
    }
    public withParentPath(parentPath: string): TestVersionVo {
        this['parent_path'] = parentPath;
        return this;
    }
    public set parentPath(parentPath: string  | undefined) {
        this['parent_path'] = parentPath;
    }
    public get parentPath(): string | undefined {
        return this['parent_path'];
    }
    public withCreationVersionUri(creationVersionUri: string): TestVersionVo {
        this['creation_version_uri'] = creationVersionUri;
        return this;
    }
    public set creationVersionUri(creationVersionUri: string  | undefined) {
        this['creation_version_uri'] = creationVersionUri;
    }
    public get creationVersionUri(): string | undefined {
        return this['creation_version_uri'];
    }
    public withCreationDate(creationDate: Date): TestVersionVo {
        this['creation_date'] = creationDate;
        return this;
    }
    public set creationDate(creationDate: Date  | undefined) {
        this['creation_date'] = creationDate;
    }
    public get creationDate(): Date | undefined {
        return this['creation_date'];
    }
    public withCreationDateTimestamp(creationDateTimestamp: number): TestVersionVo {
        this['creation_date_timestamp'] = creationDateTimestamp;
        return this;
    }
    public set creationDateTimestamp(creationDateTimestamp: number  | undefined) {
        this['creation_date_timestamp'] = creationDateTimestamp;
    }
    public get creationDateTimestamp(): number | undefined {
        return this['creation_date_timestamp'];
    }
    public withAuthorName(authorName: string): TestVersionVo {
        this['author_name'] = authorName;
        return this;
    }
    public set authorName(authorName: string  | undefined) {
        this['author_name'] = authorName;
    }
    public get authorName(): string | undefined {
        return this['author_name'];
    }
    public withComment(comment: string): TestVersionVo {
        this['comment'] = comment;
        return this;
    }
    public withModelNumber(modelNumber: string): TestVersionVo {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withIsMaster(isMaster: number): TestVersionVo {
        this['is_master'] = isMaster;
        return this;
    }
    public set isMaster(isMaster: number  | undefined) {
        this['is_master'] = isMaster;
    }
    public get isMaster(): number | undefined {
        return this['is_master'];
    }
    public withIsIterator(isIterator: number): TestVersionVo {
        this['is_iterator'] = isIterator;
        return this;
    }
    public set isIterator(isIterator: number  | undefined) {
        this['is_iterator'] = isIterator;
    }
    public get isIterator(): number | undefined {
        return this['is_iterator'];
    }
    public withPlanStartDate(planStartDate: Date): TestVersionVo {
        this['plan_start_date'] = planStartDate;
        return this;
    }
    public set planStartDate(planStartDate: Date  | undefined) {
        this['plan_start_date'] = planStartDate;
    }
    public get planStartDate(): Date | undefined {
        return this['plan_start_date'];
    }
    public withPlanEndDate(planEndDate: Date): TestVersionVo {
        this['plan_end_date'] = planEndDate;
        return this;
    }
    public set planEndDate(planEndDate: Date  | undefined) {
        this['plan_end_date'] = planEndDate;
    }
    public get planEndDate(): Date | undefined {
        return this['plan_end_date'];
    }
    public withServiceId(serviceId: string): TestVersionVo {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withServiceName(serviceName: string): TestVersionVo {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withPbiId(pbiId: string): TestVersionVo {
        this['pbi_id'] = pbiId;
        return this;
    }
    public set pbiId(pbiId: string  | undefined) {
        this['pbi_id'] = pbiId;
    }
    public get pbiId(): string | undefined {
        return this['pbi_id'];
    }
    public withPbiName(pbiName: string): TestVersionVo {
        this['pbi_name'] = pbiName;
        return this;
    }
    public set pbiName(pbiName: string  | undefined) {
        this['pbi_name'] = pbiName;
    }
    public get pbiName(): string | undefined {
        return this['pbi_name'];
    }
    public withPlanId(planId: string): TestVersionVo {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
    public withMetricPbiIds(metricPbiIds: string): TestVersionVo {
        this['metric_pbi_ids'] = metricPbiIds;
        return this;
    }
    public set metricPbiIds(metricPbiIds: string  | undefined) {
        this['metric_pbi_ids'] = metricPbiIds;
    }
    public get metricPbiIds(): string | undefined {
        return this['metric_pbi_ids'];
    }
    public withMetricPbiIdNames(metricPbiIdNames: string): TestVersionVo {
        this['metric_pbi_id_names'] = metricPbiIdNames;
        return this;
    }
    public set metricPbiIdNames(metricPbiIdNames: string  | undefined) {
        this['metric_pbi_id_names'] = metricPbiIdNames;
    }
    public get metricPbiIdNames(): string | undefined {
        return this['metric_pbi_id_names'];
    }
    public withLastSynDate(lastSynDate: Date): TestVersionVo {
        this['last_syn_date'] = lastSynDate;
        return this;
    }
    public set lastSynDate(lastSynDate: Date  | undefined) {
        this['last_syn_date'] = lastSynDate;
    }
    public get lastSynDate(): Date | undefined {
        return this['last_syn_date'];
    }
    public withIsClosed(isClosed: string): TestVersionVo {
        this['is_closed'] = isClosed;
        return this;
    }
    public set isClosed(isClosed: string  | undefined) {
        this['is_closed'] = isClosed;
    }
    public get isClosed(): string | undefined {
        return this['is_closed'];
    }
    public withAsynGit(asynGit: string): TestVersionVo {
        this['asyn_git'] = asynGit;
        return this;
    }
    public set asynGit(asynGit: string  | undefined) {
        this['asyn_git'] = asynGit;
    }
    public get asynGit(): string | undefined {
        return this['asyn_git'];
    }
    public withSchemaNo(schemaNo: number): TestVersionVo {
        this['schema_no'] = schemaNo;
        return this;
    }
    public set schemaNo(schemaNo: number  | undefined) {
        this['schema_no'] = schemaNo;
    }
    public get schemaNo(): number | undefined {
        return this['schema_no'];
    }
    public withFinishDate(finishDate: Date): TestVersionVo {
        this['finish_date'] = finishDate;
        return this;
    }
    public set finishDate(finishDate: Date  | undefined) {
        this['finish_date'] = finishDate;
    }
    public get finishDate(): Date | undefined {
        return this['finish_date'];
    }
    public withOwnerName(ownerName: string): TestVersionVo {
        this['owner_name'] = ownerName;
        return this;
    }
    public set ownerName(ownerName: string  | undefined) {
        this['owner_name'] = ownerName;
    }
    public get ownerName(): string | undefined {
        return this['owner_name'];
    }
    public withCreatorName(creatorName: string): TestVersionVo {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withCurrentStage(currentStage: string): TestVersionVo {
        this['current_stage'] = currentStage;
        return this;
    }
    public set currentStage(currentStage: string  | undefined) {
        this['current_stage'] = currentStage;
    }
    public get currentStage(): string | undefined {
        return this['current_stage'];
    }
    public withServiceTypes(serviceTypes: string): TestVersionVo {
        this['service_types'] = serviceTypes;
        return this;
    }
    public set serviceTypes(serviceTypes: string  | undefined) {
        this['service_types'] = serviceTypes;
    }
    public get serviceTypes(): string | undefined {
        return this['service_types'];
    }
    public withRiskRating(riskRating: number): TestVersionVo {
        this['risk_rating'] = riskRating;
        return this;
    }
    public set riskRating(riskRating: number  | undefined) {
        this['risk_rating'] = riskRating;
    }
    public get riskRating(): number | undefined {
        return this['risk_rating'];
    }
    public withRiskDes(riskDes: string): TestVersionVo {
        this['risk_des'] = riskDes;
        return this;
    }
    public set riskDes(riskDes: string  | undefined) {
        this['risk_des'] = riskDes;
    }
    public get riskDes(): string | undefined {
        return this['risk_des'];
    }
    public withProjectUuid(projectUuid: string): TestVersionVo {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withDomainId(domainId: string): TestVersionVo {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withPiId(piId: string): TestVersionVo {
        this['pi_id'] = piId;
        return this;
    }
    public set piId(piId: string  | undefined) {
        this['pi_id'] = piId;
    }
    public get piId(): string | undefined {
        return this['pi_id'];
    }
}