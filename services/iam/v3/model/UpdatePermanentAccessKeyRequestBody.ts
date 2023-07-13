import { UpdateCredentialOption } from './UpdateCredentialOption';


export class UpdatePermanentAccessKeyRequestBody {
    public credential: UpdateCredentialOption;
    public constructor(credential?: any) { 
        this['credential'] = credential;
    }
    public withCredential(credential: UpdateCredentialOption): UpdatePermanentAccessKeyRequestBody {
        this['credential'] = credential;
        return this;
    }
}