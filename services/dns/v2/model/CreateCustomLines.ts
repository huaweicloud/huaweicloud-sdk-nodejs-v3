

export class CreateCustomLines {
    public name: string;
    private 'ip_segments': Array<string> | undefined;
    public description?: string;
    public constructor(name?: any, ipSegments?: any) { 
        this['name'] = name;
        this['ip_segments'] = ipSegments;
    }
    public withName(name: string): CreateCustomLines {
        this['name'] = name;
        return this;
    }
    public withIpSegments(ipSegments: Array<string>): CreateCustomLines {
        this['ip_segments'] = ipSegments;
        return this;
    }
    public set ipSegments(ipSegments: Array<string> | undefined) {
        this['ip_segments'] = ipSegments;
    }
    public get ipSegments() {
        return this['ip_segments'];
    }
    public withDescription(description: string): CreateCustomLines {
        this['description'] = description;
        return this;
    }
}