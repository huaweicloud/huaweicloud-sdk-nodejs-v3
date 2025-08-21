import { DeployKeyParamsDto } from './DeployKeyParamsDto';


export class AddSshKeyRequest {
    public body?: DeployKeyParamsDto;
    public constructor() { 
    }
    public withBody(body: DeployKeyParamsDto): AddSshKeyRequest {
        this['body'] = body;
        return this;
    }
}