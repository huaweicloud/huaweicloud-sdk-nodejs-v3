import { DeploymentGroup } from './DeploymentGroup';


export class CreateDeploymentGroupRequest {
    private 'Content-Type': CreateDeploymentGroupRequestContentTypeEnum | undefined;
    public body?: DeploymentGroup;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: CreateDeploymentGroupRequestContentTypeEnum): CreateDeploymentGroupRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateDeploymentGroupRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
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
