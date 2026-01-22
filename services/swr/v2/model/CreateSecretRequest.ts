

export class CreateSecretRequest {
    private 'Content-Type'?: CreateSecretRequestContentTypeEnum | string;
    public projectname?: string;
    private 'duration_seconds'?: number;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: CreateSecretRequestContentTypeEnum | string): CreateSecretRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateSecretRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): CreateSecretRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withProjectname(projectname: string): CreateSecretRequest {
        this['projectname'] = projectname;
        return this;
    }
    public withDurationSeconds(durationSeconds: number): CreateSecretRequest {
        this['duration_seconds'] = durationSeconds;
        return this;
    }
    public set durationSeconds(durationSeconds: number  | undefined) {
        this['duration_seconds'] = durationSeconds;
    }
    public get durationSeconds(): number | undefined {
        return this['duration_seconds'];
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
