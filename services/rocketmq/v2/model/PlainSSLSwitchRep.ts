

export class PlainSSLSwitchRep {
    private 'tls_mode'?: string;
    public constructor() { 
    }
    public withTlsMode(tlsMode: string): PlainSSLSwitchRep {
        this['tls_mode'] = tlsMode;
        return this;
    }
    public set tlsMode(tlsMode: string  | undefined) {
        this['tls_mode'] = tlsMode;
    }
    public get tlsMode(): string | undefined {
        return this['tls_mode'];
    }
}