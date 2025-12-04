

export class ListLogContextRequestBody {
    private 'line_num'?: string;
    private '__time__'?: string;
    private 'backwards_size'?: number;
    private 'forwards_size'?: number;
    private 'scroll_id'?: string;
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
        this['backwards_size'] = backwardsSize;
        return this;
    }
    public set backwardsSize(backwardsSize: number  | undefined) {
        this['backwards_size'] = backwardsSize;
    }
    public get backwardsSize(): number | undefined {
        return this['backwards_size'];
    }
    public withForwardsSize(forwardsSize: number): ListLogContextRequestBody {
        this['forwards_size'] = forwardsSize;
        return this;
    }
    public set forwardsSize(forwardsSize: number  | undefined) {
        this['forwards_size'] = forwardsSize;
    }
    public get forwardsSize(): number | undefined {
        return this['forwards_size'];
    }
    public withScrollId(scrollId: string): ListLogContextRequestBody {
        this['scroll_id'] = scrollId;
        return this;
    }
    public set scrollId(scrollId: string  | undefined) {
        this['scroll_id'] = scrollId;
    }
    public get scrollId(): string | undefined {
        return this['scroll_id'];
    }
}