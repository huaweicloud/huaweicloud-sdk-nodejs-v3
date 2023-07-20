

export class RestRenamePartReqBody {
    public participantID?: string;
    private 'number'?: string;
    public newName?: string;
    public constructor(modelNumber?: string, newName?: string) { 
        this['number'] = modelNumber;
        this['newName'] = newName;
    }
    public withParticipantID(participantID: string): RestRenamePartReqBody {
        this['participantID'] = participantID;
        return this;
    }
    public withModelNumber(modelNumber: string): RestRenamePartReqBody {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withNewName(newName: string): RestRenamePartReqBody {
        this['newName'] = newName;
        return this;
    }
}