

export class UploadDatabaseSslFileRequest {
    private 'pem_key_txt'?: string;
    public constructor(pemKeyTxt?: string) { 
        this['pem_key_txt'] = pemKeyTxt;
    }
    public withPemKeyTxt(pemKeyTxt: string): UploadDatabaseSslFileRequest {
        this['pem_key_txt'] = pemKeyTxt;
        return this;
    }
    public set pemKeyTxt(pemKeyTxt: string  | undefined) {
        this['pem_key_txt'] = pemKeyTxt;
    }
    public get pemKeyTxt(): string | undefined {
        return this['pem_key_txt'];
    }
}