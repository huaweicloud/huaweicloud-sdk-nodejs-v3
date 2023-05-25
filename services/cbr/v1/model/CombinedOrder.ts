

export class CombinedOrder {
    private 'combined_order_id'?: string | undefined;
    private 'combined_order_ecs_num'?: number | undefined;
    private 'combined_order_num'?: number | undefined;
    public constructor() { 
    }
    public withCombinedOrderId(combinedOrderId: string): CombinedOrder {
        this['combined_order_id'] = combinedOrderId;
        return this;
    }
    public set combinedOrderId(combinedOrderId: string | undefined) {
        this['combined_order_id'] = combinedOrderId;
    }
    public get combinedOrderId() {
        return this['combined_order_id'];
    }
    public withCombinedOrderEcsNum(combinedOrderEcsNum: number): CombinedOrder {
        this['combined_order_ecs_num'] = combinedOrderEcsNum;
        return this;
    }
    public set combinedOrderEcsNum(combinedOrderEcsNum: number | undefined) {
        this['combined_order_ecs_num'] = combinedOrderEcsNum;
    }
    public get combinedOrderEcsNum() {
        return this['combined_order_ecs_num'];
    }
    public withCombinedOrderNum(combinedOrderNum: number): CombinedOrder {
        this['combined_order_num'] = combinedOrderNum;
        return this;
    }
    public set combinedOrderNum(combinedOrderNum: number | undefined) {
        this['combined_order_num'] = combinedOrderNum;
    }
    public get combinedOrderNum() {
        return this['combined_order_num'];
    }
}