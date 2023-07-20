

export class UpdateCustomsLineReq {
    public name?: string;
    private 'ip_segments'?: Array<string>;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateCustomsLineReq {
        this['name'] = name;
        return this;
    }
    public withIpSegments(ipSegments: Array<string>): UpdateCustomsLineReq {
        this['ip_segments'] = ipSegments;
        return this;
    }
    public set ipSegments(ipSegments: Array<string>  | undefined) {
        this['ip_segments'] = ipSegments;
    }
    public get ipSegments(): Array<string> | undefined {
        return this['ip_segments'];
    }
    public withDescription(description: string): UpdateCustomsLineReq {
        this['description'] = description;
        return this;
    }
}