

export class TokenInfo {
    public token?: string;
    public tmpWsToken?: string;
    public wsURL?: string;
    public role?: number;
    public expireTime?: number;
    public userID?: string;
    public orgID?: string;
    public participantID?: string;
    public confTokenExpireTime?: number;
    public vmrCurrentConfID?: string;
    public supportNotifyType?: Array<string>;
    public constructor() { 
    }
    public withToken(token: string): TokenInfo {
        this['token'] = token;
        return this;
    }
    public withTmpWsToken(tmpWsToken: string): TokenInfo {
        this['tmpWsToken'] = tmpWsToken;
        return this;
    }
    public withWsURL(wsURL: string): TokenInfo {
        this['wsURL'] = wsURL;
        return this;
    }
    public withRole(role: number): TokenInfo {
        this['role'] = role;
        return this;
    }
    public withExpireTime(expireTime: number): TokenInfo {
        this['expireTime'] = expireTime;
        return this;
    }
    public withUserID(userID: string): TokenInfo {
        this['userID'] = userID;
        return this;
    }
    public withOrgID(orgID: string): TokenInfo {
        this['orgID'] = orgID;
        return this;
    }
    public withParticipantID(participantID: string): TokenInfo {
        this['participantID'] = participantID;
        return this;
    }
    public withConfTokenExpireTime(confTokenExpireTime: number): TokenInfo {
        this['confTokenExpireTime'] = confTokenExpireTime;
        return this;
    }
    public withVmrCurrentConfID(vmrCurrentConfID: string): TokenInfo {
        this['vmrCurrentConfID'] = vmrCurrentConfID;
        return this;
    }
    public withSupportNotifyType(supportNotifyType: Array<string>): TokenInfo {
        this['supportNotifyType'] = supportNotifyType;
        return this;
    }
}