

export class SwitchSslRequestBody {
    private 'ssl_option'?: string;
    public constructor(sslOption?: string) { 
        this['ssl_option'] = sslOption;
    }
    public withSslOption(sslOption: string): SwitchSslRequestBody {
        this['ssl_option'] = sslOption;
        return this;
    }
    public set sslOption(sslOption: string  | undefined) {
        this['ssl_option'] = sslOption;
    }
    public get sslOption(): string | undefined {
        return this['ssl_option'];
    }
}