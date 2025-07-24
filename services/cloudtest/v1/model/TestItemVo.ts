

export class TestItemVo {
    public uri?: string;
    public type?: string;
    public author?: string;
    public name?: string;
    public rank?: number;
    public owner?: string;
    public frequence?: string;
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
    private 'is_feature'?: string;
    private 'relate_htsm'?: string;
    private 'aw_unique_id'?: string;
    private 'test_mind_id'?: string;
    private 'test_mind_url'?: string;
    private 'project_uuid'?: string;
    private 'case_total'?: number;
    private 'execd_total'?: number;
    private 'is_direct_relation'?: boolean;
    private 'has_child'?: boolean;
    public constructor() { 
    }
    public withUri(uri: string): TestItemVo {
        this['uri'] = uri;
        return this;
    }
    public withType(type: string): TestItemVo {
        this['type'] = type;
        return this;
    }
    public withAuthor(author: string): TestItemVo {
        this['author'] = author;
        return this;
    }
    public withName(name: string): TestItemVo {
        this['name'] = name;
        return this;
    }
    public withRank(rank: number): TestItemVo {
        this['rank'] = rank;
        return this;
    }
    public withOwner(owner: string): TestItemVo {
        this['owner'] = owner;
        return this;
    }
    public withFrequence(frequence: string): TestItemVo {
        this['frequence'] = frequence;
        return this;
    }
    public withRegion(region: string): TestItemVo {
        this['region'] = region;
        return this;
    }
    public withLastModifier(lastModifier: string): TestItemVo {
        this['last_modifier'] = lastModifier;
        return this;
    }
    public set lastModifier(lastModifier: string  | undefined) {
        this['last_modifier'] = lastModifier;
    }
    public get lastModifier(): string | undefined {
        return this['last_modifier'];
    }
    public withLastModified(lastModified: Date): TestItemVo {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: Date  | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified(): Date | undefined {
        return this['last_modified'];
    }
    public withLastModifiedTimestamp(lastModifiedTimestamp: number): TestItemVo {
        this['last_modified_timestamp'] = lastModifiedTimestamp;
        return this;
    }
    public set lastModifiedTimestamp(lastModifiedTimestamp: number  | undefined) {
        this['last_modified_timestamp'] = lastModifiedTimestamp;
    }
    public get lastModifiedTimestamp(): number | undefined {
        return this['last_modified_timestamp'];
    }
    public withLastChangeTime(lastChangeTime: Date): TestItemVo {
        this['last_change_time'] = lastChangeTime;
        return this;
    }
    public set lastChangeTime(lastChangeTime: Date  | undefined) {
        this['last_change_time'] = lastChangeTime;
    }
    public get lastChangeTime(): Date | undefined {
        return this['last_change_time'];
    }
    public withVersionUri(versionUri: string): TestItemVo {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withOriginUri(originUri: string): TestItemVo {
        this['origin_uri'] = originUri;
        return this;
    }
    public set originUri(originUri: string  | undefined) {
        this['origin_uri'] = originUri;
    }
    public get originUri(): string | undefined {
        return this['origin_uri'];
    }
    public withParentUri(parentUri: string): TestItemVo {
        this['parent_uri'] = parentUri;
        return this;
    }
    public set parentUri(parentUri: string  | undefined) {
        this['parent_uri'] = parentUri;
    }
    public get parentUri(): string | undefined {
        return this['parent_uri'];
    }
    public withParentPath(parentPath: string): TestItemVo {
        this['parent_path'] = parentPath;
        return this;
    }
    public set parentPath(parentPath: string  | undefined) {
        this['parent_path'] = parentPath;
    }
    public get parentPath(): string | undefined {
        return this['parent_path'];
    }
    public withCreationVersionUri(creationVersionUri: string): TestItemVo {
        this['creation_version_uri'] = creationVersionUri;
        return this;
    }
    public set creationVersionUri(creationVersionUri: string  | undefined) {
        this['creation_version_uri'] = creationVersionUri;
    }
    public get creationVersionUri(): string | undefined {
        return this['creation_version_uri'];
    }
    public withCreationDate(creationDate: Date): TestItemVo {
        this['creation_date'] = creationDate;
        return this;
    }
    public set creationDate(creationDate: Date  | undefined) {
        this['creation_date'] = creationDate;
    }
    public get creationDate(): Date | undefined {
        return this['creation_date'];
    }
    public withCreationDateTimestamp(creationDateTimestamp: number): TestItemVo {
        this['creation_date_timestamp'] = creationDateTimestamp;
        return this;
    }
    public set creationDateTimestamp(creationDateTimestamp: number  | undefined) {
        this['creation_date_timestamp'] = creationDateTimestamp;
    }
    public get creationDateTimestamp(): number | undefined {
        return this['creation_date_timestamp'];
    }
    public withAuthorName(authorName: string): TestItemVo {
        this['author_name'] = authorName;
        return this;
    }
    public set authorName(authorName: string  | undefined) {
        this['author_name'] = authorName;
    }
    public get authorName(): string | undefined {
        return this['author_name'];
    }
    public withComment(comment: string): TestItemVo {
        this['comment'] = comment;
        return this;
    }
    public withModelNumber(modelNumber: string): TestItemVo {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withIsFeature(isFeature: string): TestItemVo {
        this['is_feature'] = isFeature;
        return this;
    }
    public set isFeature(isFeature: string  | undefined) {
        this['is_feature'] = isFeature;
    }
    public get isFeature(): string | undefined {
        return this['is_feature'];
    }
    public withRelateHtsm(relateHtsm: string): TestItemVo {
        this['relate_htsm'] = relateHtsm;
        return this;
    }
    public set relateHtsm(relateHtsm: string  | undefined) {
        this['relate_htsm'] = relateHtsm;
    }
    public get relateHtsm(): string | undefined {
        return this['relate_htsm'];
    }
    public withAwUniqueId(awUniqueId: string): TestItemVo {
        this['aw_unique_id'] = awUniqueId;
        return this;
    }
    public set awUniqueId(awUniqueId: string  | undefined) {
        this['aw_unique_id'] = awUniqueId;
    }
    public get awUniqueId(): string | undefined {
        return this['aw_unique_id'];
    }
    public withTestMindId(testMindId: string): TestItemVo {
        this['test_mind_id'] = testMindId;
        return this;
    }
    public set testMindId(testMindId: string  | undefined) {
        this['test_mind_id'] = testMindId;
    }
    public get testMindId(): string | undefined {
        return this['test_mind_id'];
    }
    public withTestMindUrl(testMindUrl: string): TestItemVo {
        this['test_mind_url'] = testMindUrl;
        return this;
    }
    public set testMindUrl(testMindUrl: string  | undefined) {
        this['test_mind_url'] = testMindUrl;
    }
    public get testMindUrl(): string | undefined {
        return this['test_mind_url'];
    }
    public withProjectUuid(projectUuid: string): TestItemVo {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withCaseTotal(caseTotal: number): TestItemVo {
        this['case_total'] = caseTotal;
        return this;
    }
    public set caseTotal(caseTotal: number  | undefined) {
        this['case_total'] = caseTotal;
    }
    public get caseTotal(): number | undefined {
        return this['case_total'];
    }
    public withExecdTotal(execdTotal: number): TestItemVo {
        this['execd_total'] = execdTotal;
        return this;
    }
    public set execdTotal(execdTotal: number  | undefined) {
        this['execd_total'] = execdTotal;
    }
    public get execdTotal(): number | undefined {
        return this['execd_total'];
    }
    public withIsDirectRelation(isDirectRelation: boolean): TestItemVo {
        this['is_direct_relation'] = isDirectRelation;
        return this;
    }
    public set isDirectRelation(isDirectRelation: boolean  | undefined) {
        this['is_direct_relation'] = isDirectRelation;
    }
    public get isDirectRelation(): boolean | undefined {
        return this['is_direct_relation'];
    }
    public withHasChild(hasChild: boolean): TestItemVo {
        this['has_child'] = hasChild;
        return this;
    }
    public set hasChild(hasChild: boolean  | undefined) {
        this['has_child'] = hasChild;
    }
    public get hasChild(): boolean | undefined {
        return this['has_child'];
    }
}