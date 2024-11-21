

export class CreateSubtitleFileReq {
    private 'script_id'?: string;
    private 'sequence_no'?: number;
    public constructor() { 
    }
    public withScriptId(scriptId: string): CreateSubtitleFileReq {
        this['script_id'] = scriptId;
        return this;
    }
    public set scriptId(scriptId: string  | undefined) {
        this['script_id'] = scriptId;
    }
    public get scriptId(): string | undefined {
        return this['script_id'];
    }
    public withSequenceNo(sequenceNo: number): CreateSubtitleFileReq {
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