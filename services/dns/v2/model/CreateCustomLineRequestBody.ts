

export class CreateCustomLineRequestBody {
    public name?: string;
    private 'ip_segments'?: Array<string>;
    public description?: string;
    public constructor(name?: string, ipSegments?: Array<string>) { 
        this['name'] = name;
        this['ip_segments'] = ipSegments;
    }
    public withName(name: string): CreateCustomLineRequestBody {
        this['name'] = name;
        return this;
    }
    public withIpSegments(ipSegments: Array<string>): CreateCustomLineRequestBody {
        this['ip_segments'] = ipSegments;
        return this;
    }
    public set ipSegments(ipSegments: Array<string>  | undefined) {
        this['ip_segments'] = ipSegments;
    }
    public get ipSegments(): Array<string> | undefined {
        return this['ip_segments'];
    }
    public withDescription(description: string): CreateCustomLineRequestBody {
        this['description'] = description;
        return this;
    }
}