

export class CheckNoNewAccessReason {
    public description?: string;
    private 'statement_id'?: string;
    private 'statement_index'?: number;
    public constructor() { 
    }
    public withDescription(description: string): CheckNoNewAccessReason {
        this['description'] = description;
        return this;
    }
    public withStatementId(statementId: string): CheckNoNewAccessReason {
        this['statement_id'] = statementId;
        return this;
    }
    public set statementId(statementId: string  | undefined) {
        this['statement_id'] = statementId;
    }
    public get statementId(): string | undefined {
        return this['statement_id'];
    }
    public withStatementIndex(statementIndex: number): CheckNoNewAccessReason {
        this['statement_index'] = statementIndex;
        return this;
    }
    public set statementIndex(statementIndex: number  | undefined) {
        this['statement_index'] = statementIndex;
    }
    public get statementIndex(): number | undefined {
        return this['statement_index'];
    }
}