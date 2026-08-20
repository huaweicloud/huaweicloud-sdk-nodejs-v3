

export class IssueAssociateVO {
    private 'associated_ids'?: string;
    private 'operation_flag'?: number;
    private 'associate_issue_type'?: string;
    private 'source_issue_type'?: string;
    private 'is_replace'?: boolean;
    private 'link_field_code'?: string;
    public constructor(associatedIds?: string, operationFlag?: number, associateIssueType?: string, sourceIssueType?: string) { 
        this['associated_ids'] = associatedIds;
        this['operation_flag'] = operationFlag;
        this['associate_issue_type'] = associateIssueType;
        this['source_issue_type'] = sourceIssueType;
    }
    public withAssociatedIds(associatedIds: string): IssueAssociateVO {
        this['associated_ids'] = associatedIds;
        return this;
    }
    public set associatedIds(associatedIds: string  | undefined) {
        this['associated_ids'] = associatedIds;
    }
    public get associatedIds(): string | undefined {
        return this['associated_ids'];
    }
    public withOperationFlag(operationFlag: number): IssueAssociateVO {
        this['operation_flag'] = operationFlag;
        return this;
    }
    public set operationFlag(operationFlag: number  | undefined) {
        this['operation_flag'] = operationFlag;
    }
    public get operationFlag(): number | undefined {
        return this['operation_flag'];
    }
    public withAssociateIssueType(associateIssueType: string): IssueAssociateVO {
        this['associate_issue_type'] = associateIssueType;
        return this;
    }
    public set associateIssueType(associateIssueType: string  | undefined) {
        this['associate_issue_type'] = associateIssueType;
    }
    public get associateIssueType(): string | undefined {
        return this['associate_issue_type'];
    }
    public withSourceIssueType(sourceIssueType: string): IssueAssociateVO {
        this['source_issue_type'] = sourceIssueType;
        return this;
    }
    public set sourceIssueType(sourceIssueType: string  | undefined) {
        this['source_issue_type'] = sourceIssueType;
    }
    public get sourceIssueType(): string | undefined {
        return this['source_issue_type'];
    }
    public withIsReplace(isReplace: boolean): IssueAssociateVO {
        this['is_replace'] = isReplace;
        return this;
    }
    public set isReplace(isReplace: boolean  | undefined) {
        this['is_replace'] = isReplace;
    }
    public get isReplace(): boolean | undefined {
        return this['is_replace'];
    }
    public withLinkFieldCode(linkFieldCode: string): IssueAssociateVO {
        this['link_field_code'] = linkFieldCode;
        return this;
    }
    public set linkFieldCode(linkFieldCode: string  | undefined) {
        this['link_field_code'] = linkFieldCode;
    }
    public get linkFieldCode(): string | undefined {
        return this['link_field_code'];
    }
}