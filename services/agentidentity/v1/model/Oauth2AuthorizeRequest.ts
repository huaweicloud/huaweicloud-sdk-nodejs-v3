

export class Oauth2AuthorizeRequest {
    private 'request_uri'?: string;
    public constructor(requestUri?: string) { 
        this['request_uri'] = requestUri;
    }
    public withRequestUri(requestUri: string): Oauth2AuthorizeRequest {
        this['request_uri'] = requestUri;
        return this;
    }
    public set requestUri(requestUri: string  | undefined) {
        this['request_uri'] = requestUri;
    }
    public get requestUri(): string | undefined {
        return this['request_uri'];
    }
}