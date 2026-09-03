

export class ChangeQuotaNewRequestBody {
    private 'open_num'?: number;
    public constructor() { 
    }
    public withOpenNum(openNum: number): ChangeQuotaNewRequestBody {
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