

export class DownloadBackupFilesReq {
    public expiration: number;
    public constructor(expiration?: any) { 
        this['expiration'] = expiration;
    }
    public withExpiration(expiration: number): DownloadBackupFilesReq {
        this['expiration'] = expiration;
        return this;
    }
}