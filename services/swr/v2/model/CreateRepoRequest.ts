import { CreateRepoRequestBody } from './CreateRepoRequestBody';


export class CreateRepoRequest {
    private 'Content-Type'?: CreateRepoRequestContentTypeEnum | string;
    public namespace?: string;
    public body?: CreateRepoRequestBody;
    public constructor(contentType?: string, namespace?: string) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
    }
    public withContentType(contentType: CreateRepoRequestContentTypeEnum | string): CreateRepoRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateRepoRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): CreateRepoRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): CreateRepoRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withBody(body: CreateRepoRequestBody): CreateRepoRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateRepoRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
