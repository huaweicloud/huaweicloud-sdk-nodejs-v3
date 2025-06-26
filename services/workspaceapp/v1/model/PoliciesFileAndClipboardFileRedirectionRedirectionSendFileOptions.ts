

export class PoliciesFileAndClipboardFileRedirectionRedirectionSendFileOptions {
    private 'read_write_speed'?: number;
    public constructor() { 
    }
    public withReadWriteSpeed(readWriteSpeed: number): PoliciesFileAndClipboardFileRedirectionRedirectionSendFileOptions {
        this['read_write_speed'] = readWriteSpeed;
        return this;
    }
    public set readWriteSpeed(readWriteSpeed: number  | undefined) {
        this['read_write_speed'] = readWriteSpeed;
    }
    public get readWriteSpeed(): number | undefined {
        return this['read_write_speed'];
    }
}