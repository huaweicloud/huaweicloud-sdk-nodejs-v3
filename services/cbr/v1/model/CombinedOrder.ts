

export class CombinedOrder {
    private 'combined_order_id'?: string;
    private 'combined_order_ecs_num'?: number;
    private 'combined_order_num'?: number;
    public constructor() { 
    }
    public withCombinedOrderId(combinedOrderId: string): CombinedOrder {
        this['combined_order_id'] = combinedOrderId;
        return this;
    }
    public set combinedOrderId(combinedOrderId: string  | undefined) {
        this['combined_order_id'] = combinedOrderId;
    }
    public get combinedOrderId(): string | undefined {
        return this['combined_order_id'];
    }
    public withCombinedOrderEcsNum(combinedOrderEcsNum: number): CombinedOrder {
        this['combined_order_ecs_num'] = combinedOrderEcsNum;
        return this;
    }
    public set combinedOrderEcsNum(combinedOrderEcsNum: number  | undefined) {
        this['combined_order_ecs_num'] = combinedOrderEcsNum;
    }
    public get combinedOrderEcsNum(): number | undefined {
        return this['combined_order_ecs_num'];
    }
    public withCombinedOrderNum(combinedOrderNum: number): CombinedOrder {
        this['combined_order_num'] = combinedOrderNum;
        return this;
    }
    public set combinedOrderNum(combinedOrderNum: number  | undefined) {
        this['combined_order_num'] = combinedOrderNum;
    }
    public get combinedOrderNum(): number | undefined {
        return this['combined_order_num'];
    }
}