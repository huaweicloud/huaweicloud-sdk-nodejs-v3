

export class ListLogContextRequestBody {
    private 'line_num'?: string;
    private '__time__'?: string;
    public backwardsSize?: number;
    public forwardsSize?: number;
    public constructor() { 
    }
    public withLineNum(lineNum: string): ListLogContextRequestBody {
        this['line_num'] = lineNum;
        return this;
    }
    public set lineNum(lineNum: string  | undefined) {
        this['line_num'] = lineNum;
    }
    public get lineNum(): string | undefined {
        return this['line_num'];
    }
    public withTime(time: string): ListLogContextRequestBody {
        this['__time__'] = time;
        return this;
    }
    public set time(time: string  | undefined) {
        this['__time__'] = time;
    }
    public get time(): string | undefined {
        return this['__time__'];
    }
    public withBackwardsSize(backwardsSize: number): ListLogContextRequestBody {
        this['backwardsSize'] = backwardsSize;
        return this;
    }
    public withForwardsSize(forwardsSize: number): ListLogContextRequestBody {
        this['forwardsSize'] = forwardsSize;
        return this;
    }
}