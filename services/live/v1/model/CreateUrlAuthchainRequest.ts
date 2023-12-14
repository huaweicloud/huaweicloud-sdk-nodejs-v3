import { CreateUrlAuthchainReq } from './CreateUrlAuthchainReq';


export class CreateUrlAuthchainRequest {
    public body?: CreateUrlAuthchainReq;
    public constructor() { 
    }
    public withBody(body: CreateUrlAuthchainReq): CreateUrlAuthchainRequest {
        this['body'] = body;
        return this;
    }
}