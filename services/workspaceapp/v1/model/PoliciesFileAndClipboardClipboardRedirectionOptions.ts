

export class PoliciesFileAndClipboardClipboardRedirectionOptions {
    private 'rich_text_redirection_enable'?: boolean;
    private 'rich_text_clipboard_redirection'?: PoliciesFileAndClipboardClipboardRedirectionOptionsRichTextClipboardRedirectionEnum | string;
    private 'clipboard_file_redirection_enable'?: boolean;
    private 'file_clipboard_redirection'?: PoliciesFileAndClipboardClipboardRedirectionOptionsFileClipboardRedirectionEnum | string;
    private 'clipboard_length_limit_cts_enable'?: boolean;
    private 'clipboard_length_limit_cts'?: number;
    private 'clipboard_length_limit_stc_enable'?: boolean;
    private 'clipboard_length_limit_stc'?: number;
    public constructor() { 
    }
    public withRichTextRedirectionEnable(richTextRedirectionEnable: boolean): PoliciesFileAndClipboardClipboardRedirectionOptions {
        this['rich_text_redirection_enable'] = richTextRedirectionEnable;
        return this;
    }
    public set richTextRedirectionEnable(richTextRedirectionEnable: boolean  | undefined) {
        this['rich_text_redirection_enable'] = richTextRedirectionEnable;
    }
    public get richTextRedirectionEnable(): boolean | undefined {
        return this['rich_text_redirection_enable'];
    }
    public withRichTextClipboardRedirection(richTextClipboardRedirection: PoliciesFileAndClipboardClipboardRedirectionOptionsRichTextClipboardRedirectionEnum | string): PoliciesFileAndClipboardClipboardRedirectionOptions {
        this['rich_text_clipboard_redirection'] = richTextClipboardRedirection;
        return this;
    }
    public set richTextClipboardRedirection(richTextClipboardRedirection: PoliciesFileAndClipboardClipboardRedirectionOptionsRichTextClipboardRedirectionEnum | string  | undefined) {
        this['rich_text_clipboard_redirection'] = richTextClipboardRedirection;
    }
    public get richTextClipboardRedirection(): PoliciesFileAndClipboardClipboardRedirectionOptionsRichTextClipboardRedirectionEnum | string | undefined {
        return this['rich_text_clipboard_redirection'];
    }
    public withClipboardFileRedirectionEnable(clipboardFileRedirectionEnable: boolean): PoliciesFileAndClipboardClipboardRedirectionOptions {
        this['clipboard_file_redirection_enable'] = clipboardFileRedirectionEnable;
        return this;
    }
    public set clipboardFileRedirectionEnable(clipboardFileRedirectionEnable: boolean  | undefined) {
        this['clipboard_file_redirection_enable'] = clipboardFileRedirectionEnable;
    }
    public get clipboardFileRedirectionEnable(): boolean | undefined {
        return this['clipboard_file_redirection_enable'];
    }
    public withFileClipboardRedirection(fileClipboardRedirection: PoliciesFileAndClipboardClipboardRedirectionOptionsFileClipboardRedirectionEnum | string): PoliciesFileAndClipboardClipboardRedirectionOptions {
        this['file_clipboard_redirection'] = fileClipboardRedirection;
        return this;
    }
    public set fileClipboardRedirection(fileClipboardRedirection: PoliciesFileAndClipboardClipboardRedirectionOptionsFileClipboardRedirectionEnum | string  | undefined) {
        this['file_clipboard_redirection'] = fileClipboardRedirection;
    }
    public get fileClipboardRedirection(): PoliciesFileAndClipboardClipboardRedirectionOptionsFileClipboardRedirectionEnum | string | undefined {
        return this['file_clipboard_redirection'];
    }
    public withClipboardLengthLimitCtsEnable(clipboardLengthLimitCtsEnable: boolean): PoliciesFileAndClipboardClipboardRedirectionOptions {
        this['clipboard_length_limit_cts_enable'] = clipboardLengthLimitCtsEnable;
        return this;
    }
    public set clipboardLengthLimitCtsEnable(clipboardLengthLimitCtsEnable: boolean  | undefined) {
        this['clipboard_length_limit_cts_enable'] = clipboardLengthLimitCtsEnable;
    }
    public get clipboardLengthLimitCtsEnable(): boolean | undefined {
        return this['clipboard_length_limit_cts_enable'];
    }
    public withClipboardLengthLimitCts(clipboardLengthLimitCts: number): PoliciesFileAndClipboardClipboardRedirectionOptions {
        this['clipboard_length_limit_cts'] = clipboardLengthLimitCts;
        return this;
    }
    public set clipboardLengthLimitCts(clipboardLengthLimitCts: number  | undefined) {
        this['clipboard_length_limit_cts'] = clipboardLengthLimitCts;
    }
    public get clipboardLengthLimitCts(): number | undefined {
        return this['clipboard_length_limit_cts'];
    }
    public withClipboardLengthLimitStcEnable(clipboardLengthLimitStcEnable: boolean): PoliciesFileAndClipboardClipboardRedirectionOptions {
        this['clipboard_length_limit_stc_enable'] = clipboardLengthLimitStcEnable;
        return this;
    }
    public set clipboardLengthLimitStcEnable(clipboardLengthLimitStcEnable: boolean  | undefined) {
        this['clipboard_length_limit_stc_enable'] = clipboardLengthLimitStcEnable;
    }
    public get clipboardLengthLimitStcEnable(): boolean | undefined {
        return this['clipboard_length_limit_stc_enable'];
    }
    public withClipboardLengthLimitStc(clipboardLengthLimitStc: number): PoliciesFileAndClipboardClipboardRedirectionOptions {
        this['clipboard_length_limit_stc'] = clipboardLengthLimitStc;
        return this;
    }
    public set clipboardLengthLimitStc(clipboardLengthLimitStc: number  | undefined) {
        this['clipboard_length_limit_stc'] = clipboardLengthLimitStc;
    }
    public get clipboardLengthLimitStc(): number | undefined {
        return this['clipboard_length_limit_stc'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PoliciesFileAndClipboardClipboardRedirectionOptionsRichTextClipboardRedirectionEnum {
    DISABLED = 'DISABLED',
    SERVER_TO_CLIENT_ENABLED = 'SERVER_TO_CLIENT_ENABLED',
    CLIENT_TO_SERVER_ENABLED = 'CLIENT_TO_SERVER_ENABLED',
    TWO_WAY_ENABLED = 'TWO_WAY_ENABLED'
}
/**
    * @export
    * @enum {string}
    */
export enum PoliciesFileAndClipboardClipboardRedirectionOptionsFileClipboardRedirectionEnum {
    DISABLED = 'DISABLED',
    SERVER_TO_CLIENT_ENABLED = 'SERVER_TO_CLIENT_ENABLED',
    CLIENT_TO_SERVER_ENABLED = 'CLIENT_TO_SERVER_ENABLED',
    TWO_WAY_ENABLED = 'TWO_WAY_ENABLED'
}
