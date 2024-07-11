import { EnvironmentPermissionV2Body } from './EnvironmentPermissionV2Body';


export class UpdateEnvironmentPermissionRequest {
    private 'Content-Type'?: UpdateEnvironmentPermissionRequestContentTypeEnum | string;
    private 'application_id'?: string;
    private 'environment_id'?: string;
    public body?: EnvironmentPermissionV2Body;
    public constructor(contentType?: string, applicationId?: string, environmentId?: string) { 
        this['Content-Type'] = contentType;
        this['application_id'] = applicationId;
        this['environment_id'] = environmentId;
    }
    public withContentType(contentType: UpdateEnvironmentPermissionRequestContentTypeEnum | string): UpdateEnvironmentPermissionRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: UpdateEnvironmentPermissionRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): UpdateEnvironmentPermissionRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withApplicationId(applicationId: string): UpdateEnvironmentPermissionRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withEnvironmentId(environmentId: string): UpdateEnvironmentPermissionRequest {
        this['environment_id'] = environmentId;
        return this;
    }
    public set environmentId(environmentId: string  | undefined) {
        this['environment_id'] = environmentId;
    }
    public get environmentId(): string | undefined {
        return this['environment_id'];
    }
    public withBody(body: EnvironmentPermissionV2Body): UpdateEnvironmentPermissionRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateEnvironmentPermissionRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
