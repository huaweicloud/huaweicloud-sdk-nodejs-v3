

export class IssuesRelationTestCaseVo {
    public uri?: string;
    private 'number'?: string;
    public name?: string;
    private 'dr_relation_id'?: string;
    private 'status_code'?: string;
    private 'status_name'?: string;
    public author?: string;
    private 'author_id'?: string;
    public owner?: string;
    private 'project_uuid'?: string;
    private 'creation_date'?: string;
    public constructor() { 
    }
    public withUri(uri: string): IssuesRelationTestCaseVo {
        this['uri'] = uri;
        return this;
    }
    public withModelNumber(modelNumber: string): IssuesRelationTestCaseVo {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withName(name: string): IssuesRelationTestCaseVo {
        this['name'] = name;
        return this;
    }
    public withDrRelationId(drRelationId: string): IssuesRelationTestCaseVo {
        this['dr_relation_id'] = drRelationId;
        return this;
    }
    public set drRelationId(drRelationId: string  | undefined) {
        this['dr_relation_id'] = drRelationId;
    }
    public get drRelationId(): string | undefined {
        return this['dr_relation_id'];
    }
    public withStatusCode(statusCode: string): IssuesRelationTestCaseVo {
        this['status_code'] = statusCode;
        return this;
    }
    public set statusCode(statusCode: string  | undefined) {
        this['status_code'] = statusCode;
    }
    public get statusCode(): string | undefined {
        return this['status_code'];
    }
    public withStatusName(statusName: string): IssuesRelationTestCaseVo {
        this['status_name'] = statusName;
        return this;
    }
    public set statusName(statusName: string  | undefined) {
        this['status_name'] = statusName;
    }
    public get statusName(): string | undefined {
        return this['status_name'];
    }
    public withAuthor(author: string): IssuesRelationTestCaseVo {
        this['author'] = author;
        return this;
    }
    public withAuthorId(authorId: string): IssuesRelationTestCaseVo {
        this['author_id'] = authorId;
        return this;
    }
    public set authorId(authorId: string  | undefined) {
        this['author_id'] = authorId;
    }
    public get authorId(): string | undefined {
        return this['author_id'];
    }
    public withOwner(owner: string): IssuesRelationTestCaseVo {
        this['owner'] = owner;
        return this;
    }
    public withProjectUuid(projectUuid: string): IssuesRelationTestCaseVo {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withCreationDate(creationDate: string): IssuesRelationTestCaseVo {
        this['creation_date'] = creationDate;
        return this;
    }
    public set creationDate(creationDate: string  | undefined) {
        this['creation_date'] = creationDate;
    }
    public get creationDate(): string | undefined {
        return this['creation_date'];
    }
}