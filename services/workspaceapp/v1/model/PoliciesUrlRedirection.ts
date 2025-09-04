import { UrlRedirectionOptions } from './UrlRedirectionOptions';


export class PoliciesUrlRedirection {
    private 'url_redirection_enable'?: boolean;
    public options?: UrlRedirectionOptions;
    public constructor() { 
    }
    public withUrlRedirectionEnable(urlRedirectionEnable: boolean): PoliciesUrlRedirection {
        this['url_redirection_enable'] = urlRedirectionEnable;
        return this;
    }
    public set urlRedirectionEnable(urlRedirectionEnable: boolean  | undefined) {
        this['url_redirection_enable'] = urlRedirectionEnable;
    }
    public get urlRedirectionEnable(): boolean | undefined {
        return this['url_redirection_enable'];
    }
    public withOptions(options: UrlRedirectionOptions): PoliciesUrlRedirection {
        this['options'] = options;
        return this;
    }
}