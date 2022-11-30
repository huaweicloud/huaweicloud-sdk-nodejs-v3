import { CreateRetentionRequestBody } from './CreateRetentionRequestBody';


export class CreateRetentionRequest {
    private 'Content-Type': CreateRetentionRequestContentTypeEnum | undefined;
    public namespace: string;
    public repository: string;
    public body?: CreateRetentionRequestBody;
    public constructor(contentType?: any, namespace?: any, repository?: any) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
    }
    public withContentType(contentType: CreateRetentionRequestContentTypeEnum): CreateRetentionRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateRetentionRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): CreateRetentionRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): CreateRetentionRequest {
        this['repository'] = repository;
        return this;
    }
    public withBody(body: CreateRetentionRequestBody): CreateRetentionRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateRetentionRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
