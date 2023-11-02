

export class TermAssignmentHeader {
    public confidence?: number;
    public steward?: string;
    public source?: string;
    public status?: string;
    private 'create_user'?: string;
    public expression?: string;
    private 'display_text'?: string;
    private 'term_guid'?: string;
    private 'relation_guid'?: string;
    public constructor() { 
    }
    public withConfidence(confidence: number): TermAssignmentHeader {
        this['confidence'] = confidence;
        return this;
    }
    public withSteward(steward: string): TermAssignmentHeader {
        this['steward'] = steward;
        return this;
    }
    public withSource(source: string): TermAssignmentHeader {
        this['source'] = source;
        return this;
    }
    public withStatus(status: string): TermAssignmentHeader {
        this['status'] = status;
        return this;
    }
    public withCreateUser(createUser: string): TermAssignmentHeader {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withExpression(expression: string): TermAssignmentHeader {
        this['expression'] = expression;
        return this;
    }
    public withDisplayText(displayText: string): TermAssignmentHeader {
        this['display_text'] = displayText;
        return this;
    }
    public set displayText(displayText: string  | undefined) {
        this['display_text'] = displayText;
    }
    public get displayText(): string | undefined {
        return this['display_text'];
    }
    public withTermGuid(termGuid: string): TermAssignmentHeader {
        this['term_guid'] = termGuid;
        return this;
    }
    public set termGuid(termGuid: string  | undefined) {
        this['term_guid'] = termGuid;
    }
    public get termGuid(): string | undefined {
        return this['term_guid'];
    }
    public withRelationGuid(relationGuid: string): TermAssignmentHeader {
        this['relation_guid'] = relationGuid;
        return this;
    }
    public set relationGuid(relationGuid: string  | undefined) {
        this['relation_guid'] = relationGuid;
    }
    public get relationGuid(): string | undefined {
        return this['relation_guid'];
    }
}