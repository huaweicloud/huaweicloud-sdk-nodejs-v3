

export class HlsEncrypt {
    public key: string;
    public url: string;
    public iv?: string;
    public algorithm?: string;
    public constructor(key?: any, url?: any) { 
        this['key'] = key;
        this['url'] = url;
    }
    public withKey(key: string): HlsEncrypt {
        this['key'] = key;
        return this;
    }
    public withUrl(url: string): HlsEncrypt {
        this['url'] = url;
        return this;
    }
    public withIv(iv: string): HlsEncrypt {
        this['iv'] = iv;
        return this;
    }
    public withAlgorithm(algorithm: string): HlsEncrypt {
        this['algorithm'] = algorithm;
        return this;
    }
}