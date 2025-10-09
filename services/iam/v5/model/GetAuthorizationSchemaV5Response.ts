import { Action } from './Action';
import { Condition } from './Condition';
import { Operation } from './Operation';
import { Resource } from './Resource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetAuthorizationSchemaV5Response extends SdkResponse {
    public version?: string;
    public actions?: Array<Action>;
    public resources?: Array<Resource>;
    public conditions?: Array<Condition>;
    public operations?: Array<Operation>;
    public constructor() { 
        super();
    }
    public withVersion(version: string): GetAuthorizationSchemaV5Response {
        this['version'] = version;
        return this;
    }
    public withActions(actions: Array<Action>): GetAuthorizationSchemaV5Response {
        this['actions'] = actions;
        return this;
    }
    public withResources(resources: Array<Resource>): GetAuthorizationSchemaV5Response {
        this['resources'] = resources;
        return this;
    }
    public withConditions(conditions: Array<Condition>): GetAuthorizationSchemaV5Response {
        this['conditions'] = conditions;
        return this;
    }
    public withOperations(operations: Array<Operation>): GetAuthorizationSchemaV5Response {
        this['operations'] = operations;
        return this;
    }
}