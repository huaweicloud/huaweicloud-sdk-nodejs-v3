

export class SetKeepTimeResult {
    private 'keep_time'?: number;
    public constructor() { 
    }
    public withKeepTime(keepTime: number): SetKeepTimeResult {
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