

export class DeleteBackupSelectionRequestBody {
    public selection?: boolean;
    public constructor(selection?: boolean) { 
        this['selection'] = selection;
    }
    public withSelection(selection: boolean): DeleteBackupSelectionRequestBody {
        this['selection'] = selection;
        return this;
    }
}