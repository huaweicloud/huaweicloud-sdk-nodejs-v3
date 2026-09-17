

export class DeleteIssueNoteResultResult {
    public status?: string;
    public constructor() { 
    }
    public withStatus(status: string): DeleteIssueNoteResultResult {
        this['status'] = status;
        return this;
    }
}