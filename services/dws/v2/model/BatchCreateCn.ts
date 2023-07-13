

export class BatchCreateCn {
    public num: number;
    public constructor(num?: any) { 
        this['num'] = num;
    }
    public withNum(num: number): BatchCreateCn {
        this['num'] = num;
        return this;
    }
}