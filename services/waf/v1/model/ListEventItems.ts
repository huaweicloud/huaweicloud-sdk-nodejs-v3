

export class ListEventItems {
    public id?: string;
    public time?: number;
    public policyid?: string;
    public sip?: string;
    public host?: string;
    public url?: string;
    public attack?: string;
    public rule?: string;
    public payload?: string;
    private 'payload_location'?: string | undefined;
    public action?: string;
    private 'request_line'?: string | undefined;
    public headers?: object;
    public cookie?: string;
    public status?: string;
    private 'process_time'?: number | undefined;
    public region?: string;
    private 'host_id'?: string | undefined;
    private 'response_time'?: number | undefined;
    private 'response_size'?: number | undefined;
    private 'response_body'?: string | undefined;
    private 'request_body'?: string | undefined;
    public constructor() { 
    }
    public withId(id: string): ListEventItems {
        this['id'] = id;
        return this;
    }
    public withTime(time: number): ListEventItems {
        this['time'] = time;
        return this;
    }
    public withPolicyid(policyid: string): ListEventItems {
        this['policyid'] = policyid;
        return this;
    }
    public withSip(sip: string): ListEventItems {
        this['sip'] = sip;
        return this;
    }
    public withHost(host: string): ListEventItems {
        this['host'] = host;
        return this;
    }
    public withUrl(url: string): ListEventItems {
        this['url'] = url;
        return this;
    }
    public withAttack(attack: string): ListEventItems {
        this['attack'] = attack;
        return this;
    }
    public withRule(rule: string): ListEventItems {
        this['rule'] = rule;
        return this;
    }
    public withPayload(payload: string): ListEventItems {
        this['payload'] = payload;
        return this;
    }
    public withPayloadLocation(payloadLocation: string): ListEventItems {
        this['payload_location'] = payloadLocation;
        return this;
    }
    public set payloadLocation(payloadLocation: string | undefined) {
        this['payload_location'] = payloadLocation;
    }
    public get payloadLocation() {
        return this['payload_location'];
    }
    public withAction(action: string): ListEventItems {
        this['action'] = action;
        return this;
    }
    public withRequestLine(requestLine: string): ListEventItems {
        this['request_line'] = requestLine;
        return this;
    }
    public set requestLine(requestLine: string | undefined) {
        this['request_line'] = requestLine;
    }
    public get requestLine() {
        return this['request_line'];
    }
    public withHeaders(headers: object): ListEventItems {
        this['headers'] = headers;
        return this;
    }
    public withCookie(cookie: string): ListEventItems {
        this['cookie'] = cookie;
        return this;
    }
    public withStatus(status: string): ListEventItems {
        this['status'] = status;
        return this;
    }
    public withProcessTime(processTime: number): ListEventItems {
        this['process_time'] = processTime;
        return this;
    }
    public set processTime(processTime: number | undefined) {
        this['process_time'] = processTime;
    }
    public get processTime() {
        return this['process_time'];
    }
    public withRegion(region: string): ListEventItems {
        this['region'] = region;
        return this;
    }
    public withHostId(hostId: string): ListEventItems {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId() {
        return this['host_id'];
    }
    public withResponseTime(responseTime: number): ListEventItems {
        this['response_time'] = responseTime;
        return this;
    }
    public set responseTime(responseTime: number | undefined) {
        this['response_time'] = responseTime;
    }
    public get responseTime() {
        return this['response_time'];
    }
    public withResponseSize(responseSize: number): ListEventItems {
        this['response_size'] = responseSize;
        return this;
    }
    public set responseSize(responseSize: number | undefined) {
        this['response_size'] = responseSize;
    }
    public get responseSize() {
        return this['response_size'];
    }
    public withResponseBody(responseBody: string): ListEventItems {
        this['response_body'] = responseBody;
        return this;
    }
    public set responseBody(responseBody: string | undefined) {
        this['response_body'] = responseBody;
    }
    public get responseBody() {
        return this['response_body'];
    }
    public withRequestBody(requestBody: string): ListEventItems {
        this['request_body'] = requestBody;
        return this;
    }
    public set requestBody(requestBody: string | undefined) {
        this['request_body'] = requestBody;
    }
    public get requestBody() {
        return this['request_body'];
    }
}