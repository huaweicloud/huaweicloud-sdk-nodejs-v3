

export class OrderV5 {
    private 'order_id'?: string;
    private 'order_status'?: number;
    public result?: string;
    private 'result_code'?: string;
    private 'result_msg'?: string;
    public constructor() { 
    }
    public withOrderId(orderId: string): OrderV5 {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withOrderStatus(orderStatus: number): OrderV5 {
        this['order_status'] = orderStatus;
        return this;
    }
    public set orderStatus(orderStatus: number  | undefined) {
        this['order_status'] = orderStatus;
    }
    public get orderStatus(): number | undefined {
        return this['order_status'];
    }
    public withResult(result: string): OrderV5 {
        this['result'] = result;
        return this;
    }
    public withResultCode(resultCode: string): OrderV5 {
        this['result_code'] = resultCode;
        return this;
    }
    public set resultCode(resultCode: string  | undefined) {
        this['result_code'] = resultCode;
    }
    public get resultCode(): string | undefined {
        return this['result_code'];
    }
    public withResultMsg(resultMsg: string): OrderV5 {
        this['result_msg'] = resultMsg;
        return this;
    }
    public set resultMsg(resultMsg: string  | undefined) {
        this['result_msg'] = resultMsg;
    }
    public get resultMsg(): string | undefined {
        return this['result_msg'];
    }
}