

export class TrendPoint {
    public timestamp?: number;
    public size?: number;
    public qps?: number;
    private 'traffic_in'?: number;
    private 'traffic_out'?: number;
    public constructor() { 
    }
    public withTimestamp(timestamp: number): TrendPoint {
        this['timestamp'] = timestamp;
        return this;
    }
    public withSize(size: number): TrendPoint {
        this['size'] = size;
        return this;
    }
    public withQps(qps: number): TrendPoint {
        this['qps'] = qps;
        return this;
    }
    public withTrafficIn(trafficIn: number): TrendPoint {
        this['traffic_in'] = trafficIn;
        return this;
    }
    public set trafficIn(trafficIn: number  | undefined) {
        this['traffic_in'] = trafficIn;
    }
    public get trafficIn(): number | undefined {
        return this['traffic_in'];
    }
    public withTrafficOut(trafficOut: number): TrendPoint {
        this['traffic_out'] = trafficOut;
        return this;
    }
    public set trafficOut(trafficOut: number  | undefined) {
        this['traffic_out'] = trafficOut;
    }
    public get trafficOut(): number | undefined {
        return this['traffic_out'];
    }
}