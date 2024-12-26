

export class LivePlayingShootScriptItem {
    private 'sequence_no'?: number;
    public title?: string;
    public constructor() { 
    }
    public withSequenceNo(sequenceNo: number): LivePlayingShootScriptItem {
        this['sequence_no'] = sequenceNo;
        return this;
    }
    public set sequenceNo(sequenceNo: number  | undefined) {
        this['sequence_no'] = sequenceNo;
    }
    public get sequenceNo(): number | undefined {
        return this['sequence_no'];
    }
    public withTitle(title: string): LivePlayingShootScriptItem {
        this['title'] = title;
        return this;
    }
}