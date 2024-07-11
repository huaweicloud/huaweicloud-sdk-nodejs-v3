import { SetRefererChainInfo } from './SetRefererChainInfo';


export class SetRefererChainRequest {
    public body?: SetRefererChainInfo;
    public constructor() { 
    }
    public withBody(body: SetRefererChainInfo): SetRefererChainRequest {
        this['body'] = body;
        return this;
    }
}