

export class ResolvedRecordDTO {
    private 'resolved_time'?: number;
    private 'create_name'?: string;
    public remarks?: string;
    public constructor() { 
    }
    public withResolvedTime(resolvedTime: number): ResolvedRecordDTO {
        this['resolved_time'] = resolvedTime;
        return this;
    }
    public set resolvedTime(resolvedTime: number  | undefined) {
        this['resolved_time'] = resolvedTime;
    }
    public get resolvedTime(): number | undefined {
        return this['resolved_time'];
    }
    public withCreateName(createName: string): ResolvedRecordDTO {
        this['create_name'] = createName;
        return this;
    }
    public set createName(createName: string  | undefined) {
        this['create_name'] = createName;
    }
    public get createName(): string | undefined {
        return this['create_name'];
    }
    public withRemarks(remarks: string): ResolvedRecordDTO {
        this['remarks'] = remarks;
        return this;
    }
}