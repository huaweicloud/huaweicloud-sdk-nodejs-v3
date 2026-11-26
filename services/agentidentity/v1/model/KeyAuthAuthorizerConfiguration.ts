import { ApiKeyInfo } from './ApiKeyInfo';


export class KeyAuthAuthorizerConfiguration {
    private 'api_keys'?: Array<ApiKeyInfo>;
    public constructor(apiKeys?: Array<ApiKeyInfo>) { 
        this['api_keys'] = apiKeys;
    }
    public withApiKeys(apiKeys: Array<ApiKeyInfo>): KeyAuthAuthorizerConfiguration {
        this['api_keys'] = apiKeys;
        return this;
    }
    public set apiKeys(apiKeys: Array<ApiKeyInfo>  | undefined) {
        this['api_keys'] = apiKeys;
    }
    public get apiKeys(): Array<ApiKeyInfo> | undefined {
        return this['api_keys'];
    }
}