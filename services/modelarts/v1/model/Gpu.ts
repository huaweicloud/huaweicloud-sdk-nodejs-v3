

export class Gpu {
    private 'unit_num'?: number;
    private 'product_name'?: string;
    public memory?: string;
    public constructor() { 
    }
    public withUnitNum(unitNum: number): Gpu {
        this['unit_num'] = unitNum;
        return this;
    }
    public set unitNum(unitNum: number  | undefined) {
        this['unit_num'] = unitNum;
    }
    public get unitNum(): number | undefined {
        return this['unit_num'];
    }
    public withProductName(productName: string): Gpu {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string  | undefined) {
        this['product_name'] = productName;
    }
    public get productName(): string | undefined {
        return this['product_name'];
    }
    public withMemory(memory: string): Gpu {
        this['memory'] = memory;
        return this;
    }
}