

export class UnsubscribeVolume {
    private 'volume_id'?: string;
    private 'order_id'?: string;
    public result?: string;
    private 'fail_reason'?: string;
    public constructor(volumeId?: string, result?: string) { 
        this['volume_id'] = volumeId;
        this['result'] = result;
    }
    public withVolumeId(volumeId: string): UnsubscribeVolume {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string  | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId(): string | undefined {
        return this['volume_id'];
    }
    public withOrderId(orderId: string): UnsubscribeVolume {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withResult(result: string): UnsubscribeVolume {
        this['result'] = result;
        return this;
    }
    public withFailReason(failReason: string): UnsubscribeVolume {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
}