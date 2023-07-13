

export class MaintainWindowsEntity {
    private 'default'?: boolean | undefined;
    public end?: string;
    public begin?: string;
    public seq?: number;
    public constructor() { 
    }
    public withDefault(_default: boolean): MaintainWindowsEntity {
        this['default'] = _default;
        return this;
    }
    public set _default(_default: boolean | undefined) {
        this['default'] = _default;
    }
    public get _default() {
        return this['default'];
    }
    public withEnd(end: string): MaintainWindowsEntity {
        this['end'] = end;
        return this;
    }
    public withBegin(begin: string): MaintainWindowsEntity {
        this['begin'] = begin;
        return this;
    }
    public withSeq(seq: number): MaintainWindowsEntity {
        this['seq'] = seq;
        return this;
    }
}