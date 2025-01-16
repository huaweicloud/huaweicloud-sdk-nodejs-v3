

export class UpdateCustomLineRequestBody {
    public name?: string;
    private 'ip_segments'?: Array<string>;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateCustomLineRequestBody {
        this['name'] = name;
        return this;
    }
    public withIpSegments(ipSegments: Array<string>): UpdateCustomLineRequestBody {
        this['ip_segments'] = ipSegments;
        return this;
    }
    public set ipSegments(ipSegments: Array<string>  | undefined) {
        this['ip_segments'] = ipSegments;
    }
    public get ipSegments(): Array<string> | undefined {
        return this['ip_segments'];
    }
    public withDescription(description: string): UpdateCustomLineRequestBody {
        this['description'] = description;
        return this;
    }
}