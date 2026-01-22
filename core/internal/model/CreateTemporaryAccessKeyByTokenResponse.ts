import { Credential } from './Credential';

import { SdkResponse } from '../../SdkResponse';

export class CreateTemporaryAccessKeyByTokenResponse extends SdkResponse {
    public credential?: Credential;
    public constructor() { 
        super();
    }
    public withCredential(credential: Credential): this {
        this.credential = credential;
        return this;
    }
}
