

export class BillbingCreateExtraInfo {
    private 'combined_order_id'?: string | undefined;
    private 'combined_order_ecs_num'?: number | undefined;
    public constructor() { 
    }
    public withCombinedOrderId(combinedOrderId: string): BillbingCreateExtraInfo {
        this['combined_order_id'] = combinedOrderId;
        return this;
    }
    public set combinedOrderId(combinedOrderId: string | undefined) {
        this['combined_order_id'] = combinedOrderId;
    }
    public get combinedOrderId() {
        return this['combined_order_id'];
    }
    public withCombinedOrderEcsNum(combinedOrderEcsNum: number): BillbingCreateExtraInfo {
        this['combined_order_ecs_num'] = combinedOrderEcsNum;
        return this;
    }
    public set combinedOrderEcsNum(combinedOrderEcsNum: number | undefined) {
        this['combined_order_ecs_num'] = combinedOrderEcsNum;
    }
    public get combinedOrderEcsNum() {
        return this['combined_order_ecs_num'];
    }
}