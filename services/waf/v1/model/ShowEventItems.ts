

export class ShowEventItems {
    public time?: number;
    public policyid?: string;
    public sip?: string;
    public host?: string;
    public url?: string;
    public attack?: string;
    public rule?: string;
    public action?: string;
    public cookie?: string;
    public headers?: object;
    private 'host_id'?: string;
    public id?: string;
    public payload?: string;
    private 'payload_location'?: string;
    public region?: string;
    private 'process_time'?: number;
    private 'request_line'?: string;
    private 'response_size'?: number;
    private 'response_time'?: number;
    public status?: string;
    private 'request_body'?: string;
    public constructor() { 
    }
    public withTime(time: number): ShowEventItems {
        this['time'] = time;
        return this;
    }
    public withPolicyid(policyid: string): ShowEventItems {
        this['policyid'] = policyid;
        return this;
    }
    public withSip(sip: string): ShowEventItems {
        this['sip'] = sip;
        return this;
    }
    public withHost(host: string): ShowEventItems {
        this['host'] = host;
        return this;
    }
    public withUrl(url: string): ShowEventItems {
        this['url'] = url;
        return this;
    }
    public withAttack(attack: string): ShowEventItems {
        this['attack'] = attack;
        return this;
    }
    public withRule(rule: string): ShowEventItems {
        this['rule'] = rule;
        return this;
    }
    public withAction(action: string): ShowEventItems {
        this['action'] = action;
        return this;
    }
    public withCookie(cookie: string): ShowEventItems {
        this['cookie'] = cookie;
        return this;
    }
    public withHeaders(headers: object): ShowEventItems {
        this['headers'] = headers;
        return this;
    }
    public withHostId(hostId: string): ShowEventItems {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withId(id: string): ShowEventItems {
        this['id'] = id;
        return this;
    }
    public withPayload(payload: string): ShowEventItems {
        this['payload'] = payload;
        return this;
    }
    public withPayloadLocation(payloadLocation: string): ShowEventItems {
        this['payload_location'] = payloadLocation;
        return this;
    }
    public set payloadLocation(payloadLocation: string  | undefined) {
        this['payload_location'] = payloadLocation;
    }
    public get payloadLocation(): string | undefined {
        return this['payload_location'];
    }
    public withRegion(region: string): ShowEventItems {
        this['region'] = region;
        return this;
    }
    public withProcessTime(processTime: number): ShowEventItems {
        this['process_time'] = processTime;
        return this;
    }
    public set processTime(processTime: number  | undefined) {
        this['process_time'] = processTime;
    }
    public get processTime(): number | undefined {
        return this['process_time'];
    }
    public withRequestLine(requestLine: string): ShowEventItems {
        this['request_line'] = requestLine;
        return this;
    }
    public set requestLine(requestLine: string  | undefined) {
        this['request_line'] = requestLine;
    }
    public get requestLine(): string | undefined {
        return this['request_line'];
    }
    public withResponseSize(responseSize: number): ShowEventItems {
        this['response_size'] = responseSize;
        return this;
    }
    public set responseSize(responseSize: number  | undefined) {
        this['response_size'] = responseSize;
    }
    public get responseSize(): number | undefined {
        return this['response_size'];
    }
    public withResponseTime(responseTime: number): ShowEventItems {
        this['response_time'] = responseTime;
        return this;
    }
    public set responseTime(responseTime: number  | undefined) {
        this['response_time'] = responseTime;
    }
    public get responseTime(): number | undefined {
        return this['response_time'];
    }
    public withStatus(status: string): ShowEventItems {
        this['status'] = status;
        return this;
    }
    public withRequestBody(requestBody: string): ShowEventItems {
        this['request_body'] = requestBody;
        return this;
    }
    public set requestBody(requestBody: string  | undefined) {
        this['request_body'] = requestBody;
    }
    public get requestBody(): string | undefined {
        return this['request_body'];
    }
}