import { CompressResponse } from './CompressResponse';
import { Rules } from './Rules';


export class CacheConfig {
    private 'ignore_url_parameter'?: boolean | undefined;
    private 'follow_origin'?: boolean | undefined;
    public compress?: CompressResponse;
    public rules?: Array<Rules>;
    public constructor() { 
    }
    public withIgnoreUrlParameter(ignoreUrlParameter: boolean): CacheConfig {
        this['ignore_url_parameter'] = ignoreUrlParameter;
        return this;
    }
    public set ignoreUrlParameter(ignoreUrlParameter: boolean | undefined) {
        this['ignore_url_parameter'] = ignoreUrlParameter;
    }
    public get ignoreUrlParameter() {
        return this['ignore_url_parameter'];
    }
    public withFollowOrigin(followOrigin: boolean): CacheConfig {
        this['follow_origin'] = followOrigin;
        return this;
    }
    public set followOrigin(followOrigin: boolean | undefined) {
        this['follow_origin'] = followOrigin;
    }
    public get followOrigin() {
        return this['follow_origin'];
    }
    public withCompress(compress: CompressResponse): CacheConfig {
        this['compress'] = compress;
        return this;
    }
    public withRules(rules: Array<Rules>): CacheConfig {
        this['rules'] = rules;
        return this;
    }
}