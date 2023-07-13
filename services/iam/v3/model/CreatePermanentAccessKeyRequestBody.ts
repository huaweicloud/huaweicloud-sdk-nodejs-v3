import { CreateCredentialOption } from './CreateCredentialOption';


export class CreatePermanentAccessKeyRequestBody {
    public credential: CreateCredentialOption;
    public constructor(credential?: any) { 
        this['credential'] = credential;
    }
    public withCredential(credential: CreateCredentialOption): CreatePermanentAccessKeyRequestBody {
        this['credential'] = credential;
        return this;
    }
}