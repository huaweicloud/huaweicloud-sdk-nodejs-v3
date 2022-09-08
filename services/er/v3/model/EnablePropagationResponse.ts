import { Propagation } from './Propagation';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class EnablePropagationResponse extends SdkResponse {
    public propagation?: Propagation;
    private 'request_id'?: string | undefined;
    private 'X-Client-Token'?: string | undefined;
    public constructor() { 
        super();
    }
    public withPropagation(propagation: Propagation): EnablePropagationResponse {
        this['propagation'] = propagation;
        return this;
    }
    public withRequestId(requestId: string): EnablePropagationResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withXClientToken(xClientToken: string): EnablePropagationResponse {
        this['X-Client-Token'] = xClientToken;
        return this;
    }
    public set xClientToken(xClientToken: string | undefined) {
        this['X-Client-Token'] = xClientToken;
    }
    public get xClientToken() {
        return this['X-Client-Token'];
    }
}