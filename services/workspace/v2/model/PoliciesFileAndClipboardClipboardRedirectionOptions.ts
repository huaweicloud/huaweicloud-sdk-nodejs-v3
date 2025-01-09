

export class PoliciesFileAndClipboardClipboardRedirectionOptions {
    private 'rich_text_redirection_enable'?: boolean;
    private 'clipboard_file_redirection_enable'?: boolean;
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
}