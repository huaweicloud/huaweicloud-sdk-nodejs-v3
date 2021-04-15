

export class ReinstallSeverMetadata {
    private 'user_data'?: string | undefined;
    public constructor() { 
    }
    public withUserData(userData: string): ReinstallSeverMetadata {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string | undefined) {
        this['user_data'] = userData;
    }
    public get userData() {
        return this['user_data'];
    }
}