

export class EnableQuotaRequestBody {
    private 'open_num'?: number;
    public constructor(openNum?: number) { 
        this['open_num'] = openNum;
    }
    public withOpenNum(openNum: number): EnableQuotaRequestBody {
        this['open_num'] = openNum;
        return this;
    }
    public set openNum(openNum: number  | undefined) {
        this['open_num'] = openNum;
    }
    public get openNum(): number | undefined {
        return this['open_num'];
    }
}