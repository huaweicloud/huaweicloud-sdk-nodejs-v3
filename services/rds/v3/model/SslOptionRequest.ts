

export class SslOptionRequest {
    private 'ssl_option'?: boolean;
    public constructor(sslOption?: boolean) { 
        this['ssl_option'] = sslOption;
    }
    public withSslOption(sslOption: boolean): SslOptionRequest {
        this['ssl_option'] = sslOption;
        return this;
    }
    public set sslOption(sslOption: boolean  | undefined) {
        this['ssl_option'] = sslOption;
    }
    public get sslOption(): boolean | undefined {
        return this['ssl_option'];
    }
}