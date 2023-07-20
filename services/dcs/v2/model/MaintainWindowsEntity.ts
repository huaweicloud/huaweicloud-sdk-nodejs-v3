

export class MaintainWindowsEntity {
    public seq?: number;
    private 'default'?: boolean;
    public begin?: string;
    public end?: string;
    public constructor() { 
    }
    public withSeq(seq: number): MaintainWindowsEntity {
        this['seq'] = seq;
        return this;
    }
    public withDefault(_default: boolean): MaintainWindowsEntity {
        this['default'] = _default;
        return this;
    }
    public set _default(_default: boolean  | undefined) {
        this['default'] = _default;
    }
    public get _default(): boolean | undefined {
        return this['default'];
    }
    public withBegin(begin: string): MaintainWindowsEntity {
        this['begin'] = begin;
        return this;
    }
    public withEnd(end: string): MaintainWindowsEntity {
        this['end'] = end;
        return this;
    }
}