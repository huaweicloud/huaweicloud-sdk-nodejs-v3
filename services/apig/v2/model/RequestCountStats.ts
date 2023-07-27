

export class RequestCountStats {
    private 'req_count'?: number;
    private 'req_count2xx'?: number;
    private 'req_count4xx'?: number;
    private 'req_count5xx'?: number;
    private 'req_count_error'?: number;
    public constructor() { 
    }
    public withReqCount(reqCount: number): RequestCountStats {
        this['req_count'] = reqCount;
        return this;
    }
    public set reqCount(reqCount: number  | undefined) {
        this['req_count'] = reqCount;
    }
    public get reqCount(): number | undefined {
        return this['req_count'];
    }
    public withReqCount2xx(reqCount2xx: number): RequestCountStats {
        this['req_count2xx'] = reqCount2xx;
        return this;
    }
    public set reqCount2xx(reqCount2xx: number  | undefined) {
        this['req_count2xx'] = reqCount2xx;
    }
    public get reqCount2xx(): number | undefined {
        return this['req_count2xx'];
    }
    public withReqCount4xx(reqCount4xx: number): RequestCountStats {
        this['req_count4xx'] = reqCount4xx;
        return this;
    }
    public set reqCount4xx(reqCount4xx: number  | undefined) {
        this['req_count4xx'] = reqCount4xx;
    }
    public get reqCount4xx(): number | undefined {
        return this['req_count4xx'];
    }
    public withReqCount5xx(reqCount5xx: number): RequestCountStats {
        this['req_count5xx'] = reqCount5xx;
        return this;
    }
    public set reqCount5xx(reqCount5xx: number  | undefined) {
        this['req_count5xx'] = reqCount5xx;
    }
    public get reqCount5xx(): number | undefined {
        return this['req_count5xx'];
    }
    public withReqCountError(reqCountError: number): RequestCountStats {
        this['req_count_error'] = reqCountError;
        return this;
    }
    public set reqCountError(reqCountError: number  | undefined) {
        this['req_count_error'] = reqCountError;
    }
    public get reqCountError(): number | undefined {
        return this['req_count_error'];
    }
}