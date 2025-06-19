

export class SetKeepTimeRequestBody {
    private 'keep_time'?: number;
    public constructor(keepTime?: number) { 
        this['keep_time'] = keepTime;
    }
    public withKeepTime(keepTime: number): SetKeepTimeRequestBody {
        this['keep_time'] = keepTime;
        return this;
    }
    public set keepTime(keepTime: number  | undefined) {
        this['keep_time'] = keepTime;
    }
    public get keepTime(): number | undefined {
        return this['keep_time'];
    }
}