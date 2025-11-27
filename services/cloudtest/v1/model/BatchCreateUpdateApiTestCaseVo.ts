import { TestCaseInfo } from './TestCaseInfo';
import { TestCaseVo } from './TestCaseVo';


export class BatchCreateUpdateApiTestCaseVo {
    public uri?: string;
    public type?: string;
    public author?: string;
    public name?: string;
    public rank?: number;
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
    private 'success_list'?: Array<TestCaseVo>;
    private 'failed_list'?: Array<TestCaseInfo>;
    public constructor() { 
    }
    public withUri(uri: string): BatchCreateUpdateApiTestCaseVo {
        this['uri'] = uri;
        return this;
    }
    public withType(type: string): BatchCreateUpdateApiTestCaseVo {
        this['type'] = type;
        return this;
    }
    public withAuthor(author: string): BatchCreateUpdateApiTestCaseVo {
        this['author'] = author;
        return this;
    }
    public withName(name: string): BatchCreateUpdateApiTestCaseVo {
        this['name'] = name;
        return this;
    }
    public withRank(rank: number): BatchCreateUpdateApiTestCaseVo {
        this['rank'] = rank;
        return this;
    }
    public withLastModifier(lastModifier: string): BatchCreateUpdateApiTestCaseVo {
        this['last_modifier'] = lastModifier;
        return this;
    }
    public set lastModifier(lastModifier: string  | undefined) {
        this['last_modifier'] = lastModifier;
    }
    public get lastModifier(): string | undefined {
        return this['last_modifier'];
    }
    public withLastModified(lastModified: Date): BatchCreateUpdateApiTestCaseVo {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: Date  | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified(): Date | undefined {
        return this['last_modified'];
    }
    public withLastModifiedTimestamp(lastModifiedTimestamp: number): BatchCreateUpdateApiTestCaseVo {
        this['last_modified_timestamp'] = lastModifiedTimestamp;
        return this;
    }
    public set lastModifiedTimestamp(lastModifiedTimestamp: number  | undefined) {
        this['last_modified_timestamp'] = lastModifiedTimestamp;
    }
    public get lastModifiedTimestamp(): number | undefined {
        return this['last_modified_timestamp'];
    }
    public withLastChangeTime(lastChangeTime: Date): BatchCreateUpdateApiTestCaseVo {
        this['last_change_time'] = lastChangeTime;
        return this;
    }
    public set lastChangeTime(lastChangeTime: Date  | undefined) {
        this['last_change_time'] = lastChangeTime;
    }
    public get lastChangeTime(): Date | undefined {
        return this['last_change_time'];
    }
    public withVersionUri(versionUri: string): BatchCreateUpdateApiTestCaseVo {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withOriginUri(originUri: string): BatchCreateUpdateApiTestCaseVo {
        this['origin_uri'] = originUri;
        return this;
    }
    public set originUri(originUri: string  | undefined) {
        this['origin_uri'] = originUri;
    }
    public get originUri(): string | undefined {
        return this['origin_uri'];
    }
    public withParentUri(parentUri: string): BatchCreateUpdateApiTestCaseVo {
        this['parent_uri'] = parentUri;
        return this;
    }
    public set parentUri(parentUri: string  | undefined) {
        this['parent_uri'] = parentUri;
    }
    public get parentUri(): string | undefined {
        return this['parent_uri'];
    }
    public withParentPath(parentPath: string): BatchCreateUpdateApiTestCaseVo {
        this['parent_path'] = parentPath;
        return this;
    }
    public set parentPath(parentPath: string  | undefined) {
        this['parent_path'] = parentPath;
    }
    public get parentPath(): string | undefined {
        return this['parent_path'];
    }
    public withCreationVersionUri(creationVersionUri: string): BatchCreateUpdateApiTestCaseVo {
        this['creation_version_uri'] = creationVersionUri;
        return this;
    }
    public set creationVersionUri(creationVersionUri: string  | undefined) {
        this['creation_version_uri'] = creationVersionUri;
    }
    public get creationVersionUri(): string | undefined {
        return this['creation_version_uri'];
    }
    public withCreationDate(creationDate: Date): BatchCreateUpdateApiTestCaseVo {
        this['creation_date'] = creationDate;
        return this;
    }
    public set creationDate(creationDate: Date  | undefined) {
        this['creation_date'] = creationDate;
    }
    public get creationDate(): Date | undefined {
        return this['creation_date'];
    }
    public withCreationDateTimestamp(creationDateTimestamp: number): BatchCreateUpdateApiTestCaseVo {
        this['creation_date_timestamp'] = creationDateTimestamp;
        return this;
    }
    public set creationDateTimestamp(creationDateTimestamp: number  | undefined) {
        this['creation_date_timestamp'] = creationDateTimestamp;
    }
    public get creationDateTimestamp(): number | undefined {
        return this['creation_date_timestamp'];
    }
    public withAuthorName(authorName: string): BatchCreateUpdateApiTestCaseVo {
        this['author_name'] = authorName;
        return this;
    }
    public set authorName(authorName: string  | undefined) {
        this['author_name'] = authorName;
    }
    public get authorName(): string | undefined {
        return this['author_name'];
    }
    public withComment(comment: string): BatchCreateUpdateApiTestCaseVo {
        this['comment'] = comment;
        return this;
    }
    public withModelNumber(modelNumber: string): BatchCreateUpdateApiTestCaseVo {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withSuccessList(successList: Array<TestCaseVo>): BatchCreateUpdateApiTestCaseVo {
        this['success_list'] = successList;
        return this;
    }
    public set successList(successList: Array<TestCaseVo>  | undefined) {
        this['success_list'] = successList;
    }
    public get successList(): Array<TestCaseVo> | undefined {
        return this['success_list'];
    }
    public withFailedList(failedList: Array<TestCaseInfo>): BatchCreateUpdateApiTestCaseVo {
        this['failed_list'] = failedList;
        return this;
    }
    public set failedList(failedList: Array<TestCaseInfo>  | undefined) {
        this['failed_list'] = failedList;
    }
    public get failedList(): Array<TestCaseInfo> | undefined {
        return this['failed_list'];
    }
}