

export class DownloadBackupFilesReq {
    public expiration?: number;
    public constructor(expiration?: number) { 
        this['expiration'] = expiration;
    }
    public withExpiration(expiration: number): DownloadBackupFilesReq {
        this['expiration'] = expiration;
        return this;
    }
}