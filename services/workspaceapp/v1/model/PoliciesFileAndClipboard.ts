import { PoliciesFileAndClipboardClipboardRedirectionOptions } from './PoliciesFileAndClipboardClipboardRedirectionOptions';
import { PoliciesFileAndClipboardFileRedirection } from './PoliciesFileAndClipboardFileRedirection';


export class PoliciesFileAndClipboard {
    private 'bypass_in_remote_app_enable'?: boolean;
    private 'file_redirection'?: PoliciesFileAndClipboardFileRedirection;
    private 'fd_mobile_client_redir_enable'?: boolean;
    private 'clipboard_redirection'?: PoliciesFileAndClipboardClipboardRedirectionEnum | string;
    private 'clipboard_redirection_options'?: PoliciesFileAndClipboardClipboardRedirectionOptions;
    public constructor() { 
    }
    public withBypassInRemoteAppEnable(bypassInRemoteAppEnable: boolean): PoliciesFileAndClipboard {
        this['bypass_in_remote_app_enable'] = bypassInRemoteAppEnable;
        return this;
    }
    public set bypassInRemoteAppEnable(bypassInRemoteAppEnable: boolean  | undefined) {
        this['bypass_in_remote_app_enable'] = bypassInRemoteAppEnable;
    }
    public get bypassInRemoteAppEnable(): boolean | undefined {
        return this['bypass_in_remote_app_enable'];
    }
    public withFileRedirection(fileRedirection: PoliciesFileAndClipboardFileRedirection): PoliciesFileAndClipboard {
        this['file_redirection'] = fileRedirection;
        return this;
    }
    public set fileRedirection(fileRedirection: PoliciesFileAndClipboardFileRedirection  | undefined) {
        this['file_redirection'] = fileRedirection;
    }
    public get fileRedirection(): PoliciesFileAndClipboardFileRedirection | undefined {
        return this['file_redirection'];
    }
    public withFdMobileClientRedirEnable(fdMobileClientRedirEnable: boolean): PoliciesFileAndClipboard {
        this['fd_mobile_client_redir_enable'] = fdMobileClientRedirEnable;
        return this;
    }
    public set fdMobileClientRedirEnable(fdMobileClientRedirEnable: boolean  | undefined) {
        this['fd_mobile_client_redir_enable'] = fdMobileClientRedirEnable;
    }
    public get fdMobileClientRedirEnable(): boolean | undefined {
        return this['fd_mobile_client_redir_enable'];
    }
    public withClipboardRedirection(clipboardRedirection: PoliciesFileAndClipboardClipboardRedirectionEnum | string): PoliciesFileAndClipboard {
        this['clipboard_redirection'] = clipboardRedirection;
        return this;
    }
    public set clipboardRedirection(clipboardRedirection: PoliciesFileAndClipboardClipboardRedirectionEnum | string  | undefined) {
        this['clipboard_redirection'] = clipboardRedirection;
    }
    public get clipboardRedirection(): PoliciesFileAndClipboardClipboardRedirectionEnum | string | undefined {
        return this['clipboard_redirection'];
    }
    public withClipboardRedirectionOptions(clipboardRedirectionOptions: PoliciesFileAndClipboardClipboardRedirectionOptions): PoliciesFileAndClipboard {
        this['clipboard_redirection_options'] = clipboardRedirectionOptions;
        return this;
    }
    public set clipboardRedirectionOptions(clipboardRedirectionOptions: PoliciesFileAndClipboardClipboardRedirectionOptions  | undefined) {
        this['clipboard_redirection_options'] = clipboardRedirectionOptions;
    }
    public get clipboardRedirectionOptions(): PoliciesFileAndClipboardClipboardRedirectionOptions | undefined {
        return this['clipboard_redirection_options'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PoliciesFileAndClipboardClipboardRedirectionEnum {
    DISABLED = 'DISABLED',
    SERVER_TO_CLIENT_ENABLED = 'SERVER_TO_CLIENT_ENABLED',
    CLIENT_TO_SERVER_ENABLED = 'CLIENT_TO_SERVER_ENABLED',
    TWO_WAY_ENABLED = 'TWO_WAY_ENABLED'
}
