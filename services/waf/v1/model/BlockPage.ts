import { CustomPage } from './CustomPage';


export class BlockPage {
    public template?: string;
    private 'custom_page'?: CustomPage;
    private 'redirect_url'?: string;
    public constructor(template?: string) { 
        this['template'] = template;
    }
    public withTemplate(template: string): BlockPage {
        this['template'] = template;
        return this;
    }
    public withCustomPage(customPage: CustomPage): BlockPage {
        this['custom_page'] = customPage;
        return this;
    }
    public set customPage(customPage: CustomPage  | undefined) {
        this['custom_page'] = customPage;
    }
    public get customPage(): CustomPage | undefined {
        return this['custom_page'];
    }
    public withRedirectUrl(redirectUrl: string): BlockPage {
        this['redirect_url'] = redirectUrl;
        return this;
    }
    public set redirectUrl(redirectUrl: string  | undefined) {
        this['redirect_url'] = redirectUrl;
    }
    public get redirectUrl(): string | undefined {
        return this['redirect_url'];
    }
}