import { FileRedirectionOptions } from './FileRedirectionOptions';
import { PoliciesFileAndClipboardFileRedirectionRedirectionSendFileOptions } from './PoliciesFileAndClipboardFileRedirectionRedirectionSendFileOptions';


export class PoliciesFileAndClipboardFileRedirection {
    private 'redirection_mode'?: PoliciesFileAndClipboardFileRedirectionRedirectionModeEnum | string;
    public options?: FileRedirectionOptions;
    private 'vm_send_file_client'?: boolean;
    private 'redirection_send_file_options'?: PoliciesFileAndClipboardFileRedirectionRedirectionSendFileOptions;
    public constructor() { 
    }
    public withRedirectionMode(redirectionMode: PoliciesFileAndClipboardFileRedirectionRedirectionModeEnum | string): PoliciesFileAndClipboardFileRedirection {
        this['redirection_mode'] = redirectionMode;
        return this;
    }
    public set redirectionMode(redirectionMode: PoliciesFileAndClipboardFileRedirectionRedirectionModeEnum | string  | undefined) {
        this['redirection_mode'] = redirectionMode;
    }
    public get redirectionMode(): PoliciesFileAndClipboardFileRedirectionRedirectionModeEnum | string | undefined {
        return this['redirection_mode'];
    }
    public withOptions(options: FileRedirectionOptions): PoliciesFileAndClipboardFileRedirection {
        this['options'] = options;
        return this;
    }
    public withVmSendFileClient(vmSendFileClient: boolean): PoliciesFileAndClipboardFileRedirection {
        this['vm_send_file_client'] = vmSendFileClient;
        return this;
    }
    public set vmSendFileClient(vmSendFileClient: boolean  | undefined) {
        this['vm_send_file_client'] = vmSendFileClient;
    }
    public get vmSendFileClient(): boolean | undefined {
        return this['vm_send_file_client'];
    }
    public withRedirectionSendFileOptions(redirectionSendFileOptions: PoliciesFileAndClipboardFileRedirectionRedirectionSendFileOptions): PoliciesFileAndClipboardFileRedirection {
        this['redirection_send_file_options'] = redirectionSendFileOptions;
        return this;
    }
    public set redirectionSendFileOptions(redirectionSendFileOptions: PoliciesFileAndClipboardFileRedirectionRedirectionSendFileOptions  | undefined) {
        this['redirection_send_file_options'] = redirectionSendFileOptions;
    }
    public get redirectionSendFileOptions(): PoliciesFileAndClipboardFileRedirectionRedirectionSendFileOptions | undefined {
        return this['redirection_send_file_options'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PoliciesFileAndClipboardFileRedirectionRedirectionModeEnum {
    DISABLED = 'DISABLED',
    READ_ONLY = 'READ_ONLY',
    READ_AND_WRITE = 'READ_AND_WRITE'
}
