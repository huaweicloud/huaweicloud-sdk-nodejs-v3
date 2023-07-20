

export class Throughput {
    public frozened?: boolean;
    public id?: string;
    private 'total_val'?: number;
    public constructor(frozened?: boolean, id?: string, totalVal?: number) { 
        this['frozened'] = frozened;
        this['id'] = id;
        this['total_val'] = totalVal;
    }
    public withFrozened(frozened: boolean): Throughput {
        this['frozened'] = frozened;
        return this;
    }
    public withId(id: string): Throughput {
        this['id'] = id;
        return this;
    }
    public withTotalVal(totalVal: number): Throughput {
        this['total_val'] = totalVal;
        return this;
    }
    public set totalVal(totalVal: number  | undefined) {
        this['total_val'] = totalVal;
    }
    public get totalVal(): number | undefined {
        return this['total_val'];
    }
}