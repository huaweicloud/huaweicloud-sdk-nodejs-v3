

export class Iops {
    public frozened: boolean;
    public id: string;
    private 'total_val': number | undefined;
    public constructor(frozened?: any, id?: any, totalVal?: any) { 
        this['frozened'] = frozened;
        this['id'] = id;
        this['total_val'] = totalVal;
    }
    public withFrozened(frozened: boolean): Iops {
        this['frozened'] = frozened;
        return this;
    }
    public withId(id: string): Iops {
        this['id'] = id;
        return this;
    }
    public withTotalVal(totalVal: number): Iops {
        this['total_val'] = totalVal;
        return this;
    }
    public set totalVal(totalVal: number | undefined) {
        this['total_val'] = totalVal;
    }
    public get totalVal() {
        return this['total_val'];
    }
}