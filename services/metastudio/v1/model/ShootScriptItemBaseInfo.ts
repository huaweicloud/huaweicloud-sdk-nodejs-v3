

export class ShootScriptItemBaseInfo {
    private 'sequence_no'?: number;
    public constructor() { 
    }
    public withSequenceNo(sequenceNo: number): ShootScriptItemBaseInfo {
        this['sequence_no'] = sequenceNo;
        return this;
    }
    public set sequenceNo(sequenceNo: number  | undefined) {
        this['sequence_no'] = sequenceNo;
    }
    public get sequenceNo(): number | undefined {
        return this['sequence_no'];
    }
}