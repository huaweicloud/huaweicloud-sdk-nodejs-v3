import { UpdateServiceSpecificCredentialReq } from './UpdateServiceSpecificCredentialReq';


export class UpdateServiceSpecificCredentialV5Request {
    private 'user_id'?: string;
    private 'credential_id'?: string;
    public body?: UpdateServiceSpecificCredentialReq;
    public constructor(userId?: string, credentialId?: string) { 
        this['user_id'] = userId;
        this['credential_id'] = credentialId;
    }
    public withUserId(userId: string): UpdateServiceSpecificCredentialV5Request {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withCredentialId(credentialId: string): UpdateServiceSpecificCredentialV5Request {
        this['credential_id'] = credentialId;
        return this;
    }
    public set credentialId(credentialId: string  | undefined) {
        this['credential_id'] = credentialId;
    }
    public get credentialId(): string | undefined {
        return this['credential_id'];
    }
    public withBody(body: UpdateServiceSpecificCredentialReq): UpdateServiceSpecificCredentialV5Request {
        this['body'] = body;
        return this;
    }
}