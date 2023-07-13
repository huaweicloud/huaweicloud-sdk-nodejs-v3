

export class DelAttendInfo {
    private 'number': string | undefined;
    public participantID?: string;
    public constructor(modelNumber?: any) { 
        this['number'] = modelNumber;
    }
    public withModelNumber(modelNumber: string): DelAttendInfo {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber() {
        return this['number'];
    }
    public withParticipantID(participantID: string): DelAttendInfo {
        this['participantID'] = participantID;
        return this;
    }
}