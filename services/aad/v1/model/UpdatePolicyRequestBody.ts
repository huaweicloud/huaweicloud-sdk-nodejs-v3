

export class UpdatePolicyRequestBody {
    public name?: string;
    public threshold?: number;
    public description?: string;
    public udp?: UpdatePolicyRequestBodyUdpEnum | string;
    public constructor() { 
    }
    public withName(name: string): UpdatePolicyRequestBody {
        this['name'] = name;
        return this;
    }
    public withThreshold(threshold: number): UpdatePolicyRequestBody {
        this['threshold'] = threshold;
        return this;
    }
    public withDescription(description: string): UpdatePolicyRequestBody {
        this['description'] = description;
        return this;
    }
    public withUdp(udp: UpdatePolicyRequestBodyUdpEnum | string): UpdatePolicyRequestBody {
        this['udp'] = udp;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdatePolicyRequestBodyUdpEnum {
    BLOCK = 'block',
    UNBLOCK = 'unblock'
}
