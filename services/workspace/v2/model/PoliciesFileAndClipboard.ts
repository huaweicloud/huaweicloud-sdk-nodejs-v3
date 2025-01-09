import { PoliciesFileAndClipboardClipboardRedirectionOptions } from './PoliciesFileAndClipboardClipboardRedirectionOptions';
import { PoliciesFileAndClipboardFileRedirection } from './PoliciesFileAndClipboardFileRedirection';


export class PoliciesFileAndClipboard {
    private 'file_redirection'?: PoliciesFileAndClipboardFileRedirection;
    private 'clip_length_limit_flag_c2s'?: boolean;
    private 'clip_length_limit_c2s'?: number;
    private 'clip_length_limit_flag_s2c'?: boolean;
    private 'clip_length_limit_s2c'?: number;
    private 'fd_mobile_client_redir_enable'?: boolean;
    private 'clipboard_redirection'?: PoliciesFileAndClipboardClipboardRedirectionEnum | string;
    private 'clipboard_redirection_options'?: PoliciesFileAndClipboardClipboardRedirectionOptions;
    public constructor() { 
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
    public withClipLengthLimitFlagC2s(clipLengthLimitFlagC2s: boolean): PoliciesFileAndClipboard {
        this['clip_length_limit_flag_c2s'] = clipLengthLimitFlagC2s;
        return this;
    }
    public set clipLengthLimitFlagC2s(clipLengthLimitFlagC2s: boolean  | undefined) {
        this['clip_length_limit_flag_c2s'] = clipLengthLimitFlagC2s;
    }
    public get clipLengthLimitFlagC2s(): boolean | undefined {
        return this['clip_length_limit_flag_c2s'];
    }
    public withClipLengthLimitC2s(clipLengthLimitC2s: number): PoliciesFileAndClipboard {
        this['clip_length_limit_c2s'] = clipLengthLimitC2s;
        return this;
    }
    public set clipLengthLimitC2s(clipLengthLimitC2s: number  | undefined) {
        this['clip_length_limit_c2s'] = clipLengthLimitC2s;
    }
    public get clipLengthLimitC2s(): number | undefined {
        return this['clip_length_limit_c2s'];
    }
    public withClipLengthLimitFlagS2c(clipLengthLimitFlagS2c: boolean): PoliciesFileAndClipboard {
        this['clip_length_limit_flag_s2c'] = clipLengthLimitFlagS2c;
        return this;
    }
    public set clipLengthLimitFlagS2c(clipLengthLimitFlagS2c: boolean  | undefined) {
        this['clip_length_limit_flag_s2c'] = clipLengthLimitFlagS2c;
    }
    public get clipLengthLimitFlagS2c(): boolean | undefined {
        return this['clip_length_limit_flag_s2c'];
    }
    public withClipLengthLimitS2c(clipLengthLimitS2c: number): PoliciesFileAndClipboard {
        this['clip_length_limit_s2c'] = clipLengthLimitS2c;
        return this;
    }
    public set clipLengthLimitS2c(clipLengthLimitS2c: number  | undefined) {
        this['clip_length_limit_s2c'] = clipLengthLimitS2c;
    }
    public get clipLengthLimitS2c(): number | undefined {
        return this['clip_length_limit_s2c'];
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
