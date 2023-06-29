

export class RestRenamePartReqBody {
    public participantID?: string;
    private 'number': string | undefined;
    public newName: string;
    public constructor(modelNumber?: any, newName?: any) { 
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
    public set modelNumber(modelNumber: string | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber() {
        return this['number'];
    }
    public withNewName(newName: string): RestRenamePartReqBody {
        this['newName'] = newName;
        return this;
    }
}