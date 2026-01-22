
import { SdkResponse } from '../../SdkResponse';

export class CreateUnscopedTokenWithIdTokenResponse extends SdkResponse {
    public token?: any;
    public 'X-Subject-Token'?: string;
    public xSubjectToken?: string;
    public constructor() { 
        super();
    }
}