

export class HeaderMap {
    private 'Content-Disposition'?: string | undefined;
    private 'Content-Language'?: string | undefined;
    private 'Access-Control-Allow-Origin'?: string | undefined;
    private 'Access-Control-Allow-Methods'?: string | undefined;
    private 'Access-Control-Max-Age'?: string | undefined;
    private 'Access-Control-Expose-Headers'?: string | undefined;
    public constructor() { 
    }
    public withContentDisposition(contentDisposition: string): HeaderMap {
        this['Content-Disposition'] = contentDisposition;
        return this;
    }
    public set contentDisposition(contentDisposition: string | undefined) {
        this['Content-Disposition'] = contentDisposition;
    }
    public get contentDisposition() {
        return this['Content-Disposition'];
    }
    public withContentLanguage(contentLanguage: string): HeaderMap {
        this['Content-Language'] = contentLanguage;
        return this;
    }
    public set contentLanguage(contentLanguage: string | undefined) {
        this['Content-Language'] = contentLanguage;
    }
    public get contentLanguage() {
        return this['Content-Language'];
    }
    public withAccessControlAllowOrigin(accessControlAllowOrigin: string): HeaderMap {
        this['Access-Control-Allow-Origin'] = accessControlAllowOrigin;
        return this;
    }
    public set accessControlAllowOrigin(accessControlAllowOrigin: string | undefined) {
        this['Access-Control-Allow-Origin'] = accessControlAllowOrigin;
    }
    public get accessControlAllowOrigin() {
        return this['Access-Control-Allow-Origin'];
    }
    public withAccessControlAllowMethods(accessControlAllowMethods: string): HeaderMap {
        this['Access-Control-Allow-Methods'] = accessControlAllowMethods;
        return this;
    }
    public set accessControlAllowMethods(accessControlAllowMethods: string | undefined) {
        this['Access-Control-Allow-Methods'] = accessControlAllowMethods;
    }
    public get accessControlAllowMethods() {
        return this['Access-Control-Allow-Methods'];
    }
    public withAccessControlMaxAge(accessControlMaxAge: string): HeaderMap {
        this['Access-Control-Max-Age'] = accessControlMaxAge;
        return this;
    }
    public set accessControlMaxAge(accessControlMaxAge: string | undefined) {
        this['Access-Control-Max-Age'] = accessControlMaxAge;
    }
    public get accessControlMaxAge() {
        return this['Access-Control-Max-Age'];
    }
    public withAccessControlExposeHeaders(accessControlExposeHeaders: string): HeaderMap {
        this['Access-Control-Expose-Headers'] = accessControlExposeHeaders;
        return this;
    }
    public set accessControlExposeHeaders(accessControlExposeHeaders: string | undefined) {
        this['Access-Control-Expose-Headers'] = accessControlExposeHeaders;
    }
    public get accessControlExposeHeaders() {
        return this['Access-Control-Expose-Headers'];
    }
}