import { UserIdentifier } from './UserIdentifier';


export class CompleteResourceTokenAuthRequestBody {
    private 'session_uri'?: string;
    private 'user_identifier'?: UserIdentifier;
    public constructor(sessionUri?: string, userIdentifier?: UserIdentifier) { 
        this['session_uri'] = sessionUri;
        this['user_identifier'] = userIdentifier;
    }
    public withSessionUri(sessionUri: string): CompleteResourceTokenAuthRequestBody {
        this['session_uri'] = sessionUri;
        return this;
    }
    public set sessionUri(sessionUri: string  | undefined) {
        this['session_uri'] = sessionUri;
    }
    public get sessionUri(): string | undefined {
        return this['session_uri'];
    }
    public withUserIdentifier(userIdentifier: UserIdentifier): CompleteResourceTokenAuthRequestBody {
        this['user_identifier'] = userIdentifier;
        return this;
    }
    public set userIdentifier(userIdentifier: UserIdentifier  | undefined) {
        this['user_identifier'] = userIdentifier;
    }
    public get userIdentifier(): UserIdentifier | undefined {
        return this['user_identifier'];
    }
}