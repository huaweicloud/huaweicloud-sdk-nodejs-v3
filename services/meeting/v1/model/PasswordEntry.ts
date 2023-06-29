

export class PasswordEntry {
    public conferenceRole?: string;
    public password?: string;
    public constructor() { 
    }
    public withConferenceRole(conferenceRole: string): PasswordEntry {
        this['conferenceRole'] = conferenceRole;
        return this;
    }
    public withPassword(password: string): PasswordEntry {
        this['password'] = password;
        return this;
    }
}