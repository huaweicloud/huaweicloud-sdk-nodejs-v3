

export class Nic {
    public eth?: string;
    public ip?: string;
    private 'mask_len'?: number;
    public constructor() { 
    }
    public withEth(eth: string): Nic {
        this['eth'] = eth;
        return this;
    }
    public withIp(ip: string): Nic {
        this['ip'] = ip;
        return this;
    }
    public withMaskLen(maskLen: number): Nic {
        this['mask_len'] = maskLen;
        return this;
    }
    public set maskLen(maskLen: number  | undefined) {
        this['mask_len'] = maskLen;
    }
    public get maskLen(): number | undefined {
        return this['mask_len'];
    }
}