

export class CreateSecretRequest {
    private 'Content-Type': CreateSecretRequestContentTypeEnum | undefined;
    public projectname?: string;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: CreateSecretRequestContentTypeEnum): CreateSecretRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateSecretRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withProjectname(projectname: string): CreateSecretRequest {
        this['projectname'] = projectname;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSecretRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
