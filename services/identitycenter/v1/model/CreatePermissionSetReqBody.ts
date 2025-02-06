import { TagDto } from './TagDto';


export class CreatePermissionSetReqBody {
    public description?: string;
    public name?: string;
    private 'relay_state'?: string;
    private 'session_duration'?: string;
    public tags?: Array<TagDto>;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withDescription(description: string): CreatePermissionSetReqBody {
        this['description'] = description;
        return this;
    }
    public withName(name: string): CreatePermissionSetReqBody {
        this['name'] = name;
        return this;
    }
    public withRelayState(relayState: string): CreatePermissionSetReqBody {
        this['relay_state'] = relayState;
        return this;
    }
    public set relayState(relayState: string  | undefined) {
        this['relay_state'] = relayState;
    }
    public get relayState(): string | undefined {
        return this['relay_state'];
    }
    public withSessionDuration(sessionDuration: string): CreatePermissionSetReqBody {
        this['session_duration'] = sessionDuration;
        return this;
    }
    public set sessionDuration(sessionDuration: string  | undefined) {
        this['session_duration'] = sessionDuration;
    }
    public get sessionDuration(): string | undefined {
        return this['session_duration'];
    }
    public withTags(tags: Array<TagDto>): CreatePermissionSetReqBody {
        this['tags'] = tags;
        return this;
    }
}