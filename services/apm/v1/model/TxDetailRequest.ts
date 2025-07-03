

export class TxDetailRequest {
    private 'tx_name'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(txName?: string, startTime?: string, endTime?: string) { 
        this['tx_name'] = txName;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withTxName(txName: string): TxDetailRequest {
        this['tx_name'] = txName;
        return this;
    }
    public set txName(txName: string  | undefined) {
        this['tx_name'] = txName;
    }
    public get txName(): string | undefined {
        return this['tx_name'];
    }
    public withStartTime(startTime: string): TxDetailRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): TxDetailRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}