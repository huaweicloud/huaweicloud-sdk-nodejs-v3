import { Failure } from './Failure';
import { Ignore } from './Ignore';
import { ImportBaseResult } from './ImportBaseResult';
import { Success } from './Success';
import { Swagger } from './Swagger';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportApiDefinitionsV2Response extends SdkResponse {
    public success?: Array<Success>;
    public failure?: Array<Failure>;
    public swagger?: Swagger;
    private 'group_id'?: string;
    public ignore?: Array<Ignore>;
    public constructor() { 
        super();
    }
    public withSuccess(success: Array<Success>): ImportApiDefinitionsV2Response {
        this['success'] = success;
        return this;
    }
    public withFailure(failure: Array<Failure>): ImportApiDefinitionsV2Response {
        this['failure'] = failure;
        return this;
    }
    public withSwagger(swagger: Swagger): ImportApiDefinitionsV2Response {
        this['swagger'] = swagger;
        return this;
    }
    public withGroupId(groupId: string): ImportApiDefinitionsV2Response {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withIgnore(ignore: Array<Ignore>): ImportApiDefinitionsV2Response {
        this['ignore'] = ignore;
        return this;
    }
}