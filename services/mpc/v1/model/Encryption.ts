import { HlsEncrypt } from './HlsEncrypt';


export class Encryption {
    private 'hls_encrypt'?: HlsEncrypt | undefined;
    public constructor() { 
    }
    public withHlsEncrypt(hlsEncrypt: HlsEncrypt): Encryption {
        this['hls_encrypt'] = hlsEncrypt;
        return this;
    }
    public set hlsEncrypt(hlsEncrypt: HlsEncrypt | undefined) {
        this['hls_encrypt'] = hlsEncrypt;
    }
    public get hlsEncrypt() {
        return this['hls_encrypt'];
    }
}