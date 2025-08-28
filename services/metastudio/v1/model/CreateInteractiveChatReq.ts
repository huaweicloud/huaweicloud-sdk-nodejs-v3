import { LanguageEnum } from './LanguageEnum';


export class CreateInteractiveChatReq {
    private 'role_id'?: string;
    public message?: string;
    private 'session_id'?: string;
    public language?: LanguageEnum;
    public constructor(roleId?: string, message?: string, sessionId?: string) { 
        this['role_id'] = roleId;
        this['message'] = message;
        this['session_id'] = sessionId;
    }
    public withRoleId(roleId: string): CreateInteractiveChatReq {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
    public withMessage(message: string): CreateInteractiveChatReq {
        this['message'] = message;
        return this;
    }
    public withSessionId(sessionId: string): CreateInteractiveChatReq {
        this['session_id'] = sessionId;
        return this;
    }
    public set sessionId(sessionId: string  | undefined) {
        this['session_id'] = sessionId;
    }
    public get sessionId(): string | undefined {
        return this['session_id'];
    }
    public withLanguage(language: LanguageEnum): CreateInteractiveChatReq {
        this['language'] = language;
        return this;
    }
}