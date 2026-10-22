import { ApiSign } from './ApiSign';


export class AiAppSettingRequest {
    private 'api_sign'?: ApiSign;
    public constructor() { 
    }
    public withApiSign(apiSign: ApiSign): AiAppSettingRequest {
        this['api_sign'] = apiSign;
        return this;
    }
    public set apiSign(apiSign: ApiSign  | undefined) {
        this['api_sign'] = apiSign;
    }
    public get apiSign(): ApiSign | undefined {
        return this['api_sign'];
    }
}