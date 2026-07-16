

export class Npu {
    private 'unit_num'?: string;
    private 'product_name'?: string;
    public memory?: string;
    public constructor() { 
    }
    public withUnitNum(unitNum: string): Npu {
        this['unit_num'] = unitNum;
        return this;
    }
    public set unitNum(unitNum: string  | undefined) {
        this['unit_num'] = unitNum;
    }
    public get unitNum(): string | undefined {
        return this['unit_num'];
    }
    public withProductName(productName: string): Npu {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string  | undefined) {
        this['product_name'] = productName;
    }
    public get productName(): string | undefined {
        return this['product_name'];
    }
    public withMemory(memory: string): Npu {
        this['memory'] = memory;
        return this;
    }
}