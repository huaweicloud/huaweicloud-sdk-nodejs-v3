

export class SpeicialConfiguration {
    private 'create_time'?: number;
    public note?: string;
    public constructor(createTime?: number, note?: string) { 
        this['create_time'] = createTime;
        this['note'] = note;
    }
    public withCreateTime(createTime: number): SpeicialConfiguration {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withNote(note: string): SpeicialConfiguration {
        this['note'] = note;
        return this;
    }
}