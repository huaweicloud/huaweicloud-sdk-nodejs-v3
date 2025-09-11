

export class TrafficInfo {
    public id?: string;
    public rxmegabytes?: number;
    public time?: string;
    public txmegabytes?: number;
    public constructor() { 
    }
    public withId(id: string): TrafficInfo {
        this['id'] = id;
        return this;
    }
    public withRxmegabytes(rxmegabytes: number): TrafficInfo {
        this['rxmegabytes'] = rxmegabytes;
        return this;
    }
    public withTime(time: string): TrafficInfo {
        this['time'] = time;
        return this;
    }
    public withTxmegabytes(txmegabytes: number): TrafficInfo {
        this['txmegabytes'] = txmegabytes;
        return this;
    }
}