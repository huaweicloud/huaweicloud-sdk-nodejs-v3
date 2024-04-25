

export class FgacSingleUpdateReq {
    private 'dw_id'?: string;
    private 'fgac_flag'?: boolean;
    private 'fgac_type'?: string;
    public constructor() { 
    }
    public withDwId(dwId: string): FgacSingleUpdateReq {
        this['dw_id'] = dwId;
        return this;
    }
    public set dwId(dwId: string  | undefined) {
        this['dw_id'] = dwId;
    }
    public get dwId(): string | undefined {
        return this['dw_id'];
    }
    public withFgacFlag(fgacFlag: boolean): FgacSingleUpdateReq {
        this['fgac_flag'] = fgacFlag;
        return this;
    }
    public set fgacFlag(fgacFlag: boolean  | undefined) {
        this['fgac_flag'] = fgacFlag;
    }
    public get fgacFlag(): boolean | undefined {
        return this['fgac_flag'];
    }
    public withFgacType(fgacType: string): FgacSingleUpdateReq {
        this['fgac_type'] = fgacType;
        return this;
    }
    public set fgacType(fgacType: string  | undefined) {
        this['fgac_type'] = fgacType;
    }
    public get fgacType(): string | undefined {
        return this['fgac_type'];
    }
}