

export class IntranetConnectionModifyRequest {
    private 'custom_urls'?: Array<string>;
    public constructor(customUrls?: Array<string>) { 
        this['custom_urls'] = customUrls;
    }
    public withCustomUrls(customUrls: Array<string>): IntranetConnectionModifyRequest {
        this['custom_urls'] = customUrls;
        return this;
    }
    public set customUrls(customUrls: Array<string>  | undefined) {
        this['custom_urls'] = customUrls;
    }
    public get customUrls(): Array<string> | undefined {
        return this['custom_urls'];
    }
}