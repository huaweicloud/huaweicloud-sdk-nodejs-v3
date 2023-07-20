import { CompressRequest } from './CompressRequest';
import { Rules } from './Rules';


export class CacheConfigRequest {
    private 'ignore_url_parameter'?: boolean;
    private 'follow_origin'?: boolean;
    public compress?: CompressRequest;
    public rules?: Array<Rules>;
    public constructor() { 
    }
    public withIgnoreUrlParameter(ignoreUrlParameter: boolean): CacheConfigRequest {
        this['ignore_url_parameter'] = ignoreUrlParameter;
        return this;
    }
    public set ignoreUrlParameter(ignoreUrlParameter: boolean  | undefined) {
        this['ignore_url_parameter'] = ignoreUrlParameter;
    }
    public get ignoreUrlParameter(): boolean | undefined {
        return this['ignore_url_parameter'];
    }
    public withFollowOrigin(followOrigin: boolean): CacheConfigRequest {
        this['follow_origin'] = followOrigin;
        return this;
    }
    public set followOrigin(followOrigin: boolean  | undefined) {
        this['follow_origin'] = followOrigin;
    }
    public get followOrigin(): boolean | undefined {
        return this['follow_origin'];
    }
    public withCompress(compress: CompressRequest): CacheConfigRequest {
        this['compress'] = compress;
        return this;
    }
    public withRules(rules: Array<Rules>): CacheConfigRequest {
        this['rules'] = rules;
        return this;
    }
}