

export class UpdateNoteResponseResult {
    public status?: string;
    public constructor() { 
    }
    public withStatus(status: string): UpdateNoteResponseResult {
        this['status'] = status;
        return this;
    }
}