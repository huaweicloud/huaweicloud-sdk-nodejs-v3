import { DeploymentGroup } from './DeploymentGroup';


export class CreateDeploymentGroupRequest {
    private 'Content-Type'?: CreateDeploymentGroupRequestContentTypeEnum | string;
    public body?: DeploymentGroup;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: CreateDeploymentGroupRequestContentTypeEnum | string): CreateDeploymentGroupRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateDeploymentGroupRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): CreateDeploymentGroupRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: DeploymentGroup): CreateDeploymentGroupRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateDeploymentGroupRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
