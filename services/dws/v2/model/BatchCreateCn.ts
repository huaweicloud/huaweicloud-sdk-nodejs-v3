

export class BatchCreateCn {
    public num?: number;
    public constructor(num?: number) { 
        this['num'] = num;
    }
    public withNum(num: number): BatchCreateCn {
        this['num'] = num;
        return this;
    }
}